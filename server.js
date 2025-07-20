const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const User = require("./models/User");
const PointHistory = require("./models/PointHistory");
const { initializeUsers } = require("./utils/initializeData");

const app = express();
app.set('trust proxy', 1); // trust first proxy
const server = http.createServer(app);

// Configure CORS origins based on environment
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_URL, "https://your-app-name.netlify.app"]
    : ["http://localhost:3000"];

const io = socketIo(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use("/api/", limiter);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    initializeUsers();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Socket.io connection
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Routes

// Get all users with rankings
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });

    // Calculate rankings
    const usersWithRankings = users.map((user, index) => ({
      ...user.toObject(),
      rank: index + 1,
    }));

    res.json(usersWithRankings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new user
app.post("/api/users", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Name is required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ name: name.trim() });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({ name: name.trim() });
    await user.save();

    // Emit updated leaderboard to all clients
    const users = await User.find().sort({ totalPoints: -1 });
    const usersWithRankings = users.map((user, index) => ({
      ...user.toObject(),
      rank: index + 1,
    }));

    io.emit("leaderboardUpdate", usersWithRankings);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Claim points for a user
app.post("/api/users/:userId/claim", async (req, res) => {
  try {
    const { userId } = req.params;

    // Generate random points between 1 and 10
    const pointsAwarded = Math.floor(Math.random() * 10) + 1;

    // Update user's total points
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalPoints: pointsAwarded } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create history entry
    const history = new PointHistory({
      userId: user._id,
      userName: user.name,
      pointsAwarded,
      timestamp: new Date(),
    });
    await history.save();

    // Get updated leaderboard
    const users = await User.find().sort({ totalPoints: -1 });
    const usersWithRankings = users.map((user, index) => ({
      ...user.toObject(),
      rank: index + 1,
    }));

    // Emit updated leaderboard to all clients
    io.emit("leaderboardUpdate", usersWithRankings);

    res.json({
      user,
      pointsAwarded,
      leaderboard: usersWithRankings,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get point history
app.get("/api/history", async (req, res) => {
  try {
    const history = await PointHistory.find().sort({ timestamp: -1 }).limit(50); // Get last 50 entries

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get point history for a specific user
app.get("/api/users/:userId/history", async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await PointHistory.find({ userId })
      .sort({ timestamp: -1 })
      .limit(20); // Get last 20 entries for the user

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, io };
