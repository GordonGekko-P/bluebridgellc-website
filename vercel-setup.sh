#!/bin/bash

# Make script exit on error
set -e

# Colors for console output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== BlueBridge Website Vercel Deployment Setup ===${NC}"
echo "This script will help you deploy your website to Vercel"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  echo -e "${RED}Vercel CLI not found. Installing...${NC}"
  npm install -g vercel
fi

# Set the Vercel token for non-interactive deployment
# Using the account paulvonr@protonmail.com (shared in conversation)
VERCEL_TOKEN="2Pd19Ixsd4Gj7sEp2xQXDyoL"

# Export the token
export VERCEL_TOKEN

echo -e "${GREEN}1. Logging in to Vercel...${NC}"
# Use token for non-interactive login
echo "Using stored credentials for paulvonr@protonmail.com"
vercel login --token $VERCEL_TOKEN

echo -e "${GREEN}2. Setting up the project...${NC}"
vercel link --yes

echo -e "${GREEN}3. Setting project environment...${NC}"
vercel env add NEXT_PUBLIC_BASE_URL production https://bluebridgellc-website.vercel.app --yes

echo -e "${GREEN}4. Deploying to Vercel...${NC}"
vercel --prod --yes

echo -e "${GREEN}=== Deployment Complete! ===${NC}"
echo "Your website should now be live at: https://bluebridgellc-website.vercel.app"
echo ""
echo "To deploy updates in the future, simply run:"
echo "  ./vercel-setup.sh" 