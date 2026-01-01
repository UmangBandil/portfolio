# Getting Started Guide

Welcome to the Portfolio Component Library! This guide walks you through using the complete component system.

## 🎯 Quick Start

### 1. View the Portfolio Homepage
```bash
npm run dev
# Open http://localhost:5173/
```

### 2. Explore Components in Storybook
```bash
npm run storybook
# Open http://localhost:6006/
```

### 3. Build for Production
```bash
npm run build
# Output in dist/ folder
```

---

## 📖 Component Hierarchy

### Understanding Atomic Design

The project uses **5-level atomic design**:

```
┌─────────────────────────────┐
│  Pages (App.tsx)            │  Full applications
├─────────────────────────────┤
│  Templates (3 layouts)       │  Page templates
├─────────────────────────────┤
│  Organisms (12 sections)     │  Complex components
├─────────────────────────────┤
│  Molecules (15 patterns)     │  Atom combinations
├─────────────────────────────┤
│  Atoms (20 base)            │  Foundational UI
└─────────────────────────────┘
```

---

## 🔨 Using Components

### Import Pattern

```tsx
// Atoms (base UI)
import Button from './atoms/Button'
import Input from './atoms/Input'
import Typography from './atoms/Typography'

// Molecules (combinations)
import FormField from './molecules/FormField'
import SkillCard from './molecules/SkillCard'

// Organisms (sections)
import Navbar from './organisms/Navbar'
import Hero from './organisms/Hero'

// Templates (layouts)
import HomeTemplate from './templates/HomeTemplate'
```

---

## 💡 Component Usage Examples

### Example 1: Using Atoms

```tsx
import Button from './atoms/Button'
import Typography from './atoms/Typography'
import Card from './atoms/Card'

export default function SimpleCard() {
  return (
    <Card>
      <Typography variant="h3">My Title</Typography>
      <Typography variant="p">Description here</Typography>
      <Button variant="primary">Click Me</Button>
    </Card>
  )
}
```

### Example 2: Using Molecules

```tsx
import FormField from './molecules/FormField'
import SkillCard from './molecules/SkillCard'

export default function MyForm() {
  return (
    <>
      <FormField
        label="Email"
        name="email"
        type="email"
        required
      />
      
      <SkillCard
        name="React"
        level={90}
        icon="zap"
      />
    </>
  )
}
```

### Example 3: Using Organisms

```tsx
import Navbar from './organisms/Navbar'
import Hero from './organisms/Hero'
import SkillsGrid from './organisms/SkillsGrid'
import Footer from './organisms/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar
        brand="Umang"
        navItems={[
          { label: 'Home', href: '/', active: true },
          { label: 'About', href: '/about' },
        ]}
        ctaButton={{ label: 'Contact', onClick: () => {} }}
      />
      
      <Hero
        title="Welcome"
        subtitle="Full-stack developer"
        avatarInitials="UB"
        badges={['React', 'TypeScript']}
        primaryButton={{ label: 'See Work', onClick: () => {} }}
      />
      
      <SkillsGrid
        items={[
          { name: 'React', level: 90 },
          { name: 'TypeScript', level: 85 },
        ]}
        columns={3}
      />
      
      <Footer
        brandName="Umang"
        sections={[]}
        socialLinks={[]}
        copyrightText="© 2024"
      />
    </>
  )
}
```

### Example 4: Using Templates

```tsx
import HomeTemplate from './templates/HomeTemplate'

export default function HomePage() {
  return (
    <HomeTemplate
      navbar={{
        brand: 'Umang',
        navItems: [...],
        ctaButton: {...},
      }}
      hero={{
        title: 'Hi, I\'m Umang',
        subtitle: 'Full-stack developer',
        // ... more hero props
      }}
      footer={{
        brandName: 'Umang Bandil',
        sections: [...],
        // ... more footer props
      }}
    >
      {/* Additional sections go here */}
      <section>Your content</section>
    </HomeTemplate>
  )
}
```

---

## 🎨 Styling

All components use **TailwindCSS + DaisyUI**.

### Built-in Classes
- `bg-base-100` - Light background
- `bg-base-200` - Medium background
- `btn btn-primary` - Primary button
- `card shadow-md` - Card with shadow
- `badge badge-primary` - Badge

