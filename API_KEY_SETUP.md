# MealGenna - Secure API Key Setup

## ⚠️ IMPORTANT: API Key Security

**Never commit API keys to git!** This project uses a secure configuration system to protect your Gemini API key.

## Setup Instructions

### 1. Create Your Config File

Copy the template to create your local config:

```bash
cp config.template.js config.js
```

### 2. Add Your API Key

Open `config.js` and replace the placeholder with your actual Gemini API key:

```javascript
const CONFIG = {
    GEMINI_API_KEY: "YOUR_ACTUAL_API_KEY_HERE"
};
```

### 3. Build the Project

The build script will automatically inject your API key at build time:

```bash
npm run build
```

## How It Works

1. **`config.js`** - Contains your actual API key (gitignored, never committed)
2. **`config.template.js`** - Template file (safe to commit)
3. **`build.js`** - Build script that injects the API key from config.js
4. **`.gitignore`** - Ensures sensitive files are never committed

## Files That Are Protected

The following files are automatically ignored by git:
- `config.js` - Your API key configuration
- `.env` and `.env.local` - Environment variables
- `*.p8` and `*.p12` - Apple certificates
- `google-services.json` - Google services config
- `secrets.js` - Any other secrets

## What Gets Committed

✅ **Safe to commit:**
- `app.js` (with placeholder API key)
- `config.template.js` (template only)
- `build.js` (build script)
- All other source code

❌ **Never committed:**
- `config.js` (your actual API key)
- Any files listed in `.gitignore`

## For CI/CD (GitHub Actions)

For automated builds, you can set the API key as a GitHub secret and inject it during the build process.

## Need Help?

If you accidentally committed an API key:
1. Regenerate the key immediately in Google AI Studio
2. Update your `config.js` with the new key
3. Never commit `config.js` to git
