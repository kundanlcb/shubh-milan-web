# Shubh Milan Web App

A fully responsive web application built with React, TypeScript, and Vite. This is the web version of the Shubh Milan React Native app, designed to provide a seamless experience across mobile, tablet, and desktop devices.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router**: Client-side routing for smooth navigation
- **Type Safety**: Full TypeScript support for better developer experience
- **Path Aliases**: Clean import statements using @ aliases

## 📱 Responsive Breakpoints

The app uses the following breakpoints for responsive design:

- **xs**: 320px (Extra small devices)
- **sm**: 640px (Small devices)
- **md**: 768px (Tablets)
- **lg**: 1024px (Desktops)
- **xl**: 1280px (Large desktops)
- **2xl**: 1536px (Extra large screens)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Header, Footer, MainLayout)
│   └── ui/             # UI components (Container, etc.)
├── pages/              # Page components (HomePage, AboutPage, etc.)
├── hooks/              # Custom React hooks (useResponsive, etc.)
├── utils/              # Utility functions
├── services/           # API services and data fetching
├── types/              # TypeScript type definitions
├── constants/          # App constants and configuration
└── assets/             # Static assets (images, fonts, etc.)
```

## 🛠️ Technology Stack

- **React 19.2.0**: Latest React with improved performance
- **TypeScript 5.9.3**: Type-safe code
- **Vite 7.2.4**: Fast build tool and dev server
- **Tailwind CSS 4.x**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **ESLint**: Code linting and quality

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shubh-milan-web
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 🧹 Linting

Run ESLint:

```bash
npm run lint
```

## 📝 Coding Conventions

### Import Aliases

Use path aliases for cleaner imports:

```typescript
// ✅ Good
import { Container } from '@/components/ui/Container';
import { useResponsive } from '@/hooks/useResponsive';

// ❌ Avoid
import { Container } from '../../../components/ui/Container';
```

### Component Structure

- Use functional components with TypeScript
- Define prop interfaces for all components
- Use `type` imports for type-only imports (required by `verbatimModuleSyntax`)

```typescript
import type { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  title: string;
}

export const MyComponent = ({ children, title }: MyComponentProps) => {
  // Component logic
};
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels

## 🎨 Design System

### Colors

Primary color palette is defined in `tailwind.config.js`:
- `primary-50` to `primary-900`: Red color scale for brand identity

### Typography

- System font stack for optimal performance
- Responsive font sizes using Tailwind utilities

### Spacing

- Consistent spacing using Tailwind's spacing scale
- Container with responsive padding (4, 6, 8 for different breakpoints)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

[Add license information]

## 🤝 Contributing

[Add contribution guidelines]

## 📞 Support

For support, email contact@shubhmilan.com

---

## Development Phases

This is **Phase 1** of the multi-phase development:

### ✅ Phase 1: Project Setup & Architecture (Current)
- Vite + React + TypeScript setup
- Responsive design system with Tailwind CSS
- Folder structure and organization
- Base layout components (Header, Footer)
- Routing with React Router
- Initial pages (Home, About, Features, Contact)
- Path aliases configuration
- Mobile-first responsive design

### 🔜 Phase 2: Core Features (Upcoming)
- User authentication
- Profile management
- Search and filtering
- Matching algorithm integration

### 🔜 Phase 3: Advanced Features (Planned)
- Real-time messaging
- Video calls
- Notifications
- Advanced matching preferences

### 🔜 Phase 4: Testing & Deployment (Planned)
- Unit tests
- Integration tests
- E2E tests
- CI/CD pipeline
- Production deployment
