# THE VIRTUAL GREENS - DESIGN SYSTEM STANDARDS

Apply these exact design standards across all sections for consistent typography, spacing, and layout:

## 🎯 HERO SECTIONS STANDARDS

**Section Container:**
```css
className='relative w-full h-[100vh] lg:h-[120vh] bg-[#102121] text-white overflow-hidden'
```

**Content Wrapper:**
```css
className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-36 pb-8 lg:pb-12'
```

**Content Positioning:**
```css
className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'
```

**Hero Titles (H1):**
```css
className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'
```

**Hero Subtitles:**
```css
className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-2'
```

**Hero Body Text:**
```css
className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-12'
```

**Hero Images:**
```css
className='w-[85%] lg:w-[500px] lg:h-[420px] overflow-hidden rounded-[30px] lg:mr-36'
```

## 📝 TYPOGRAPHY HIERARCHY

**Main Section Headings (H2):**
```css
className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-white uppercase'
```

**Reduced Section Headings (H2 - Compact):**
```css
className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase'
```

**Section Subheadings:**
```css
className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase'
```

**Reduced Subheadings:**
```css
className='font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.3px] text-[#7ddb8a] uppercase'
```

**Body Text (Primary):**
```css
className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575]'
```

**Body Text (Secondary):**
```css
className='font-gilroy font-normal text-[17px] leading-[26px] tracking-[0.1px] text-[lightgrey]'
```

**Small Text:**
```css
className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-[#757575]'
```

**Note Text (with bold prefix):**
```css
className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575]'
// With: <span className='font-bold text-black'>NOTE:</span>
```

## 🎨 SECTION LAYOUT STANDARDS & ALIGNMENT

### 🎯 CRITICAL ALIGNMENT PRINCIPLE - UNIVERSAL SPACING CONSISTENCY
**ALL SECTIONS ACROSS ALL PAGES MUST USE IDENTICAL LEFT/RIGHT MARGIN ALIGNMENT**

Every section on every page (HomePage, AboutPage, PlayPage, ContactPage, etc.) must use the **EXACT SAME** left and right margins as the hero section and footer. This creates a perfectly aligned vertical line from top to bottom of every page.

**🚨 UNIVERSAL SPACING RULE**:
- **Hero Section** sets the spacing standard: `lg:ml-[12vw] md:ml-[8vw]` (left) and `lg:mr-[12vw] md:mr-[8vw]` (right)
- **ALL CONTENT SECTIONS** must follow this exact same spacing pattern
- **Footer Section** must align perfectly with hero section margins
- **NO SECTION** can break this alignment - every element must respect these boundaries

### 🎯 MANDATORY ALIGNMENT PATTERN FOR ENTIRE WEBSITE
**From Hero to Footer - Every Section Must Align:**
```css
// UNIVERSAL LEFT/RIGHT MARGINS - APPLY TO EVERY SECTION
className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'
```

This creates invisible vertical guidelines that run from the very top hero section down to the footer, ensuring perfect visual consistency and professional layout throughout the entire website.

### 📐 UNIVERSAL ALIGNMENT STANDARD (PlayPage Pattern)

**🎯 MASTER ALIGNMENT PATTERN - PlayPage Hero Standard:**
```css
// Hero content positioning (UNIVERSAL STANDARD)
className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'

// ALL sections on ALL pages MUST use this alignment:
className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'
```

**📋 APPLICATION RULES:**
- **ALL PAGES** (HomePage, AboutPage, PlayPage, etc.) must use the PlayPage hero alignment pattern
- **IF ANY PAGE** needs hero section updates, it MUST follow the PlayPage hero section structure
- **NO EXCEPTIONS** - Every section, every page uses `lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]`

**🔄 MIGRATION REQUIREMENT:**
If updating any existing hero section, apply this PlayPage pattern:
```jsx
// STANDARD HERO STRUCTURE (Apply to ALL pages)
<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-32 lg:pt-36 pb-8 lg:pb-12'>
  <div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
    {/* Hero content goes here */}
  </div>
</div>
```

### 📦 SECTION CONTAINER STANDARDS

**Standard Section Container:**
```css
className='relative w-full min-h-[600px] bg-[#102121] overflow-hidden'
```