### Custom Styling
```tsx
<Card className="bg-gradient-to-r from-blue-500 to-purple-600">
  <Typography variant="h1" className="text-white">
    Custom styled heading
  </Typography>
</Card>
```

### Responsive Classes
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
</div>
```

---

## 📱 Responsive Design

Components are built mobile-first:

| Breakpoint | Device | Class |
|-----------|--------|-------|
| Mobile | < 640px | Default |
| Tablet | 640px+ | `sm:` |
| Laptop | 768px+ | `md:` |
| Desktop | 1024px+ | `lg:` |
| Large | 1280px+ | `xl:` |
| Wide | 1536px+ | `2xl:` |

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {/* 1 column mobile, 2 tablet, 3 laptop, 4 desktop */}
</div>
```

---

## 🎭 Viewing in Storybook

### Accessing Component Stories

1. Run `npm run storybook`
2. Navigate to `http://localhost:6006/`
3. Browse categories:
   - **Atoms** - Base UI elements
   - **Molecules** - Component combinations
   - **Organisms** - Page sections
   - **Templates** - Page layouts

### Story Features

- **Canvas** - Visual component preview
- **Controls** - Interactive prop adjustment
- **Code** - Copy-paste component code
- **Docs** - Auto-generated documentation

### Example Story
```tsx
import type { Meta, StoryObj } from '@storybook/react'
import Button from '../atoms/Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click Me',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
}
```

---

## 🔧 Common Tasks

### Add a New Atom Component

1. Create `src/atoms/MyComponent.tsx`:
```tsx
import React from 'react'

interface MyComponentProps {
  label: string
  onClick: () => void
}

const MyComponent: React.FC<MyComponentProps> = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  )
}

export default MyComponent
```

2. Create `src/stories/MyComponent.stories.tsx`:
```tsx
import type { Meta, StoryObj } from '@storybook/react'
import MyComponent from '../atoms/MyComponent'

const meta: Meta<typeof MyComponent> = {
  title: 'Atoms/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Click Me',
    onClick: () => console.log('clicked'),
  },
}
```

### Create a New Molecule

1. Combine atoms in `src/molecules/MyMolecule.tsx`
2. Create story in `src/stories/MyMolecule.stories.tsx`
3. View in Storybook: `http://localhost:6006/`

### Build Organism from Molecules

1. Assemble molecules in `src/organisms/MyOrganism.tsx`
2. Add responsive grid layout
3. Create story with representative data
4. Test in Storybook

---

## 📊 Project Statistics

| Category | Count |
|----------|-------|
| Atoms | 17 |
| Molecules | 15 |
| Organisms | 12 |
| Templates | 3 |
| Pages | 1 |
| Stories | 48+ |
| **Total** | **51 components** |

---

## 🚀 Performance Tips

1. **Lazy Load** - Use `React.lazy()` for large sections
2. **Memoize** - Use `React.memo()` for pure components
3. **Code Split** - Vite handles this automatically
4. **Image Optimization** - Use next-gen formats (WebP)

```tsx
import React from 'react'

// Lazy load organism
const ContactForm = React.lazy(() => import('./organisms/ContactForm'))

export default function Page() {
  return (
    <React.Suspense fallback={<LoadingState />}>
      <ContactForm />
    </React.Suspense>
  )
}
```

---

## 🔍 Type Safety

All components are fully typed with TypeScript:

```tsx
// Get type definitions
import type { SkillCardProps } from './molecules/SkillCard'

// Use in your component
const mySkill: SkillCardProps = {
  name: 'React',
  level: 90,
  icon: 'zap',
}
```

---

## 🐛 Debugging

### Check TypeScript Errors
```bash
npx tsc --noEmit
```

### Run Linter
```bash
npx eslint .
```

### Validate Build
```bash
npm run build
```

### Check Component Props
1. Open Storybook
2. Go to component
3. Click "Controls" tab
4. See all available props

---

## 📚 Resources

- **Storybook:** `http://localhost:6006/`
- **Dev Server:** `http://localhost:5173/`
- **TailwindCSS:** https://tailwindcss.com/
- **DaisyUI:** https://daisyui.com/
- **React:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/

---

## ✅ Next Steps

1. ✅ Explore all components in Storybook
2. ✅ Customize colors in TailwindCSS config
3. ✅ Add your own data to portfolio
4. ✅ Deploy to production
5. ✅ Add more pages/features as needed

---

**Happy Building! 🚀**