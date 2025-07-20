# Deployment Guide

This guide will help you deploy your leaderboard application to production.

## Frontend Deployment (Netlify)

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI**

   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**

   ```bash
   netlify login
   ```

3. **Build the React app**

   ```bash
   cd client
   npm run build
   ```

4. **Deploy to Netlify**
   ```bash
   netlify deploy --prod --dir=build
   ```

### Option 2: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/leaderboard-app.git
   git push -u origin main
   ```

2. **Connect to Netlify**

   - Go to [Netlify](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Set build settings:
     - **Base directory**: `client`
     - **Build command**: `npm run build`
     - **Publish directory**: `client/build`

3. **Set Environment Variables**
   In Netlify dashboard, go to Site settings > Environment variables and add:
   - `REACT_APP_API_URL`: Your backend URL (e.g., `https://your-backend.herokuapp.com/api`)
   - `REACT_APP_SOCKET_URL`: Your backend URL (e.g., `https://your-backend.herokuapp.com`)

## Backend Deployment

### Option 1: Deploy to Railway

1. **Install Railway CLI**

   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**

   ```bash
   railway login
   ```

3. **Initialize Railway project**

   ```bash
   railway init
   ```

4. **Deploy**

   ```bash
   railway up
   ```

5. **Set Environment Variables**
   ```bash
   railway variables set MONGODB_URI=your-mongodb-atlas-connection-string
   railway variables set NODE_ENV=production
   ```

### Option 2: Deploy to Render

1. Go to [Render](https://render.com) and sign in
2. Click "New" > "Web Service"
3. Connect your GitHub repository
4. Set build settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`

### Option 3: Deploy to Heroku

1. **Install Heroku CLI**
   Download from [Heroku](https://devcenter.heroku.com/articles/heroku-cli)

2. **Login to Heroku**

   ```bash
   heroku login
   ```

3. **Create Heroku app**

   ```bash
   heroku create your-leaderboard-app
   ```

4. **Set environment variables**

   ```bash
   heroku config:set MONGODB_URI=your-mongodb-atlas-connection-string
   heroku config:set NODE_ENV=production
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

## Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**

   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a free account

2. **Create a Cluster**

   - Click "Build a Database"
   - Choose "Shared" (free tier)
   - Select your preferred region
   - Create cluster

3. **Create Database User**

   - Go to Database Access
   - Add new database user
   - Choose password authentication
   - Save username and password

4. **Whitelist IP Addresses**

   - Go to Network Access
   - Add IP Address
   - Choose "Allow access from anywhere" (0.0.0.0/0) for simplicity

5. **Get Connection String**
   - Go to Clusters
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## Complete Deployment Steps

1. **Set up MongoDB Atlas** (see above)

2. **Deploy Backend**

   - Choose Railway, Render, or Heroku
   - Set `MONGODB_URI` environment variable
   - Get your backend URL

3. **Update Frontend Environment Variables**

   - Update `client/.env.production` with your backend URL
   - Or set environment variables in Netlify dashboard

4. **Deploy Frontend to Netlify**

   - Use GitHub integration for automatic deployments
   - Set environment variables in Netlify dashboard

5. **Test Your Deployment**
   - Visit your Netlify URL
   - Test all functionality
   - Check browser console for errors

## Important Notes

- **CORS**: Your backend should allow your frontend domain
- **HTTPS**: Use HTTPS URLs for production
- **Environment Variables**: Never commit sensitive data to Git
- **Database**: Use MongoDB Atlas for production database

## Troubleshooting

### Common Issues

1. **CORS Errors**

   - Update CORS settings in your backend
   - Add your Netlify domain to allowed origins

2. **API Not Found**

   - Check if backend is running
   - Verify environment variables are set correctly

3. **Socket.io Connection Issues**

   - Ensure WebSocket connections are allowed
   - Check if your hosting provider supports WebSockets

4. **Build Errors**
   - Check Node.js version compatibility
   - Clear npm cache: `npm cache clean --force`

## Environment Variables Summary

### Frontend (.env.production)

```
REACT_APP_API_URL=https://your-backend-url.com/api
REACT_APP_SOCKET_URL=https://your-backend-url.com
```

### Backend

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leaderboard
NODE_ENV=production
PORT=5000
```

Your application will be available at:

- Frontend: `https://your-app-name.netlify.app`
- Backend: `https://your-backend-url.com`
