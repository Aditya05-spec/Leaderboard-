@echo off
REM Quick Netlify Deployment Script for Windows
REM This script will build and deploy your React app to Netlify

echo 🚀 Starting deployment process...

REM Check if netlify-cli is installed
where netlify >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Netlify CLI not found. Installing...
    npm install -g netlify-cli
)

REM Navigate to client directory
cd client

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the React app
echo 🔨 Building React app...
npm run build

REM Deploy to Netlify
echo 🚀 Deploying to Netlify...
netlify deploy --prod --dir=build

echo ✅ Deployment complete!
echo 📝 Don't forget to:
echo    1. Set up your backend on Railway/Render/Heroku
echo    2. Update environment variables in Netlify dashboard
echo    3. Set up MongoDB Atlas

pause
