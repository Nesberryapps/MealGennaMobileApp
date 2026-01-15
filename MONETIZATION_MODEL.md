# MealGenna Monetization Model

## 💰 Revenue Strategy: Freemium Ad-Supported

### Free Tier (Ad-Supported) - Forever Free
Users get **full access** to all features by watching ads:

- **Meal Ideas Generation**
  - Watch 1 ad → Get 3 AI-generated meal ideas
  - Can generate unlimited times (1 ad per session)
  
- **Recipe Downloads**
  - Watch 1 ad → Download any recipe as a text file
  - Can download unlimited recipes (1 ad per download)
  
- **7-Day Meal Planner**
  - Watch 2 ads → Get a complete 7-day meal plan
  - Limited to 1 plan every 7 days (resets weekly)
  
- **AI Vision Scanner**
  - Watch 1 ad → Scan ingredients and generate recipes
  - Unlimited scans (1 ad per scan session)

### Premium Tier - $5.99/month (NO FREE TRIAL)

Premium subscribers get **convenience and unlimited access**:

- ✅ **Ad-Free Experience** - Zero interruptions
- ✅ **Unlimited Meal Ideas** - Generate as many as you want, instantly
- ✅ **Unlimited Downloads** - Save all your favorite recipes without ads
- ✅ **Enhanced 7-Day Planner** - Generate up to **2 meal plans every 7 days**
- ✅ **Unlimited AI Scanning** - Scan ingredients without watching ads

## 🎯 Key Differences from Trial Model

### Why NO Free Trial?
1. **Free tier is fully functional** - Users can try everything with ads
2. **No bait-and-switch** - Users know exactly what they're getting
3. **Better conversion** - Users upgrade when they're annoyed by ads, not when trial expires
4. **App Store compliance** - Clearer value proposition

### Premium Value Proposition
Premium is about **removing friction**, not unlocking features:
- Free users: "I can do everything, but I have to watch ads"
- Premium users: "I pay to save time and avoid interruptions"

## 📊 Expected User Journey

### Free User Path
1. Download app → Try generating meals (watch 1 ad)
2. Like the results → Generate more (watch more ads)
3. Want 7-day plan → Watch 2 ads
4. After 10-20 ad views → Consider premium to skip ads

### Premium Conversion Triggers
- Frequent users who generate 5+ meal ideas per week
- Users who want multiple 7-day plans (2 per week vs 1 per week)
- Users annoyed by ad interruptions
- Users who value their time over $5.99/month

## 🔢 Monetization Math

### Free User Value
- Average 3-5 ad views per session
- 2-3 sessions per week
- ~10-15 ad impressions per week
- Revenue: $0.50-$2.00 per month (CPM-based)

### Premium User Value
- $5.99 per month guaranteed
- No ad revenue loss (they weren't clicking anyway)
- Higher lifetime value (sticky subscription)

### Target Conversion Rate
- 2-5% of active users convert to premium
- Industry standard for freemium apps

## 🛡️ App Store Compliance

### Google Play Requirements
✅ Clear pricing ($5.99/month, no trial)
✅ Easy cancellation (platform-managed)
✅ Functional free tier (not crippled)
✅ No deceptive practices

### Apple App Store Requirements
✅ Clear subscription terms
✅ No misleading "free" claims
✅ Platform-managed subscriptions
✅ Restore purchases functionality

## 📈 Growth Strategy

### Phase 1: Launch (Months 1-3)
- Focus on free user acquisition
- Optimize ad placement (not too annoying)
- Collect feedback on premium value

### Phase 2: Optimize (Months 4-6)
- A/B test premium messaging
- Add premium-only features (if needed)
- Improve conversion funnel

### Phase 3: Scale (Months 7+)
- Introduce annual plan ($49.99/year = 30% savings)
- Consider family plan ($8.99/month for 5 users)
- Add premium tiers (Basic/Pro)

## 🎨 UI/UX Considerations

### Ad Placement Best Practices
- ✅ Show ads BEFORE generating (set expectations)
- ✅ Use countdown timer (5 seconds)
- ✅ Make "Claim Reward" button obvious
- ❌ Don't interrupt mid-generation
- ❌ Don't show ads on every screen

### Premium Upsell Moments
- After 3rd ad view in a session
- When user tries to generate 2nd meal plan in a week
- After 10 total ad views
- In settings/profile screen

## 📱 Technical Implementation

### Current Status
✅ RevenueCat integrated for subscriptions
✅ Ad overlay system implemented
✅ Premium state management
✅ 7-day plan limits enforced
✅ Counter tracking for premium users (2 plans/week)

### Product IDs
- Google Play: `mealgenna_plus_monthly`
- App Store: `mealgenna_plus_monthly`
- RevenueCat Entitlement: `premium`

---

**Last Updated:** January 15, 2026
**Model:** Freemium Ad-Supported (No Trial)
**Premium Price:** $5.99/month
