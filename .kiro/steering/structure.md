---
inclusion: always
---

# Project Structure & Architecture

## Directory Organization

**CRITICAL**: Follow this exact structure when creating new files:

```
src/
├── components/           # Reusable UI components ONLY
│   ├── layout/          # App-wide layout (Header, Footer)
│   ├── hero/            # Hero section component
│   ├── features/        # Features showcase component
│   └── download/        # Download section component
├── pages/               # Route-level page components ONLY
│   ├── Home.tsx         # Main landing page
│   └── Guide.tsx        # Guide/documentation page
├── assets/              # Static assets (images, icons)
│   ├── images/          # All image files
│   └── react.svg        # Framework assets
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles ONLY
```

## Mandatory File Creation Rules

### Component Files
- **ALWAYS** create component folder: `src/components/feature-name/`
- **ALWAYS** include both: `ComponentName.tsx` + `ComponentName.module.css`
- **NEVER** create components directly in `src/` - use appropriate subdirectory

### Page Files  
- **ONLY** create in `src/pages/` for route-level components
- **NEVER** mix page components with reusable components

### Asset Files
- **ALWAYS** place images in `src/assets/images/`
- **NEVER** store assets in component folders

## Required Component Architecture

### Naming Conventions (STRICT)
- **Components**: PascalCase (`Hero`, `FeatureCard`, `DownloadButton`)
- **Files**: Exact match to component name (`Hero.tsx`, `Hero.module.css`)
- **CSS Classes**: camelCase (`heroSection`, `primaryButton`)
- **Exports**: Named exports ONLY (`export const Hero`)

### Component Template (MANDATORY)
```typescript
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // Define all props here
}

export const ComponentName: React.FC<ComponentNameProps> = ({ ...props }) => {
  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};
```

### CSS Module Template (MANDATORY)
```css
.container {
  /* Base container styles */
}

/* Use camelCase for all class names */
.primaryButton {
  /* Button styles */
}
```

## File Organization Enforcement

### Component Placement Rules
- **Reusable UI components**: `src/components/feature-name/`
- **Page-level components**: `src/pages/`
- **Layout components**: `src/components/layout/`
- **NEVER** create components outside these directories

### Import Order (STRICT)
1. External packages (React, libraries)
2. Internal components (relative imports)
3. Styles (CSS modules last)

```typescript
import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '../button/Button';
import styles from './ComponentName.module.css';
```

## Styling Architecture

### CSS Modules (MANDATORY)
- **ALWAYS** use CSS Modules for component styles
- **NEVER** use inline styles or global CSS for components
- **Pattern**: `import styles from './ComponentName.module.css'`
- **Usage**: `className={styles.className}`

### Responsive Design Rules
- **Mobile-first**: Start with mobile styles, use `min-width` media queries
- **Breakpoints**: Use consistent breakpoint values across components
- **Testing**: Verify on mobile, tablet, desktop viewports

## AI Assistant Guidelines

### When Creating Components
1. **ALWAYS** check existing structure before creating new files
2. **ALWAYS** follow the component template exactly
3. **ALWAYS** create both `.tsx` and `.module.css` files
4. **NEVER** deviate from naming conventions

### When Modifying Structure
1. **NEVER** move existing components to different directories
2. **ALWAYS** maintain the established folder hierarchy
3. **ALWAYS** update imports if file locations change

### Error Prevention
- **Verify** component placement matches directory rules
- **Check** that CSS modules are properly imported and used
- **Ensure** TypeScript interfaces are defined for all props
- **Validate** that exports follow named export pattern