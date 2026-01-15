# RevenueCat Subscription Setup Guide

## ✅ What's Been Implemented

I've successfully integrated RevenueCat into your MealGenna app with the following features:

### 1. **Platform-Specific Configuration**
- **Android API Key**: `goog_EarGAXOhvCmNorhPDwVQXRRYfgR`
- **iOS API Key**: `appl_HgJWZQBHyaAcXNhibMlDiXzBzKa`
- Automatic platform detection and initialization

### 2. **Core Subscription Features**
- ✅ Purchase subscription (monthly plan)
- ✅ Restore purchases (for users who reinstall)
- ✅ Check subscription status on app launch
- ✅ Platform-specific cancellation instructions
- ✅ Automatic entitlement checking

### 3. **User Experience**
- Real-time subscription status updates
- Premium UI state management
- Graceful error handling
- Fallback mode for testing without store access

---

## 🔧 RevenueCat Dashboard Configuration

You need to complete these steps in your RevenueCat dashboard:

### Step 1: Create an Entitlement
1. Go to [RevenueCat Dashboard](https://app.revenuecat.com)
2. Navigate to **Entitlements** → **+ New**
3. Create an entitlement with identifier: **`premium`**
4. This is what the app checks for access

### Step 2: Create Products
You need to create the subscription products in both stores:

#### **Google Play Console**
1. Go to Google Play Console → Your App → Monetization → Subscriptions
2. Create a subscription with ID: `mealgenna_plus_monthly`
3. Set price to **$5.99/month**
4. **NO FREE TRIAL** - Users can use the app for free with ads
5. Set billing period: Monthly
6. Save and activate

#### **App Store Connect**
1. Go to App Store Connect → Your App → Subscriptions
2. Create a subscription with Product ID: `mealgenna_plus_monthly`
3. Set price to **$5.99/month**
4. **NO FREE TRIAL** - Users can use the app for free with ads
5. Set subscription duration: 1 Month
6. Submit for review

---

## 💰 Monetization Model

### Free Tier (Ad-Supported)
- ✅ Watch 1 ad → Generate 3 meal ideas
- ✅ Watch 1 ad → Download a recipe
- ✅ Watch 2 ads → Generate 7-day meal plan
- ✅ AI Vision Scanner (with ads)

### Premium Tier ($5.99/month)
- ✅ **Ad-Free Experience** - No interruptions
- ✅ **Unlimited Meal Ideas** - Generate as many as you want
- ✅ **Unlimited Downloads** - Save all your favorite recipes
- ✅ **7-Day Meal Plans** - Generate up to 2 plans every 7 days
- ✅ **Advanced AI Scanning** - Enhanced ingredient recognition

### Important: No Free Trial
This is a **freemium model**, not a trial-based model:
- Users get full access to features with ads (free forever)
- Premium removes ads and adds convenience (unlimited generations)
- No trial period needed since the free tier is fully functional

### Step 3: Link Products in RevenueCat
1. In RevenueCat Dashboard → **Products** → **+ New**
2. Add your Google Play product: `mealgenna_plus_monthly`
3. Add your App Store product: `mealgenna_plus_monthly`
4. Link both to the **`premium`** entitlement

### Step 4: Create an Offering
1. Go to **Offerings** → **+ New**
2. Set as **Current Offering**
3. Add a package:
   - **Identifier**: `$rc_monthly` (or use package type MONTHLY)
   - **Product**: Select `mealgenna_plus_monthly`
4. Save

---

## 📱 Testing the Integration

### Test on Android
```bash
# Build and run
npx cap sync
npx cap open android
```

### Test on iOS
```bash
# Build and run
npx cap sync
npx cap open ios
```

### Sandbox Testing
- **iOS**: Use a sandbox test account from App Store Connect
- **Android**: Use a test account added in Google Play Console

---

## 🚨 Important Notes

### Avoiding Dependency Conflicts
The integration uses `--legacy-peer-deps` to avoid conflicts with:
- Google AdMob
- Google Analytics
- Other Google SDKs

This is **safe** and recommended for Capacitor projects with multiple Google dependencies.

### Entitlement Name
The app checks for an entitlement called **`premium`**. Make sure this matches exactly in your RevenueCat dashboard.

### Product Identifiers
Both platforms should use the same product ID: `mealgenna_plus_monthly`

### Cancellation Flow
- RevenueCat doesn't handle cancellation directly
- Users must cancel through their platform (iOS Settings or Google Play)
- The app provides instructions when they tap "Cancel Subscription"

---

## 🔍 Troubleshooting

### "No subscription plans available"
- Check that you've created an offering in RevenueCat
- Ensure it's set as the "Current Offering"
- Verify products are linked to the offering

### "Purchase failed"
- Verify API keys are correct in the code
- Check that products exist in both stores
- Ensure products are linked in RevenueCat dashboard

### Subscription not activating
- Verify the entitlement identifier is exactly **`premium`**
- Check RevenueCat dashboard for customer info
- Look at the app console logs for errors

---

## 📊 Monitoring

Once live, you can monitor:
- Active subscribers in RevenueCat dashboard
- Revenue analytics
- Churn rates
- Trial conversions

RevenueCat provides unified analytics across both platforms!

---

## Next Steps

1. ✅ Complete RevenueCat dashboard setup (entitlements, products, offerings)
2. ✅ Test with sandbox accounts on both platforms
3. ✅ Verify subscription flow works end-to-end
4. ✅ Submit apps for review with in-app purchases enabled
5. ✅ Monitor first real subscriptions!