**Reduced Section Container:**
```css
className='relative w-full min-h-[540px] bg-[#102121] overflow-hidden'
```

**Section Height (Desktop):**
```css
className='bg-[#102121] relative w-full h-[600px]'
```

### 🎯 CONTENT POSITIONING PATTERNS

**Centered Content (Match Hero Spacing):**
```css
className='absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[655px] text-center'
// Must be contained within hero-aligned wrapper
```

**Side-by-side Content (Match Hero Spacing):**
```css
className='absolute top-[159px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-12'
// Must be contained within hero-aligned wrapper
```

**Compact Content (Match Hero Spacing):**
```css
className='absolute top-[860px] left-1/2 transform -translate-x-1/2 text-center max-w-[900px] px-4'
// Must be contained within hero-aligned wrapper
```

**Grid Content Wrapper (REQUIRED for Alignment):**
```css
className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'
```

### 🏗️ SECTION STRUCTURE HIERARCHY

**Level 1: Page Container**
```css
className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'
```

**Level 2: PlayPage Hero-Aligned Content Wrapper (MANDATORY)**
```css
className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'
// This creates universal left/right spacing following PlayPage hero standard
```

**Level 3: Content Container**
```css
className='max-w-[1200px] mx-auto'
// OR other max-width containers within the aligned wrapper
```

**Level 4: Actual Content**
```css
// Typography, images, buttons, etc.
```

### ⚠️ ALIGNMENT ENFORCEMENT RULES

1. **NEVER use absolute positioning without hero-aligned wrapper**
2. **ALWAYS wrap content in the lg:ml-[12vw] md:ml-[8vw] pattern**
3. **MAINTAIN consistent max-width hierarchy within aligned containers**
4. **ENSURE mobile responsiveness preserves proportional alignment**

## 🔘 BUTTON STANDARDS

**Primary CTA Buttons (Desktop):**
```css
className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[8px] inline-flex items-center gap-2 font-gilroy font-semibold text-[14px] text-white uppercase'
```

**Compact CTA Buttons (Desktop):**
```css
className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[20px] py-[6px] inline-flex items-center gap-2 font-gilroy font-semibold text-[14px] text-white uppercase'
```

**Primary CTA Buttons (Mobile):**
```css
className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[8px] inline-flex items-center gap-2 mx-auto'
```

**Hero CTA Buttons:**
```css
className='bg-[#009444] hover:bg-[#7ddb8a] transition-colors rounded-full px-6 py-2.5 flex items-center gap-3 group w-fit'
```

**Button Text (Standard):**
```css
className='font-gilroy font-medium text-[14px] text-white group-hover:text-black uppercase'
```

**Button Text (Mobile):**
```css
className='font-gilroy font-semibold text-[14px] leading-[16px] tracking-[0.5px] text-white uppercase'
```

## 📱 MOBILE RESPONSIVENESS

**Mobile Container:**
```css
className='block lg:hidden px-4 sm:px-6 py-16'
```

**Mobile Content Wrapper (Standard):**
```css
className='space-y-8 max-w-[700px] mx-auto text-center'
```

**Mobile Content Wrapper (Compact):**
```css
className='space-y-12 max-w-[600px] mx-auto'
```

**Mobile Typography Scaling:**
- Main headings: `text-[clamp(32px,8vw,56px)]`
- Subheadings: `text-[16px]`
- Body text: `text-[14px] leading-[22px]`
- Button text: `text-[14px] leading-[16px] tracking-[0.5px]`

**Mobile Description Sections:**
```css
className='space-y-4 px-4'
```

## 🖼️ IMAGE STANDARDS

**Section Images (Desktop - Standard):**
```css
className='w-[655px] h-[368px] rounded-[30px] bg-cover bg-center'
```

**Section Images (Desktop - Compact):**
```css
className='w-[580px] h-[368px] rounded-[30px] bg-cover bg-center'
// OR for smaller: w-[550px] h-[300px]
```

**Mobile Images:**
```css
className='w-full aspect-[16/9] object-cover rounded-[20px] shadow-xl'
```

**Button Icons:**
```css
className='w-[24px] h-[24px]' // Desktop
className='w-5 h-5' // Mobile
```

