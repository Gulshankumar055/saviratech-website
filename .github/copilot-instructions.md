# SaviraTech React Website - AI Agent Instructions

## Project Overview
This is a single-page React application built with Vite, featuring a business/landing page layout with multiple sections. The app uses modern React (v19) with functional components and hooks.

## Architecture
- **Main App Structure**: `App.jsx` renders a sequence of section components in a single `<div className="main-content">`
- **Component Organization**: All components in `src/components/`, each representing a page section (Header, HeroSlider, Services, etc.)
- **Styling**: Centralized CSS in `src/css/` with responsive styles in `responsive.css`
- **Assets**: Images in `src/assets/images/`, videos in `src/assets/videos/`

## Key Patterns & Conventions

### Component Structure
- Functional components with named exports: `export default function ComponentName()`
- Use `useRef` and `useEffect` for DOM manipulation (e.g., scroll listeners, toggle behaviors)
- Event listeners added in `useEffect` with cleanup in return function
- Example from `Header.jsx`:
  ```jsx
  useEffect(() => {
    const onScroll = () => { /* scroll logic */ };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  ```

### CSS & Styling
- BEM-like naming: `component__element--modifier` (e.g., `header__nav`, `btn--primary`)
- CSS variables in `:root` for theming (colors, fonts, shadows)
- Font: Poppins from Google Fonts
- Container class: `container` with max-width 1600px, 90% width
- Button classes: `btn btn-primary`, `btn btn-secondary`

### Libraries & Integrations
- **Swiper**: Used for carousels/sliders (e.g., `HeroSlider.jsx`)
  - Import modules: `Navigation, Pagination, Autoplay, EffectFade`
  - CSS imports: `"swiper/css"`, `"swiper/css/navigation"`, etc.
  - Configuration: loop, speed, effect, autoplay delay
- **AOS**: Installed but not yet implemented (animate on scroll library)

### Data Handling
- Static data arrays for dynamic content (e.g., slides in `HeroSlider.jsx`)
- Inline SVG icons with `stroke="currentColor"` for theming
- Image paths: Relative to src (e.g., `"./src/assets/images/image.jpg"`)

### Development Workflow
- **Start dev server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React hooks and refresh plugins)
- **Preview build**: `npm run preview`

### File Structure Conventions
- Components: `src/components/ComponentName.jsx`
- Styles: `src/css/style.css` (main), `src/css/responsive.css`
- Assets: `src/assets/images/` for images, `src/assets/videos/` for videos
- Main entry: `src/main.jsx` imports CSS files and renders App

### Common Patterns
- Section components wrapped in `<section className="section-name">`
- Grid layouts: `services-grid`, `pricing-grid`
- Card components: `service-card`, `pricing-card`
- Icon colors: `icon-green`, `icon-purple`, `icon-red` (via CSS classes)

When adding new sections, follow the existing pattern: create component in `src/components/`, import in `App.jsx`, add to the render sequence.</content>
<parameter name="filePath">D:\React-website\saviratech-react\.github\copilot-instructions.md