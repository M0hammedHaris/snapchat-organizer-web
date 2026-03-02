---
inclusion: always
---

# Development Standards

## TypeScript Requirements
- **Strict typing**: Never use `any` - use `unknown` or proper types
- **Component props**: Always define interfaces for props, even simple ones
- **Export pattern**: Use named exports (`export const ComponentName`)
- **Type imports**: Use `import type` for type-only imports
- **React.FC**: Use for all functional components with explicit return types

## Component Architecture Rules
- **File structure**: Each component gets its own folder with `ComponentName.tsx` and `ComponentName.module.css`
- **Single responsibility**: One component per file, focused on single purpose
- **Props interface**: Always define `interface ComponentNameProps` above component
- **Default exports**: Avoid - use named exports for better refactoring
- **Composition**: Prefer composition over prop drilling

## CSS Module Conventions
- **Naming**: Use camelCase for class names (`.heroSection`, `.primaryButton`)
- **File naming**: Always `ComponentName.module.css` pattern
- **Import pattern**: `import styles from './ComponentName.module.css'`
- **Usage**: `className={styles.className}` - never string concatenation
- **Responsive**: Mobile-first approach with `min-width` media queries

## Code Generation Guidelines
- **Component template**: Always include props interface, proper typing, and CSS module import
- **Error handling**: Include basic error boundaries for new features
- **Accessibility**: Add proper ARIA labels and semantic HTML from the start
- **Performance**: Use React.memo only when profiling shows benefit

## File Organization Patterns
```
src/components/feature-name/
├── FeatureName.tsx          # Main component
├── FeatureName.module.css   # Scoped styles
└── index.ts                 # Re-export (optional)
```

## Required Code Patterns

### Component Structure
```typescript
interface ComponentNameProps {
  // Always define props interface
}

export const ComponentName: React.FC<ComponentNameProps> = ({ prop }) => {
  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};
```

### CSS Module Usage
```typescript
import styles from './ComponentName.module.css';
// Use: className={styles.className}
// Combine: className={`${styles.base} ${styles.modifier}`}
```

## Build and Testing Requirements
- **Pre-commit**: Always run `npm run lint` before committing
- **Type checking**: Use `npm run build` to verify TypeScript compilation
- **Browser testing**: Test in Chrome, Firefox, Safari (mobile and desktop)
- **Accessibility**: Verify keyboard navigation and screen reader compatibility

## Performance Standards
- **Bundle size**: Monitor with `npm run build` - flag increases >10%
- **Images**: Optimize all images before adding to assets
- **Lazy loading**: Use dynamic imports for routes and large components
- **CSS**: Avoid inline styles - use CSS modules for all styling

## Deployment Checklist
- Verify `npm run build` completes without errors
- Test production build with `npm run preview`
- Ensure all assets load with relative paths (GitHub Pages compatibility)
- Validate responsive design on mobile, tablet, desktop
- Check console for errors and warnings