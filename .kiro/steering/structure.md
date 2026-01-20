# Project Structure

## Directory Organization

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Header, Footer (app-wide layout)
│   ├── hero/            # Hero section component
│   ├── features/        # Features showcase component
│   └── download/        # Download section component
├── pages/               # Route-level page components
│   ├── Home.tsx         # Main landing page
│   └── Guide.tsx        # Guide/documentation page
├── assets/              # Static assets
│   ├── images/          # Image files
│   └── react.svg        # Framework assets
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Component Architecture

### Naming Conventions
- **Components**: PascalCase with descriptive names (`Hero`, `Features`)
- **Files**: Match component names (`Hero.tsx`, `Hero.module.css`)
- **CSS Modules**: `ComponentName.module.css` pattern
- **Exports**: Named exports preferred (`export const Hero`)

### Component Structure
- Each component has its own folder when it includes styles
- CSS Modules for component-specific styling
- TypeScript interfaces for props when needed
- Functional components with React.FC typing

### Styling Patterns
- CSS Modules for scoped component styles
- CSS custom properties (variables) for theming
- Responsive design with mobile-first approach
- Glassmorphism effects and modern UI patterns

## File Organization Rules
- Group related components in feature folders
- Keep assets organized by type (images, icons)
- Separate page-level components from reusable components
- Co-locate component files with their styles

## Import Conventions
- Relative imports for local files
- Absolute imports for external packages
- Group imports: external packages first, then local files
- Use named imports where possible