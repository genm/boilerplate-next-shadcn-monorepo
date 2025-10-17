# @repo/ui

Shared UI component library built with React 19, shadcn/ui, and Tailwind CSS v4.

## 🎨 Components

### Primitive Components (shadcn/ui)

- **Button** - Versatile button component with multiple variants
- **Card** - Container component for content organization

### Composite Components (Custom)

- **UserCard** - User profile card combining Button and Card components

## 🚀 Usage

### Using Primitive Components

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@repo/ui";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Using Composite Components

```tsx
import { UserCard } from "@repo/ui";

function UserList() {
  return (
    <UserCard
      name="John Doe"
      email="john.doe@example.com"
      role="Software Engineer"
      onEdit={() => console.log("Edit clicked")}
      onDelete={() => console.log("Delete clicked")}
    />
  );
}
```

## 🧪 Development

```bash
# Start development mode
pnpm dev

# Build the package
pnpm build

# Run tests
pnpm test

# Start Storybook
pnpm storybook
```

## 📚 Storybook

View all components and their variants at `http://localhost:6007`

## 🎯 Adding New Components

### Component Structure

```
src/components/
├── shadcn/           # shadcn/ui primitive components
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── composite/        # Custom composite components
    ├── user-card.tsx
    └── ...
```

### Adding shadcn/ui Components

1. Use shadcn CLI: `npx shadcn@latest add button`
2. Components are automatically placed in `src/components/shadcn/`
3. These components are excluded from Prettier formatting

### Adding Custom Composite Components

1. Create component file in `src/components/composite/`
2. Export from `src/index.ts`
3. Add Storybook stories
4. Write tests
5. Update documentation
6. These components are formatted by Prettier

## 🎨 Theming

Components use CSS variables for theming. Customize colors in your app's CSS:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}
```
