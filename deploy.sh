#!/bin/bash

# Stop script on error
set -e

echo "🚀 Starting deployment to GitHub..."

# Build the application
echo "📦 Building application..."
npm run build

# Add all files
echo "📚 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy update: $(date)"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push

echo "✅ Deployment completed successfully!"
echo "Visit your site at: https://bluebridgellc-website.vercel.app" 