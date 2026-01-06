# Dilkor - Informational Website

A beautiful, fully responsive informational website for Dilkor matrimonial platform. Built with React, TypeScript, and Vite, this static website represents the Dilkor brand and provides download links to our Android and iOS mobile applications.

**🌐 Live Demo**: [https://kundanlcb.github.io/dilkor-web/](https://kundanlcb.github.io/dilkor-web/)

## 🚀 Quick Start - GitHub Pages Deployment

This website is configured for automatic deployment to GitHub Pages. Follow these steps to enable it:

### 1. Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub: `https://github.com/kundanlcb/dilkor-web`
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Push to Main Branch
Once GitHub Pages is configured, any push to the `main` branch will automatically trigger deployment.

```bash
git push origin main
```

The workflow will:
- Install dependencies
- Build the production bundle
- Deploy to GitHub Pages
- Make the site available at: `https://kundanlcb.github.io/dilkor-web/`

### 3. Monitor Deployment
- Go to the **Actions** tab in your repository
- Watch the "Deploy to GitHub Pages" workflow
- Once complete (green checkmark), your site is live!

## 🎯 Purpose

This is an **information-only website** designed to:
- Showcase the Dilkor matrimonial platform
- Provide comprehensive information about our services
- Direct users to download our mobile applications
- Build trust through success stories and testimonials
- Answer common questions via FAQ
- Ensure transparency with Privacy Policy and Terms & Conditions

**Note:** This is NOT a functional web application. All matchmaking features are available exclusively through our mobile apps.

## ✨ Features

### Pages Included
- **Home** - Hero section with app download CTAs, key features, and statistics
- **About** - Mission, values, story, and company information
- **Features** - Detailed feature descriptions of the mobile app
- **How It Works** - Step-by-step guide to using Dilkor
- **Download** - Prominent Android/iOS download links and system requirements
- **Success Stories** - Real testimonials from happy couples
- **FAQ** - Comprehensive answers to common questions
- **Contact** - Contact information and inquiry form
- **Privacy Policy** - Detailed privacy and data protection information
- **Terms & Conditions** - Legal terms of service

### Design Highlights
- 🎨 Beautiful magenta/pink color scheme (Primary: #E91E63)
- 📱 Fully responsive design (mobile-first approach)
- ⚡ Fast and optimized performance
- 🌐 SEO-friendly structure
- ♿ Accessible with semantic HTML
- 🎯 Professional UI/UX for matrimony industry
- ✨ Smooth animations and transitions

## 🛠️ Technology Stack

- **React 19.2.0** - Latest React with improved performance
- **TypeScript 5.9.3** - Type-safe code
- **Vite 7.2.4** - Fast build tool and dev server
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **ESLint** - Code linting and quality

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/kundanlcb/dilkor-web.git
cd dilkor-web
```

2. Install dependencies:
```bash
npm install
```

3. Update app download links (optional):
Edit `src/constants/index.ts` to update the Android and iOS app store links:
```typescript
export const APP_LINKS = {
  android: 'YOUR_GOOGLE_PLAY_STORE_LINK',
  ios: 'YOUR_APPLE_APP_STORE_LINK',
} as const;
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the next available port).

## 🏗️ Build

Build for production:

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

Preview production build:

```bash
npm run preview
```

## 🧹 Linting

Run ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with links
│   │   └── MainLayout.tsx      # Main page layout wrapper
│   └── ui/
│       └── Container.tsx       # Responsive container component
├── pages/
│   ├── HomePage.tsx            # Landing page
│   ├── AboutPage.tsx           # About us
│   ├── FeaturesPage.tsx        # App features
│   ├── HowItWorksPage.tsx      # How it works guide
│   ├── DownloadPage.tsx        # App download page
│   ├── SuccessStoriesPage.tsx  # User testimonials
│   ├── FAQPage.tsx             # Frequently asked questions
│   ├── PrivacyPage.tsx         # Privacy policy
│   ├── TermsPage.tsx           # Terms & conditions
│   └── ContactPage.tsx         # Contact information
├── constants/
│   ├── index.ts                # App constants and navigation
│   ├── colors.ts               # Color definitions
│   └── styles.ts               # Style constants
├── hooks/
│   └── useResponsive.ts        # Responsive utilities hook
├── App.tsx                     # Main app component with routing
├── main.tsx                    # App entry point
└── index.css                   # Global styles
```

## 🎨 Design System

### Color Palette

```javascript
// Primary - Magenta/Pink
primary: {
  DEFAULT: '#E91E63',
  50: '#FCE4EC',
  100: '#F8BBD0',
  // ... up to 900
}

// Secondary - Golden Orange
secondary: {
  DEFAULT: '#FF9800',
  light: '#FFCC02',
  dark: '#C66900',
}

// Accent - Green
accent: {
  DEFAULT: '#4CAF50',
  light: '#80E27E',
  dark: '#087F23',
}
```

### Responsive Breakpoints

- **xs**: 320px (Extra small devices)
- **sm**: 640px (Small devices)
- **md**: 768px (Tablets)
- **lg**: 1024px (Desktops)
- **xl**: 1280px (Large desktops)
- **2xl**: 1536px (Extra large screens)

## 🌐 Deployment

This website is configured for automatic deployment to GitHub Pages.

### GitHub Pages (Automated - Recommended)

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live URL**: `https://kundanlcb.github.io/dilkor-web/`

**Setup Instructions**:
1. Ensure GitHub Pages is enabled in your repository settings
2. Go to Settings → Pages
3. Set Source to "GitHub Actions"
4. Push to the `main` branch to trigger automatic deployment

**Manual Deployment**:
```bash
npm run build
# The workflow will automatically deploy when pushed to main
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve the dist/ folder with any static file server
```

## 📱 Mobile Apps

The actual Dilkor matchmaking functionality is available through our mobile applications:

- **Android**: [Google Play Store Link]
- **iOS**: [Apple App Store Link]

## 🤝 Contributing

This is an informational website for the Dilkor platform. For feature requests or bug reports, please contact the development team.

## 📄 License

Proprietary - All rights reserved by Dilkor

## 📞 Contact

For support or inquiries:
- Email: contact@dilkor.com
- Phone: +91 1234567890
- Website: [Production URL]

---

## 🔄 Migration Notes

This website was converted from a Phase 1 functional web app prototype to a pure informational static website. All user-facing functionality (authentication, profiles, messaging, matching) has been removed and is exclusively available through the mobile applications.

### What Changed:
- ✅ Removed all functional/interactive features
- ✅ Removed authentication and user management
- ✅ Removed database interactions
- ✅ Simplified to static informational pages
- ✅ Added comprehensive information pages
- ✅ Added prominent app download CTAs
- ✅ Maintained design consistency with mobile app
- ✅ Enhanced responsive design
- ✅ Improved SEO structure

### What Stayed:
- ✅ React + TypeScript + Vite stack
- ✅ Tailwind CSS for styling
- ✅ Color scheme from original design
- ✅ Responsive layout system
- ✅ Professional UI components
