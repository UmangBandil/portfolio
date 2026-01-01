# Portfolio Component Library

A professional, modern portfolio website built with **React 19**, **TypeScript 5.7**, **TailwindCSS 4.1**, **DaisyUI 5**, and **Storybook 8.6** using **Atomic Design** principles.

## 🏗️ Architecture

The project follows **Atomic Design** methodology, organizing components into 5 hierarchical levels:

### **Atoms (20 components)** - Base UI Elements
The foundational building blocks of the interface:
- **Button** - Interactive button with variants (primary, secondary, accent, outline)
- **Input** - Text input with validation states
- **Typography** - Semantic typography (h1-h6, p, span) with DaisyUI styling
- **Card** - Base card container with shadow and hover effects
- **Badge** - Label badges with color variants
- **Avatar** - User avatar with initials or image
- **Icon** - SVG icon wrapper component
- **Link** - Navigation link with active state
- **Divider** - Visual separator
- **Progress** - Progress bar indicator
- **Spinner** - Loading spinner animation
- **Alert** - Alert/notification messages
- **Select** - Dropdown select component
- **Textarea** - Multi-line text input
- **Switch** - Toggle switch component
- **Slider** - Range slider input
- **Rating** - Star rating display
- Plus 3 more utility atoms

### **Molecules (15 components)** - Atom Combinations
Reusable patterns combining atoms:
- **SkillCard** - Card + Badge + Typography for skill display
- **FormField** - Input + Label + Error message handling
- **NavItem** - Link + Icon + Badge for navigation
- **SocialLinks** - Group of social media links
- **StatBox** - Statistics display card
- **ButtonGroup** - Multiple buttons with layout
- **TeamMember** - Avatar + Name + Role card
- **FeatureBox** - Icon + Title + Description card
- **TimelineItem** - Timeline event entry
- **PricingCard** - Plan details with CTA
- **Testimonial** - Quote + Author + Rating display
- **TagCloud** - Tag collection
- **ErrorState** - Error message display
- **LoadingState** - Loading skeleton states
- **ProjectTag** - Project technology tags

### **Organisms (12 components)** - Complex Sections
Full page sections assembling molecules:
- **Navbar** - Navigation bar with brand and CTA
- **Hero** - Full-height hero section with call-to-action
- **ProjectCard** - Featured/regular project showcase
- **SkillsGrid** - Responsive grid of skills
- **Timeline** - Vertical timeline with milestones
- **ContactForm** - Form with validation and submission
- **Footer** - Multi-section footer with links
- **Gallery** - Image gallery with lightbox
- **Testimonials** - Testimonials grid
- **Features** - Features showcase grid
- **Stats** - Statistics display grid
- **Pricing** - Pricing plans grid

### **Templates (3 components)** - Page Layouts
Reusable page layout structures:
- **HomeTemplate** - Homepage layout (Navbar + Hero + Content + Footer)
- **SectionTemplate** - Generic section page (Navbar + Title + Content + Footer)
- **BlogTemplate** - Blog post layout (Navbar + Title + Content + Footer)

### **Pages (1 component)**
- **App.tsx** - Portfolio homepage with real data

## 🚀 Technologies

| Tech | Version | Purpose |
|------|---------|---------|
| **React** | 19.0.0 | UI framework |
| **TypeScript** | 5.7 | Type safety |
| **Vite** | 7.3.0 | Build tool & dev server |
| **TailwindCSS** | 4.1.0 | Utility-first CSS |
| **DaisyUI** | 5.0.0 | Component presets |
| **Storybook** | 8.6.15 | Component documentation |
| **React Hook Form** | 7.53.2 | Form state management |
| **GSAP** | 3.12.5 | Animation library |
| **EmailJS** | 4.0.3 | Email service |
| **Google AI** | 0.24.1 | AI integration |

## 📁 Project Structure

```
src/
├── atoms/              # 20 base components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Typography.tsx
│   └── ... (17 more)
├── molecules/          # 15 atom combinations
│   ├── SkillCard.tsx
│   ├── FormField.tsx
│   └── ... (13 more)
├── organisms/          # 12 complex sections
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   └── ... (10 more)
├── templates/          # 3 page layouts
│   ├── HomeTemplate.tsx
│   ├── SectionTemplate.tsx
│   └── BlogTemplate.tsx
├── stories/            # 40+ Storybook files
├── App.tsx             # Portfolio homepage
├── main.jsx            # Entry point
├── index.css           # Global styles
└── App.css             # App-specific styles

.storybook/
├── main.ts             # Storybook config
└── preview.ts          # Global preview config

public/                 # Static assets
```

## 🎨 Component Gallery

### Viewing Components

**Development Server:**
```bash
npm run dev
# Visit http://localhost:5173/
```

