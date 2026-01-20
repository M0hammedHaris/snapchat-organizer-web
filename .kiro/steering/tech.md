# Technology Stack

## Core Technologies
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.x
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons

## Development Tools
- **Linting**: ESLint with TypeScript support
- **Type Checking**: TypeScript 5.9.x
- **Package Manager**: npm

## Build Configuration
- **Target**: ES2022
- **Module System**: ESNext with bundler resolution
- **JSX**: react-jsx (automatic runtime)
- **Deployment**: Configured for relative paths (GitHub Pages compatible)

## Common Commands

### Development
```bash
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production (TypeScript + Vite)
npm run preview      # Preview production build
npm run lint         # Run ESLint checks
```

### Code Quality
- Strict TypeScript configuration enabled
- ESLint with React hooks and refresh plugins
- No unused locals/parameters enforcement
- Strict type checking with noEmit

## Performance Considerations
- Vite for fast HMR and builds
- CSS Modules for scoped styling
- React 19 features and optimizations
- Framer Motion for smooth animations