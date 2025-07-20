# Leaderboard Application

A full-stack leaderboard application built with Node.js, Express, MongoDB, and React. This app allows users to claim random points, view real-time leaderboard updates, add new users, and track point history.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Frontend](#frontend)
- [Backend](#backend)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- User selection and random point claiming (1-10 points)
- Real-time leaderboard updates using Socket.io
- Add new users functionality
- Point history tracking
- Responsive design with modern UI

## Architecture
- **Backend**: Node.js with Express, MongoDB, and Socket.io for real-time updates
- **Frontend**: React with Socket.io-client for real-time leaderboard updates
- **Database**: MongoDB with User and PointHistory collections

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```powershell
   git clone <your-repo-url>
   cd LeaderBoard task/backend
   ```
2. Install backend dependencies:
   ```powershell
   npm install
   ```
3. Install frontend dependencies:
   ```powershell
   cd client
   npm install
   ```
4. Set up MongoDB and update connection string in your backend configuration.

### Running the Application
- Start the backend server:
  ```powershell
  npm run dev-all
  ```
- The frontend will be available at `http://localhost:3000` (if configured).

## API Endpoints
- `GET /api/users` - Get all users
- `POST /api/users` - Add a new user
- `POST /api/claim` - Claim random points for a user
- `GET /api/leaderboard` - Get current leaderboard
- `GET /api/pointhistory` - Get point history

## Database Schema
- **User**: `{ name, totalPoints, createdAt }`
- **PointHistory**: `{ userId, userName, pointsAwarded, timestamp }`

## Frontend
- Built with React functional components and hooks
- Uses Socket.io-client for real-time updates
- Responsive design principles for modern UI
- Main components:
  - `Leaderboard`
  - `AddUserForm`
  - `ClaimButton`
  - `UserSelector`
  - `PointHistory`

## Backend
- Express server with REST API endpoints
- MongoDB for data storage
- Socket.io for real-time communication
- Error handling and async/await for asynchronous operations

## Deployment
- See `DEPLOYMENT.md` and `NETLIFY_DEPLOYMENT.md` for deployment instructions
- Includes scripts for deploying to Netlify and other platforms

## Contributing
Contributions are welcome! Please follow the code style guidelines:
- Use ES6+ features and async/await
- React functional components with hooks
- Proper error handling and loading states
- Meaningful variable names and comments for complex logic
- REST API conventions for backend endpoints

## License
This project is licensed under the MIT License.