**Storybook:**
```bash
npm run storybook
# Visit http://localhost:6006/
```

### Component Stories
- **50+ Storybook stories** documenting every component
- **Multiple variants** for each component
- **Interactive controls** for prop exploration
- **Automatic documentation** generation

## 🔧 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
# Start dev server
npm run dev

# Start Storybook
npm run storybook

# Run linter
npx eslint .
```

### Build
```bash
# Production build
npm run build

# Preview build
npm run preview
```

## 📊 Statistics

| Metric | Count |
|--------|-------|
| **Total Components** | 51 |
| **Atoms** | 20 |
| **Molecules** | 15 |
| **Organisms** | 12 |
| **Templates** | 3 |
| **Pages** | 1 |
| **Storybook Stories** | 50+ |
| **Lines of Component Code** | 2000+ |
| **TypeScript Interfaces** | 100+ |

## 🎯 Features

✅ **Atomic Design** - Well-organized component hierarchy  
✅ **TypeScript** - Full type safety across codebase  
✅ **TailwindCSS** - Responsive, utility-first styling  
✅ **DaisyUI** - Pre-built component styles  
✅ **Storybook** - Interactive component documentation  
✅ **Responsive** - Mobile-first design  
✅ **Accessible** - Semantic HTML and ARIA labels  
✅ **Modern Stack** - React 19, TypeScript 5.7  
✅ **Fast Build** - Vite's lightning-fast bundling  
✅ **ESLint** - Code quality enforcement  

## 🛠️ Component Usage

### Example: Using Atoms in App

```tsx
import Button from './atoms/Button'
import Typography from './atoms/Typography'
import Card from './atoms/Card'

export default function MyComponent() {
  return (
    <Card>
      <Typography variant="h2">Hello</Typography>
      <Button variant="primary">Click Me</Button>
    </Card>
  )
}
```

### Example: Using Molecules

```tsx
import FormField from './molecules/FormField'

export default function LoginForm() {
  return (
    <FormField
      label="Email"
      name="email"
      error={errors.email?.message}
      required
    />
  )
}
```

### Example: Using Organisms

```tsx
import Navbar from './organisms/Navbar'
import Hero from './organisms/Hero'
import Footer from './organisms/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar {...navProps} />
      <Hero {...heroProps} />
      <Footer {...footerProps} />
    </>
  )
}
```

### Example: Using Templates

```tsx
import HomeTemplate from './templates/HomeTemplate'

export default function HomePage() {
  return (
    <HomeTemplate
      navbar={navProps}
      hero={heroProps}
      footer={footerProps}
    >
      {/* Additional sections */}
    </HomeTemplate>
  )
}
```

## 🎭 Storybook Stories

Each component includes a `.stories.tsx` file with:
- **Default story** showing common usage
- **Variants** demonstrating different prop combinations
- **Interactive controls** for testing props
- **Code snippets** for quick reference

Access stories at: `http://localhost:6006/`

## 📈 Performance

| Metric | Value |
|--------|-------|
| **Bundle Size** | 207.68 kB |
| **Gzipped Size** | 64.87 kB |
| **Modules** | 54 |
| **Build Time** | ~1.5s |
| **CSS Size** | 20.74 kB |
| **CSS Gzipped** | 6.01 kB |

## 🔄 Design System

### Color Palette
Uses DaisyUI's semantic color system:
- **Primary** - Main brand color
- **Secondary** - Secondary actions
- **Accent** - Highlights and accents
- **Neutral** - Neutral grays
- **Base** - Base background colors

### Spacing
TailwindCSS spacing scale (0.25rem - 64rem)

### Typography
- **Headings** - h1 through h6
- **Body** - p (paragraph)
- **Small** - span, small

### Responsive Breakpoints
- **sm** - 640px
- **md** - 768px
- **lg** - 1024px
- **xl** - 1280px
- **2xl** - 1536px

## 📝 Documentation

### Component Props
Each component is fully typed with TypeScript interfaces. View in:
1. **IDE** - Hover over component for types
2. **Storybook** - Controls tab shows all props
3. **Source Code** - `.tsx` files have prop interfaces

### Storybook Documentation
Auto-generated docs available in Storybook UI

## 🚀 Future Enhancements

- [ ] Animation library integration (GSAP)
- [ ] Accessibility audit and improvements
- [ ] Performance optimization
- [ ] Testing suite (Vitest/Playwright)
- [ ] E2E test coverage
- [ ] Design tokens system
- [ ] Component variants documentation
- [ ] Theming system

## 📄 License

MIT

## 👨‍💻 Author

Umang Bandil - Full Stack Developer

---

**Build Command:** `npm run build`  
**Dev Command:** `npm run dev`  
**Storybook Command:** `npm run storybook`  
**Lint Command:** `npx eslint .`