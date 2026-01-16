// Configuration template - Copy this to config.js and add your API key
const CONFIG = {
    GEMINI_API_KEY: "PASTE_YOUR_GEMINI_API_KEY_HERE"
};

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