## 📏 SPACING STANDARDS

**Section Spacing:**
- Section top margin: `mt-[100px]` to `mt-[159px]`
- Content spacing: `space-y-4` to `space-y-8`
- Element margins: `mt-[20px]`, `mt-[24px]`, `mb-[24px]`
- Grid gaps: `gap-[25px]` to `gap-[30px]`
- Compact spacing: `mt-[8px]`, `space-y-3`

**Container Padding:**
- Desktop: `px-10` to `px-12`
- Mobile: `px-4 sm:px-6`
- Vertical: `py-8 lg:py-12`
- Compact: `px-4` (mobile descriptions)

**Content Width Hierarchy:**
- Full sections: `max-w-[1920px]`
- Standard content: `max-w-[1200px]` to `max-w-[1360px]`
- Compact content: `max-w-[900px]`
- Mobile: `max-w-[600px]` to `max-w-[700px]`
- Text blocks: `w-[655px]`, `w-[580px]`, `w-[550px]`

## 🎨 COLOR PALETTE

**Background Colors:**
- Primary dark: `bg-[#102121]`
- Secondary dark: `bg-[#0c1a1a]`
- Light section: `bg-[#f6f6f6]`
- Green accent: `bg-[#006F33]`
- White: `bg-white`

**Text Colors:**
- Primary white: `text-white`
- Light gray: `text-[lightgrey]`
- Medium gray: `text-[#757575]`
- Dark gray: `text-[#d1d3d4]`
- Green accent: `text-[#7ddb8a]`
- Primary green: `text-[#009444]`
- Black text: `text-black`

**Interactive Colors:**
- Primary button: `bg-[#009444]`
- Button hover: `hover:bg-[#007a38]`
- Special hover: `hover:bg-[#7ddb8a]`
- Tab active: `bg-[#cceada] border-[#cceada]`
- Tab inactive: `bg-transparent border-[#d1d1d1] text-[#757575]`

## 🔧 IMPLEMENTATION RULES

### Typography Rules:
1. **Use responsive clamp()** for all headings: `clamp(min, preferred, max)`
2. **Maintain font hierarchy** - Morganite for headings, Gilroy for body
3. **Apply consistent tracking** - 0.02em for headings, 0.1px for body text
4. **Use semantic font weights** - font-black for main headings, font-bold for subheadings, font-normal for body

### Layout Rules:
1. **Follow container patterns** - max-w-[1920px] → max-w-[1200px] → content widths
2. **MANDATORY: Use PlayPage hero alignment** - Every section on every page must use lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]
3. **Maintain responsive breakpoints** - lg:, md:, sm: consistently
4. **Apply proper z-indexing** - z-10 for content, z-20 for overlays, z-0 for backgrounds
5. **Enforce PlayPage alignment hierarchy** - Page Container → PlayPage Hero-Aligned Wrapper → Content Container → Content

### Spacing Rules:
1. **Use semantic spacing** - space-y-4, gap-2, px-4, py-8
2. **Follow margin hierarchy** - mt-[8px] < mt-[20px] < mt-[24px] < mt-[32px]
3. **Maintain consistent gaps** - gap-2 for buttons, gap-[25px] for cards, gap-[30px] for major sections
4. **Apply proportional padding** - Desktop px-12, Mobile px-4

### Component Rules:
1. **Standardize button styles** - Always include hover states and transitions
2. **Use consistent border radius** - rounded-[30px] for sections, rounded-[50px] for buttons
3. **Apply proper aspect ratios** - 16:9 for mobile images, specific dimensions for desktop
4. **Include accessibility attributes** - alt tags, proper semantic HTML

### Color Rules:
1. **Maintain contrast ratios** - White text on dark backgrounds, appropriate gray levels
2. **Use brand colors consistently** - #009444 for primary actions, #7ddb8a for accents
3. **Apply hover feedback** - All interactive elements need hover states
4. **Follow theme consistency** - Dark sections use light text, light sections use dark text

### Mobile Optimization:
1. **Scale fonts proportionally** - Reduce by 2-4px for mobile
2. **Adjust container widths** - max-w-[700px] for mobile vs max-w-[1200px] desktop
3. **Modify spacing** - Reduce margins and padding appropriately
4. **Stack layouts** - Convert side-by-side to vertical on mobile

