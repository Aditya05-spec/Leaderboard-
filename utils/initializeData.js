const User = require("../models/User");

const initialUsers = [
  "Rahul",
  "Kamal",
  "Sanak",
  "Priya",
  "Amit",
  "Sneha",
  "Vikram",
  "Anjali",
  "Rohan",
  "Pooja",
];

async function initializeUsers() {
  try {
    const existingUsers = await User.find();

    if (existingUsers.length === 0) {
      console.log("Initializing users...");

      const userPromises = initialUsers.map((name) => {
        const user = new User({ name });
        return user.save();
      });

      await Promise.all(userPromises);
      console.log("Initial users created successfully");
    } else {
      console.log("Users already exist in database");
    }
  } catch (error) {
    console.error("Error initializing users:", error);
  }
}

module.exports = { initializeUsers, initialUsers };
