# Environment Variables Setup

This project uses environment variables to securely store sensitive configuration data like API keys and database URLs.

## Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your actual values in `.env.local`:**
   ```bash
   # EmailJS Configuration
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_actual_autoreply_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key

   # Firebase Configuration
   VITE_FIREBASE_DATABASE_URL=https://your-project-id-default-rtdb.firebaseio.com
   ```

3. **Never commit `.env.local`** - it's already in `.gitignore`

## Security Notes

- ✅ `.env.local` is excluded from Git via `.gitignore`
- ✅ Environment variables are loaded at build time
- ✅ Sensitive data is not exposed in the source code
- ✅ Other developers can set up their own environment using `.env.example`

## For Deployment

When deploying to platforms like Netlify, Vercel, or others, add these environment variables in your deployment platform's settings.