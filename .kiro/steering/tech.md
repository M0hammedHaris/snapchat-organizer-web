---
inclusion: always
---

# Technology Stack & Development Guidelines

## Core Technologies
- **Framework**: React 19 with TypeScript 5.9.x
- **Build Tool**: Vite 7.x (ES2022 target, ESNext modules)
- **Styling**: CSS Modules (scoped component styles)
- **Animations**: Framer Motion (smooth UI transitions)
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Package Manager**: npm (use exclusively)

## Critical Development Rules

### TypeScript Requirements
- **NEVER use `any`** - use proper types or `unknown`
- **Strict mode enabled** - all type checking enforced
- **JSX**: Automatic react-jsx runtime (no React imports needed)
- **Exports**: Use named exports only (`export const Component`)

### CSS Modules Enforcement
- **MANDATORY**: Every component must have `.module.css` file
- **Pattern**: `import styles from './Component.module.css'`
- **Usage**: `className={styles.className}` (never string literals)
- **Naming**: camelCase class names (`.heroSection`, `.primaryButton`)

### Build & Deployment
- **Target**: GitHub Pages compatible (relative paths)
- **Commands**: Use `npm run build` to verify TypeScript compilation
- **Linting**: Run `npm run lint` before commits
- **Preview**: Use `npm run preview` to test production builds

## Development Workflow

### Essential Commands
```bash
npm run dev          # Development server (localhost:5173)
npm run build        # Production build + TypeScript check
npm run preview      # Test production build locally
npm run lint         # ESLint validation
```

### Code Quality Standards
- **ESLint**: React hooks and refresh plugins active
- **TypeScript**: Strict checking with noEmit
- **No unused variables**: Enforced at build time
- **Import order**: External packages → internal components → styles

### Performance Guidelines
- **Vite HMR**: Leverage fast refresh for development
- **CSS Modules**: Automatic scoping prevents style conflicts
- **React 19**: Use concurrent features and optimizations
- **Framer Motion**: Optimize animations for 60fps

## AI Assistant Guidelines

### When Writing Code
1. **Always** use TypeScript with proper interfaces
2. **Always** create CSS Module files for components
3. **Always** use named exports for components
4. **Never** use inline styles or global CSS for components
5. **Verify** builds pass with `npm run build`

### File Creation Pattern
- Component: `ComponentName.tsx` + `ComponentName.module.css`
- Import: `import styles from './ComponentName.module.css'`
- Export: `export const ComponentName: React.FC<Props>`

### Error Prevention
- Run TypeScript compilation before suggesting code
- Ensure CSS Module imports match file structure
- Validate responsive design works across viewports
- Test animations don't impact performance