# 🏆 Leaderboard System

A full-stack leaderboard application that allows users to select players, claim random points, and view real-time rankings with complete point history tracking.

## 🚀 Features

### Core Features

- **User Selection**: Choose from 10 initial users or add new ones
- **Random Point Claiming**: Award 1-10 random points to selected users
- **Real-time Updates**: Live leaderboard updates using Socket.io
- **Point History**: Complete tracking of all point claims
- **Dynamic Rankings**: Automatic rank calculation based on total points

### Technical Features

- **Backend**: Node.js with Express and MongoDB
- **Frontend**: React with modern UI components
- **Real-time Communication**: Socket.io for instant updates
- **Responsive Design**: Mobile-friendly interface
- **Error Handling**: Comprehensive error management
- **Data Persistence**: MongoDB for reliable data storage

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.io for real-time updates
- Helmet for security
- Express Rate Limiting
- CORS for cross-origin requests

### Frontend

- React 18
- Socket.io-client
- Axios for API calls
- Modern CSS with gradients and animations
- Responsive design

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd leaderboard-app
   ```

2. **Install backend dependencies**

   ```bash
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   npm run install-client
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/leaderboard
   NODE_ENV=development
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

6. **Run the application**

   ```bash
   # Run both backend and frontend
   npm run dev-all

   # Or run separately
   npm run dev      # Backend only
   npm run client   # Frontend only
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
leaderboard-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── UserSelector.js
│   │   │   ├── ClaimButton.js
│   │   │   ├── Leaderboard.js
│   │   │   ├── AddUserForm.js
│   │   │   └── PointHistory.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
├── models/                 # MongoDB schemas
│   ├── User.js
│   └── PointHistory.js
├── utils/                  # Utility functions
│   └── initializeData.js
├── server.js              # Main server file
├── package.json
└── .env
```

## 🔌 API Endpoints

### Users

- `GET /api/users` - Get all users with rankings
- `POST /api/users` - Add a new user
- `POST /api/users/:userId/claim` - Claim points for a user

### History

- `GET /api/history` - Get all point history
- `GET /api/users/:userId/history` - Get history for specific user

### Socket.io Events

- `leaderboardUpdate` - Real-time leaderboard updates

## 🎨 UI Features

### Modern Design

- Gradient backgrounds and glass-morphism effects
- Smooth animations and transitions
- Responsive layout for all devices
- Intuitive user interface

### Interactive Elements

- Dropdown user selection
- Dynamic claim button with loading states
- Real-time leaderboard updates
- Collapsible point history
- Form validation and error handling

### Visual Indicators

- Gold, silver, bronze medals for top 3 users
- Rank badges and point displays
- Loading spinners and success messages
- Error states and validation feedback

## 🔒 Security Features

- Helmet.js for security headers
- Rate limiting to prevent abuse
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 📊 Database Schema

### User Collection

```javascript
{
  _id: ObjectId,
  name: String (required, unique),
  totalPoints: Number (default: 0),
  createdAt: Date (default: Date.now)
}
```

### PointHistory Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  userName: String,
  pointsAwarded: Number (1-10),
  timestamp: Date (default: Date.now)
}
```

## 🔧 Configuration

### Environment Variables

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `NODE_ENV`: Environment (development/production)

### Frontend Configuration

- Backend API URL: `http://localhost:5000/api`
- Socket.io URL: `http://localhost:5000`

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🧪 Testing

Run tests using:

```bash
npm test
```

## 🚀 Deployment

### Backend Deployment

1. Set up MongoDB Atlas or your preferred MongoDB hosting
2. Update `MONGODB_URI` in environment variables
3. Deploy to your preferred platform (Heroku, AWS, etc.)

### Frontend Deployment

1. Build the React app: `npm run build`
2. Deploy the `build` folder to your hosting service

## 📈 Performance Features

- Efficient database queries
- Real-time updates minimize server requests
- Optimized React components
- Lazy loading for better performance
- Caching strategies for frequently accessed data

## 🛡️ Error Handling

- Comprehensive error messages
- Loading states for better UX
- Validation on both client and server
- Graceful fallbacks for network issues

## 🔄 Real-time Updates

The application uses Socket.io to provide real-time updates:

- Leaderboard automatically updates when points are claimed
- New users appear instantly across all connected clients
- No page refresh needed for updates

## 🎯 Future Enhancements

- User authentication and profiles
- Advanced statistics and analytics
- Team competitions
- Achievement system
- Export leaderboard data
- Admin dashboard
- Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Socket.io for real-time communication
- MongoDB for reliable data storage
- Express.js for the robust backend framework

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Contact the development team

---

Made with ❤️ for the leaderboard challenge
