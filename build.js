const fs = require('fs');
const path = require('path');

// Read API key from environment variable OR config.js
let apiKey = process.env.GEMINI_API_KEY || 'PASTE_YOUR_GEMINI_API_KEY_HERE';
const configPath = path.join(__dirname, 'config.js');

if (apiKey === 'PASTE_YOUR_GEMINI_API_KEY_HERE' && fs.existsSync(configPath)) {
    try {
        const config = require('./config.js');
        if (config.GEMINI_API_KEY) {
            apiKey = config.GEMINI_API_KEY;
            console.log('✓ Using API key from config.js');
        }
    } catch (e) {
        console.warn('⚠ Could not load config.js');
    }
}

if (apiKey !== 'PASTE_YOUR_GEMINI_API_KEY_HERE') {
    if (process.env.GEMINI_API_KEY) {
        console.log('✓ Using API key from Environment Variable');
    }
} else {
    console.warn('⚠ No API key found. Using placeholder.');
}

// Read app.js
const appJsPath = path.join(__dirname, 'app.js');
let appContent = fs.readFileSync(appJsPath, 'utf8');

// Replace the placeholder with actual API key
appContent = appContent.replace(
    'const GEMINI_API_KEY = "PASTE_YOUR_GEMINI_API_KEY_HERE";',
    `const GEMINI_API_KEY = "${apiKey}";`
);

// Create www directory
const wwwDir = path.join(__dirname, 'www');
if (!fs.existsSync(wwwDir)) {
    fs.mkdirSync(wwwDir, { recursive: true });
}

// Write modified app.js to www
fs.writeFileSync(path.join(wwwDir, 'app.js'), appContent);

// Copy other files
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(wwwDir, 'index.html'));
fs.copyFileSync(path.join(__dirname, 'style.css'), path.join(wwwDir, 'style.css'));
if (fs.existsSync(path.join(__dirname, 'health.css'))) {
    fs.copyFileSync(path.join(__dirname, 'health.css'), path.join(wwwDir, 'health.css'));
}
if (fs.existsSync(path.join(__dirname, 'privacy_policy.html'))) {
    fs.copyFileSync(path.join(__dirname, 'privacy_policy.html'), path.join(wwwDir, 'privacy_policy.html'));
}

const copyRecursive = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true });
            }
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

// Copy assets directory if it exists
const assetsDir = path.join(__dirname, 'assets');
const wwwAssetsDir = path.join(wwwDir, 'assets');
if (fs.existsSync(assetsDir)) {
    if (!fs.existsSync(wwwAssetsDir)) {
        fs.mkdirSync(wwwAssetsDir, { recursive: true });
    }
    copyRecursive(assetsDir, wwwAssetsDir);
}

// Copy privacy directory if it exists
const privacyDir = path.join(__dirname, 'privacy');
const wwwPrivacyDir = path.join(wwwDir, 'privacy');
if (fs.existsSync(privacyDir)) {
    if (!fs.existsSync(wwwPrivacyDir)) {
        fs.mkdirSync(wwwPrivacyDir, { recursive: true });
    }
    copyRecursive(privacyDir, wwwPrivacyDir);
}

// Copy other legal directories
['about', 'terms', 'contact'].forEach(dir => {
    const src = path.join(__dirname, dir);
    const dest = path.join(wwwDir, dir);
    if (fs.existsSync(src)) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        copyRecursive(src, dest);
    }
});

console.log('✓ Build complete! Files copied to www/');
