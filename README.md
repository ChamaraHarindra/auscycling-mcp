# AusCycling Homepage

A modern, responsive homepage for AusCycling built with Next.js 15, TypeScript, and Tailwind CSS. This project recreates the AusCycling homepage design from Figma with pixel-perfect accuracy.

## 🚀 Features

- **Pixel-perfect design** - Faithfully recreated from the original Figma design
- **Responsive layout** - Optimized for all device sizes
- **Modern tech stack** - Next.js 15, TypeScript, Tailwind CSS v4
- **Design system** - Comprehensive design tokens from Figma variables
- **Component-based architecture** - Modular, reusable components
- **Performance optimized** - Fast loading with Next.js optimizations
- **Accessibility** - WCAG compliant components

## 🎨 Design System

The project includes a comprehensive design system based on the Figma variables:

### Colors

- **Evening Sea**: `#02534d` (Primary brand color)
- **Turbo**: `#eded06` (Accent yellow)
- **Oxford Blue**: `#3c444d` (Text color)
- **Mercury**: `#e7e8e9` (Light gray)
- **Seashell**: `#f1f1f1` (Background gray)
- **Deep Teal**: `#003430` (Dark accent)
- **Black Pearl**: `#030d17` (Dark text)

### Typography

- **Canela Trial**: Serif font for headings (with fallbacks)
- **Inter**: Sans-serif font for body text
- Font sizes: 12px, 14px, 16px, 18px, 20px, 24px, 48px, 72px
- Line heights optimized for readability

### Spacing

- Consistent spacing system: 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px
- Container max-width: 1280px
- Section padding: 80px horizontal

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── ProjectAscent.tsx    # Project Ascent B2032+ section
│   ├── LatestNews.tsx       # Latest news section
│   ├── UpcomingEvents.tsx   # Upcoming events section
│   ├── BecomeMember.tsx     # Become a member section
│   ├── CoachingOfficiating.tsx # Coaching section
│   ├── Disciplines.tsx      # Cycling disciplines section
│   ├── FeaturedAthletes.tsx # Featured athletes section
│   ├── InOurNetwork.tsx     # Network section
│   ├── SubscribeNewsletter.tsx # Newsletter signup
│   ├── Partners.tsx         # Partners section
│   ├── Footer.tsx           # Footer
│   └── Separator.tsx        # Section separator
└── lib/
    └── utils.ts             # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts), Canela Trial (custom)
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd auscycling-mcp
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

The homepage is fully responsive and optimized for:

- **Desktop**: 1440px+ (primary design)
- **Tablet**: 768px - 1439px
- **Mobile**: 320px - 767px

## 🎯 Key Sections

1. **Header** - Navigation with logo and menu items
2. **Hero** - Main headline with call-to-action
3. **Project Ascent** - Feature section with dual CTAs
4. **Latest News** - News articles with category badges
5. **Upcoming Events** - Event listings with details
6. **Become a Member** - Membership information
7. **Coaching & Officiating** - Coaching opportunities
8. **Disciplines** - Cycling discipline showcase
9. **Featured Athletes** - Athlete profiles
10. **In Our Network** - Network partners and programs
11. **Newsletter Signup** - Email subscription
12. **Partners** - Partner logos
13. **Footer** - Links and social media

## 🎨 Design Tokens

All design tokens are defined in `src/app/globals.css` and include:

- Color palette from Figma
- Typography scale
- Spacing system
- Border radius values
- Font family definitions

## 🔧 Customization

### Adding New Components

1. Create a new component in `src/components/`
2. Follow the existing naming convention
3. Use the design tokens from `globals.css`
4. Import and use in `page.tsx`

### Modifying Colors

Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-auscycling-evening-sea: #02534d;
  /* ... other colors */
}
```

### Adding New Fonts

1. Add font files to `public/fonts/`
2. Define font-face in CSS
3. Update the font variables in `globals.css`

## 📦 Build & Deployment

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

### Deploy to Vercel

```bash
pnpm vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design by AusCycling team
- Built with Next.js and Tailwind CSS
- Icons by Lucide React
- Fonts by Google Fonts and custom Canela Trial

---

**Note**: This is a recreation of the AusCycling homepage design. All content and branding belong to AusCycling.
