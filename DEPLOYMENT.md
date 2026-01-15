# MealMind Deployment Guide

This guide will help you convert the high-fidelity web code into native **.aab** (Android) and **.ipa** (iOS) files.

## Prerequisites
1.  **Node.js & NPM** installed on your computer.
2.  **Android Studio** (for .aab) and **Xcode** (for .ipa - macOS only).
3.  **Capacitor CLI**: `npm install @capacitor/core @capacitor/cli`

## Step 1: Initialize Capacitor
Run these commands in the `mealmind-app` directory:
```bash
npm init -y
npm install @capacitor/core @capacitor/cli
npx cap init MealMind com.yourname.mealmind --web-dir .
```

## Step 2: Add Platforms
```bash
# For Android
npm install @capacitor/android
npx cap add android

# For iOS (Requires macOS)
npm install @capacitor/ios
npx cap add ios
```

## Step 3: Generate Production Builds

### Android (.aab for Play Store)
1. Run `npx cap open android` to open the project in Android Studio.
2. In Android Studio, go to **Build > Generate Signed Bundle / APK**.
3. Select **Android App Bundle (.aab)**.
4. Follow the wizard to sign your app and generate the file.

### iOS (.ipa for App Store)
1. Run `npx cap open ios` to open the project in Xcode.
2. Select a **Generic iOS Device** as the build target.
3. Go to **Product > Archive**.
4. Once the archive is created, click **Distribute App** and follow the prompts to generate the `.ipa`.

## Monetization Notes
- **AdMob**: Use the `@capacitor-community/admob` plugin to connect the "Watch Ad" buttons to real Google AdMob units.
- **In-App Purchases**: Use the `cordova-plugin-purchase` or RevenueCat's Capacitor SDK to handle the $5.99 monthly subscription.
