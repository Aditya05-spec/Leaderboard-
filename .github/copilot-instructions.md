<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Leaderboard Application

This is a full-stack leaderboard application built with Node.js backend and React frontend.

## Architecture

- **Backend**: Node.js with Express, MongoDB, and Socket.io for real-time updates
- **Frontend**: React with Socket.io-client for real-time leaderboard updates
- **Database**: MongoDB with User and PointHistory collections

## Key Features

- User selection and random point claiming (1-10 points)
- Real-time leaderboard updates using Socket.io
- Add new users functionality
- Point history tracking
- Responsive design with modern UI

## Code Style Guidelines

- Use ES6+ features and async/await for asynchronous operations
- Follow React functional component patterns with hooks
- Implement proper error handling and loading states
- Use meaningful variable names and add comments for complex logic
- Ensure responsive design principles
- Follow REST API conventions for backend endpoints

## Database Schema

- User: { name, totalPoints, createdAt }
- PointHistory: { userId, userName, pointsAwarded, timestamp }
