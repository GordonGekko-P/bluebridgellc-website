# Deployment Guide for BlueBridge LLC Website

## GitHub Repository

The website code is hosted at:
https://github.com/GordonGekko-P/bluebridgellc-website

## Automated Deployment with Vercel

### One-Time Setup

1. Visit the Vercel deployment link:
   https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGordonGekko-P%2Fbluebridgellc-website

2. Log into your Vercel account (or create one if needed)

3. Configure the project with these settings:
   - Project name: bluebridgellc-website
   - Framework preset: Next.js
   - Root directory: ./ (default)

4. Click "Deploy"

### After Initial Setup

Once set up, every push to the main branch will automatically deploy to Vercel.

## Manual Deployment

You can manually deploy using the provided script:

```bash
./deploy.sh
```

This script:
1. Builds the application
2. Commits your changes
3. Pushes to GitHub, which triggers Vercel deployment

## Setting Up Custom Domain

1. Go to your Vercel dashboard
2. Select the bluebridgellc-website project
3. Click on "Domains"
4. Add your custom domain (e.g., www.bluebridgellc.org)
5. Follow the verification steps
   - Add the provided DNS records at your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)

## Troubleshooting

- **Build Errors**: Check the Vercel deployment logs
- **DNS Issues**: Verify your DNS settings match Vercel's requirements
- **Local Development**: Run `npm run dev` to test locally before deploying

## Access and Security

- GitHub repository should be kept private for security
- Limit Vercel project access to authorized team members only
- Consider setting up branch protection rules in GitHub

## Contact

For deployment assistance, contact admin@bluebridgellc.org 