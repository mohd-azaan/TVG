# Font Setup Instructions for TVG Navigation

## Font Issues Fixed

✅ **Resolved Font Problems:**

1. Fixed incorrect Google Fonts imports in `global.css`
2. Added proper Gilroy font-face definitions with fallbacks
3. Updated Tailwind configuration with consistent font utilities
4. Applied proper font classes throughout HeaderSection component
5. Ensured consistent typography across desktop and mobile navigation

## Font Implementation

### Navigation Menu Items

- **Font Family:** Gilroy Bold (`font-gilroy font-bold`)
- **Fallback:** Inter, system fonts
- **Usage:** All main navigation items (ABOUT, PLAY, LEARN, etc.)

### Dropdown Items

- **Font Family:** Gilroy SemiBold (`font-gilroy font-semibold`)
- **Fallback:** Inter, system fonts
- **Usage:** Learn dropdown items (Coaching Levels, Meet the Coach, etc.)

### Call-to-Action Buttons

- **Font Family:** Open Sans (`font-open-sans`)
- **Weight:** Semi-bold
- **Usage:** "BOOK NOW" buttons

### Mobile Navigation

- **Menu Items:** Gilroy Bold
- **Dropdown Items:** Gilroy Medium
- **Buttons:** Open Sans

## Required Font Files

⚠️ **Important:** You need to add these font files to your `/public/fonts/` directory:

```
/public/fonts/
├── Gilroy-Medium.woff2
├── Gilroy-Medium.woff
├── Gilroy-SemiBold.woff2
├── Gilroy-SemiBold.woff
├── Gilroy-Bold.woff2
├── Gilroy-Bold.woff
├── Gilroy-Black.woff2
├── Gilroy-Black.woff
├── Morganite-Bold.woff2
├── Morganite-Bold.woff
├── Morganite-ExtraBold.woff2
├── Morganite-ExtraBold.woff
├── Morganite-Black.woff2
└── Morganite-Black.woff
```

## Alternative Solution (If font files unavailable)

If you don't have the Gilroy font files, you can use these Google Fonts alternatives:

1. **Replace Gilroy with Inter:** Already configured as fallback
2. **Or use Montserrat:** Similar geometric sans-serif
3. **Update global.css** to use Google Fonts only:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
```

## Current Font Stack

```css
--font-gilroy: 'Gilroy', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-open-sans: 'Open Sans', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
```

This ensures your navigation will always display with proper fonts, falling back gracefully if custom fonts fail to load.
