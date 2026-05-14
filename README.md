# World Models :: AI - GDP Talks

A Next.js TypeScript project converting the original HTML presentation into a modern React component-based application.

## Overview

This is a sophisticated interactive presentation about World Models in AI, featuring:
- Custom cursor tracking
- Animated sections with scroll reveals
- Interactive carousels and controls
- Dynamic token streaming visualization
- Responsive design with Syne and Cormorant Garamond typography

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed

### Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### Development

```bash
# Start the development server
npm run dev

# Or with yarn
yarn dev

# Or with pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
/app
  ├── layout.tsx        # Main layout with metadata
  ├── page.tsx          # Main page component with all sections
  └── globals.css       # Global styles and animations

/public               # Static assets (if needed)
next.config.js       # Next.js configuration
tsconfig.json        # TypeScript configuration
package.json         # Dependencies and scripts
```

## Features

### Interactive Components

1. **Custom Cursor** - Smooth cursor tracking with ring effect
2. **Chapter Navigator** - Sticky indicators for navigation
3. **Hero Section** - Animated title with starfield background
4. **Token Stream** - Animated scrolling token visualization
5. **Brain Rings** - Pulsing concentric rings with particles
6. **Level Bars** - Interactive capability level selector
7. **Four Worlds Carousel** - Auto-rotating environment showcase
8. **Scroll Reveals** - Content fades in on scroll
9. **Marquee Band** - Continuous scrolling text
10. **Responsive Design** - Mobile-friendly layouts

### Animations

- Smooth fade-up animations on scroll
- CSS keyframe animations for stars, tokens, and rings
- Smooth transitions and hover effects
- Auto-rotating carousel with manual controls

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **React Hooks** - State management (useState, useEffect, useRef)
- **CSS3** - Animations and responsive design
- **Google Fonts** - Typography (Cormorant Garamond, Syne, Syne Mono)

## Customization

### Colors
Modify CSS variables in `app/globals.css`:
```css
:root {
  --ink: #0a0a0f;
  --paper: #f5f0e8;
  --gold: #c9a84c;
  /* ... more variables ... */
}
```

### Content
Edit component content in `app/page.tsx` for text, speakers, or event details.

### Styling
Global styles in `app/globals.css` and component-specific styling inline in React components.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Server-side rendering with Next.js
- Optimized CSS animations using CSS3
- Intersection Observer for efficient scroll reveals
- RequestAnimationFrame for smooth 60fps animations

## License

This project is based on a conversion of an original HTML presentation to a modern Next.js application.

## Notes

- The presentation maintains all original animations and interactivity
- Fully responsive for desktop, tablet, and mobile devices
- Uses modern React patterns with hooks
- TypeScript for type safety
- Optimized for performance with efficient DOM manipulation
