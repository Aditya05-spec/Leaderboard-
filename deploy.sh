#!/bin/bash

# Quick Netlify Deployment Script
# This script will build and deploy your React app to Netlify

echo "🚀 Starting deployment process..."

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Navigate to client directory
cd client

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the React app
echo "🔨 Building React app..."
npm run build

# Deploy to Netlify
echo "🚀 Deploying to Netlify..."
netlify deploy --prod --dir=build

echo "✅ Deployment complete!"
echo "📝 Don't forget to:"
echo "   1. Set up your backend on Railway/Render/Heroku"
echo "   2. Update environment variables in Netlify dashboard"
echo "   3. Set up MongoDB Atlas"