## ✅ QUICK REFERENCE CHECKLIST

When implementing any section, ensure:
- [ ] **CRITICAL: Applied PlayPage hero alignment** - lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]
- [ ] Used exact className strings from this guide
- [ ] Applied responsive breakpoints (lg:, md:, sm:)
- [ ] Included hover states and transitions
- [ ] Followed typography hierarchy (Morganite headings, Gilroy body)
- [ ] Used semantic spacing (space-y-*, gap-*, px-*, py-*)
- [ ] Maintained container width hierarchy within PlayPage-aligned wrapper
- [ ] Applied consistent border radius and styling
- [ ] Included proper mobile responsiveness
- [ ] Used brand color palette
- [ ] Added accessibility attributes
- [ ] **Verified left/right spacing follows PlayPage hero standard**

## 🎯 COMMON PATTERNS & ALIGNMENT EXAMPLES

### **PlayPage Hero-Aligned Standard Section Pattern:**
```jsx
<section className='relative w-full min-h-[600px] bg-[#102121] overflow-hidden'>
  {/* Level 1: Page Container */}
  <div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>

    {/* Level 2: MANDATORY PlayPage Hero-Aligned Content Wrapper */}
    <div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>

      {/* Level 3: Content Container */}
      <div className='max-w-[1200px] mx-auto py-20'>

        {/* Level 4: Actual Content */}
        <div className='text-center'>
          <h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
            Section Title
          </h2>
          <p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[lightgrey] mt-[20px] max-w-[800px] mx-auto'>
            Section description with proper alignment
          </p>
          <a className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[8px] inline-flex items-center gap-2 font-gilroy font-semibold text-[14px] text-white uppercase mt-[24px]'>
            Button Text
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
```

### **PlayPage Hero-Aligned Two-Column Pattern:**
```jsx
<section className='relative w-full min-h-[600px] bg-white overflow-hidden'>
  {/* Level 1: Page Container */}
  <div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>

    {/* Level 2: MANDATORY PlayPage Hero-Aligned Content Wrapper */}
    <div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>

      {/* Level 3: Grid Container */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center py-20'>

        {/* Level 4: Content Column */}
        <div className='space-y-6'>
          <h2 className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-black uppercase'>
            Section Title
          </h2>
          <p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575]'>
            Section description
          </p>
        </div>

        {/* Level 4: Image Column */}
        <div className='w-full'>
          <img src='/image.png' alt='Description' className='w-full aspect-[16/9] object-cover rounded-[20px]' />
        </div>

      </div>
    </div>
  </div>
</section>
```

### **Mobile Pattern (Always Hero-Aligned):**
```jsx
{/* Mobile responsive layout - maintains proportional alignment */}
<div className='block lg:hidden px-4 sm:px-6 py-16'>
  {/* Mobile automatically maintains proportional spacing */}
  <div className='space-y-8 max-w-[700px] mx-auto text-center'>
    <h2 className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-black uppercase'>
      Mobile Title
    </h2>
    <p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-[#757575] px-4'>
      Mobile description
    </p>
  </div>
</div>
```

## 🚨 CRITICAL ALIGNMENT REMINDERS

### **NEVER DO THIS:**
```jsx
❌ <div className='absolute top-[100px] left-1/2 transform -translate-x-1/2'>
❌ <div className='max-w-[1200px] mx-auto'> // Without hero-aligned wrapper
❌ <div className='px-12'> // Direct padding without alignment wrapper
```

### **ALWAYS DO THIS:**
```jsx
✅ <div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
  ✅ <div className='max-w-[1200px] mx-auto'>
    ✅ Content goes here
  ✅ </div>
✅ </div>
```

This comprehensive design system ensures perfect visual consistency and alignment across the entire application while maintaining the premium, modern aesthetic of The Virtual Greens brand.

**🎯 UNIVERSAL STANDARD**: Every section on every page MUST follow the PlayPage hero alignment pattern (`lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]`) for consistent left/right spacing.

**📋 HERO SECTION UPDATES**: If any page requires hero section updates, it MUST adopt the PlayPage hero section structure and alignment pattern.