# 🚀 Netlify Deployment Guide

## Ready to Deploy! ✅

Your leaderboard application is now ready for deployment. Here's your step-by-step guide:

## 🎯 Quick Start (Recommended)

### Step 1: Deploy Backend First

**Option A: Railway (Recommended)**

1. Go to [Railway](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your GitHub account and select your repository
4. Railway will automatically detect your Node.js app
5. Add environment variables:
   - `MONGODB_URI`: Get from MongoDB Atlas (see below)
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
6. Your backend will be deployed at `https://your-app-name.up.railway.app`

**Option B: Render**

1. Go to [Render](https://render.com) and sign up
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Add environment variables (same as Railway)

### Step 2: Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com) and create account
2. Create new cluster (choose free tier)
3. Create database user with username/password
4. Whitelist all IPs (0.0.0.0/0) under Network Access
5. Get connection string and replace `<password>` with your password

### Step 3: Deploy Frontend to Netlify

**Option A: Netlify CLI (Quick)**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (run from project root)
deploy.bat
```

**Option B: GitHub Integration (Best for automatic deployments)**

1. Push your code to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/leaderboard-app.git
   git push -u origin main
   ```

2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`
6. Deploy site

### Step 4: Configure Environment Variables

In your Netlify dashboard:

1. Go to Site settings → Environment variables
2. Add these variables:
   - `REACT_APP_API_URL`: `https://your-backend-url.com/api`
   - `REACT_APP_SOCKET_URL`: `https://your-backend-url.com`

### Step 5: Update Backend CORS

Update your backend URL in server.js:

```javascript
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_URL, "https://your-netlify-app.netlify.app"]
    : ["http://localhost:3000"];
```

## 🔧 Manual Deployment Steps

### Frontend Build Test

```bash
cd client
npm run build
```

✅ **Status**: Your build is working!

### Files Ready for Deployment

- ✅ Environment variables configured
- ✅ Netlify configuration (`netlify.toml`)
- ✅ Redirect rules (`_redirects`)
- ✅ CORS updated for production
- ✅ Build scripts ready

## 📋 Deployment Checklist

### Before Deployment

- [ ] Set up MongoDB Atlas
- [ ] Choose backend hosting (Railway/Render/Heroku)
- [ ] Push code to GitHub
- [ ] Test local build

### Backend Deployment

- [ ] Deploy to Railway/Render/Heroku
- [ ] Set environment variables
- [ ] Test API endpoints
- [ ] Note down backend URL

### Frontend Deployment

- [ ] Update environment variables with backend URL
- [ ] Deploy to Netlify
- [ ] Set environment variables in Netlify
- [ ] Test full application

### Post-Deployment

- [ ] Test all features
- [ ] Check browser console for errors
- [ ] Test real-time updates
- [ ] Test on mobile devices

## 🌐 Expected URLs

After deployment, your app will be available at:

- **Frontend**: `https://your-app-name.netlify.app`
- **Backend**: `https://your-app-name.up.railway.app` (or your chosen platform)

## 🚨 Common Issues & Solutions

### 1. CORS Errors

- Update `allowedOrigins` in server.js with your Netlify URL
- Redeploy backend after updating CORS settings

### 2. API Not Working

- Check environment variables are set correctly
- Verify backend URL is accessible
- Check browser network tab for failed requests

### 3. Socket.io Not Connecting

- Ensure WebSocket connections are allowed
- Check if your backend hosting supports WebSockets
- Verify Socket.io URL in environment variables

### 4. Build Failures

- Check Node.js version compatibility
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

## 🎉 Success Indicators

Your deployment is successful when:

- ✅ Frontend loads without errors
- ✅ User list displays correctly
- ✅ Can add new users
- ✅ Claim points works
- ✅ Leaderboard updates in real-time
- ✅ Point history displays

## 📞 Need Help?

If you encounter issues:

1. Check browser console for JavaScript errors
2. Check Netlify deploy logs
3. Check backend logs on your hosting platform
4. Verify all environment variables are set correctly

## 🔗 Useful Links

- [Netlify Documentation](https://docs.netlify.com/)
- [Railway Documentation](https://docs.railway.app/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

---

Your leaderboard app is ready to go live! 🚀
