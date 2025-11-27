# CRA to Vite Migration - Installation Guide

## ✅ Migration Complete

All configuration files have been created and updated for Vite + Tailwind CSS. The project is now ready for the dependency installation step.

---

## 📋 What Was Changed

### Configuration Files Created
- ✅ `vite.config.js` - Vite configuration with React plugin
- ✅ `tailwind.config.js` - Tailwind CSS configuration with Shadcn UI theme
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `.eslintrc.cjs` - ESLint configuration for React 18
- ✅ `jsconfig.json` - JavaScript configuration for path aliases
- ✅ `.editorconfig` - Editor configuration for consistent formatting
- ✅ `src/lib/utils.js` - Utility function for class merging

### Files Updated
- ✅ `package.json` - Updated dependencies and scripts
  - React: 17.0.2 → 18.3.1
  - Removed: react-scripts
  - Added: vite, @vitejs/plugin-react, tailwindcss, postcss, autoprefixer
  - Added: class-variance-authority, clsx, tailwind-merge, lucide-react
  - Scripts: `dev`, `build`, `preview` (Vite commands)

- ✅ `index.html` - Moved to root and updated for Vite
  - Removed `%PUBLIC_URL%` references
  - Added module script: `/src/index.jsx`

- ✅ `src/index.jsx` - Updated for React 18
  - Changed from `ReactDOM.render()` to `createRoot()`
  - Renamed from `index.js` to `index.jsx`

- ✅ `src/index.css` - Replaced with Tailwind directives
  - Added `@tailwind base`, `@tailwind components`, `@tailwind utilities`
  - Added Shadcn UI CSS variables for theming

- ✅ `.gitignore` - Updated for Vite
  - Added `dist/` (Vite build output)
  - Added environment variable files

---

## 🚀 Next Steps: Install Dependencies

Since Node.js/npm are not currently available in your system PATH, you need to complete these steps:

### Step 1: Ensure Node.js is Installed

```bash
# Verify Node.js and npm are available
node --version  # Should show v18.x or v20.x
npm --version   # Should show v9.x or v10.x
```

If not installed:
- Download from: https://nodejs.org/
- Install the LTS version
- Restart your terminal/IDE

### Step 2: Install Dependencies

Navigate to the client directory and install all dependencies:

```bash
cd client
npm install
```

This will install:
- React 18.3.1
- Vite 5.0.8
- Tailwind CSS 3.4.0
- All other dependencies listed in package.json

**Expected installation time:** 2-5 minutes

### Step 3: Start Development Server

```bash
npm run dev
```

This will:
- Start Vite dev server on `http://localhost:3000`
- Enable Hot Module Replacement (HMR)
- Open your browser automatically

### Step 4: Build for Production

```bash
npm run build
```

This will:
- Create optimized production build in `dist/` folder
- Minify and bundle all assets
- Generate source maps

### Step 5: Preview Production Build

```bash
npm run preview
```

This will serve the production build locally for testing.

---

## 🔧 Configuration Details

### Vite Configuration

The `vite.config.js` is configured with:
- **Port:** 3000 (same as CRA for consistency)
- **Proxy:** `/api` → `http://localhost:5001` (for IPFS)
- **Path Alias:** `@` → `./src`
- **Build Output:** `dist/`

### Tailwind CSS

Tailwind is configured to scan:
- `./index.html`
- `./src/**/*.{js,ts,jsx,tsx}`

Theme includes Shadcn UI compatible CSS variables for:
- Colors (primary, secondary, accent, etc.)
- Border radius
- Dark mode support

### React 18 Changes

The entry point (`src/index.jsx`) now uses:
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

This is the new React 18 concurrent rendering API.

---

## 🎨 Using Tailwind CSS

### Basic Usage

```jsx
// Instead of CSS classes
<div className="container">

// Use Tailwind utilities
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Using the cn() Utility

```jsx
import { cn } from '@/lib/utils'

<div className={cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
)}>
```

### Shadcn UI Compatible

The project is now ready for Shadcn UI components:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
```

---

## 📦 Build Output Comparison

| Aspect | CRA | Vite |
|--------|-----|------|
| Dev Server Start | ~30s | ~1s |
| Hot Reload | ~2-3s | ~50ms |
| Build Output | `build/` | `dist/` |
| Build Time | ~60s | ~15s |
| Bundle Size | Larger | Smaller (tree-shaking) |

---

## 🐛 Troubleshooting

### Issue: CSS @tailwind warnings

**Solution:** These are expected. Tailwind directives are processed by PostCSS during build.

### Issue: Module not found errors

**Solution:** Run `npm install` to ensure all dependencies are installed.

### Issue: Port 3000 already in use

**Solution:** Change port in `vite.config.js`:
```javascript
server: {
  port: 3001, // or any available port
}
```

### Issue: Web3/IPFS not working

**Solution:** Check that the proxy configuration in `vite.config.js` matches your IPFS node URL.

---

## 📝 Migration Checklist

- [x] Remove react-scripts
- [x] Upgrade to React 18
- [x] Install Vite and plugins
- [x] Install Tailwind CSS
- [x] Create Vite configuration
- [x] Move index.html to root
- [x] Update React entry point
- [x] Configure Tailwind
- [x] Update package.json scripts
- [ ] **Install dependencies** (`npm install`)
- [ ] **Test dev server** (`npm run dev`)
- [ ] **Test production build** (`npm run build`)
- [ ] **Commit changes** (after verification)

---

## 🎯 Ready to Proceed

Once you have Node.js/npm available, simply run:

```bash
cd client
npm install
npm run dev
```

Your modernized blockchain crowdfunding platform will be running with:
- ⚡ Lightning-fast Vite dev server
- 🎨 Tailwind CSS for styling
- ⚛️ React 18 with concurrent features
- 🔧 Modern tooling and ESLint

---

**Migration Status:** ✅ Configuration Complete | ⏳ Awaiting Dependency Installation
