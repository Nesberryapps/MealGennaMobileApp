const fs = require('fs');
const path = require('path');

// Read config.js if it exists
let apiKey = 'PASTE_YOUR_GEMINI_API_KEY_HERE';
const configPath = path.join(__dirname, 'config.js');

if (fs.existsSync(configPath)) {
    try {
        const config = require('./config.js');
        if (config.GEMINI_API_KEY) {
            apiKey = config.GEMINI_API_KEY;
            console.log('✓ Using API key from config.js');
        }
    } catch (e) {
        console.warn('⚠ Could not load config.js, using placeholder');
    }
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

// Copy assets directory if it exists
const assetsDir = path.join(__dirname, 'assets');
const wwwAssetsDir = path.join(wwwDir, 'assets');
if (fs.existsSync(assetsDir)) {
    if (!fs.existsSync(wwwAssetsDir)) {
        fs.mkdirSync(wwwAssetsDir, { recursive: true });
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
    copyRecursive(assetsDir, wwwAssetsDir);
}

console.log('✓ Build complete! Files copied to www/');
