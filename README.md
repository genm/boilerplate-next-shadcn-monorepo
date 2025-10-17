# Turborepo Next.js shadcn Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Template Repository](https://img.shields.io/badge/Template-Repository-blue)](https://github.com/genm/turborepo-nextjs-shadcn-starter/generate)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-%3E%3D10.0.0-orange)](https://pnpm.io/)

A modern monorepo boilerplate with Next.js 15, React 19, shadcn/ui, Storybook v9, and Turborepo.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **UI Library**: shadcn/ui with Tailwind CSS v4
- **Monorepo**: Turborepo with pnpm workspaces
- **Storybook**: v9 with Vite builder
- **Testing**: Vitest
- **Linting**: ESLint + Prettier
- **Git Hooks**: lefthook

## ✨ Features

- 🏗️ **Modern Monorepo**: Turborepo with pnpm workspaces for optimal performance
- ⚡ **Next.js 15**: Latest Next.js with App Router and React 19
- 🎨 **shadcn/ui**: Beautiful, accessible components with Tailwind CSS v4
- 📚 **Storybook v9**: Component development and documentation
- 🧪 **Testing**: Vitest for fast unit testing
- 🔧 **Developer Experience**: ESLint, Prettier, TypeScript, and Git hooks
- 📦 **Package Management**: pnpm for efficient dependency management
- 🚀 **Production Ready**: Optimized builds and deployment configurations

## 📁 Project Structure

```
/
├── apps/
│   └── web/              # Next.js 15 app + Storybook
├── packages/
│   ├── ui/              # Shared UI components + Storybook
│   ├── config/          # Shared configs (eslint, tailwind)
│   └── tsconfig/        # TypeScript configs
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+

### Node.js Version Management

This project uses Node.js 22. You can use the following tools to manage Node.js versions:

- **nvm**: `nvm use` (uses `.nvmrc`)
- **fnm**: `fnm use` (uses `.node-version`)
- **volta**: `volta pin node@22`

### Quick Start

The fastest way to get started is using this template:

1. Click the **"Use this template"** button on GitHub
2. Create a new repository from this template
3. Clone your new repository
4. Follow the installation steps below

### Installation

1. Clone the repository:

```bash
# Using GitHub Template Repository
# Click "Use this template" button on GitHub, or:
git clone https://github.com/genm/turborepo-nextjs-shadcn-starter.git my-project
cd my-project
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development servers:

```bash
# Start all apps and packages in development mode
pnpm dev

# Or start specific packages
pnpm --filter @repo/web dev
pnpm --filter @repo/ui dev
```

## 📜 Available Scripts

### Root Level Commands

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages
- `pnpm test` - Run all tests
- `pnpm storybook` - Start all Storybook instances
- `pnpm format` - Format all files with Prettier

### Package-Specific Commands

```bash
# Web app
pnpm --filter @repo/web dev
pnpm --filter @repo/web build
pnpm --filter @repo/web storybook

# UI package
pnpm --filter @repo/ui dev
pnpm --filter @repo/ui build
pnpm --filter @repo/ui storybook
pnpm --filter @repo/ui test
```

## 🚀 Turbo Remote Cache Setup

This project is optimized for Turbo's remote caching capabilities. To enable remote caching:

### 1. Create a Vercel Account (Recommended)

1. Sign up at [vercel.com](https://vercel.com)
2. Create a team or use your personal account
3. Go to your team settings and find the "Turborepo" section
4. Copy your team ID and token

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Turbo Remote Cache Configuration
TURBO_TEAM_ID=your-team-id
TURBO_TOKEN=your-turbo-token

# Next.js Environment Variables
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Storybook Environment Variables
STORYBOOK_THEME=light
STORYBOOK_VIEWPORT=desktop

# Vite Environment Variables (for UI package)
VITE_APP_NAME=UI Package
```

### 3. Login to Turbo Remote Cache

```bash
# Login to Turbo remote cache
npx turbo login

# Link your project to your team
npx turbo link
```

### 4. Benefits of Remote Cache

- **Faster CI/CD**: Build artifacts are shared across team members and CI environments
- **Reduced Build Times**: Skip building unchanged packages
- **Team Collaboration**: Share build outputs with your team
- **Cost Savings**: Reduce CI minutes and local development time

### 5. Cache Statistics

View your cache usage and performance:

```bash
# Show cache statistics
npx turbo run build --dry-run

# Show detailed cache information
npx turbo run build --summarize
```

## 🎨 Storybook

Each package has its own Storybook instance:

- **UI Package**: `http://localhost:6007`
- **Web App**: `http://localhost:6006`

```bash
# Start all Storybook instances
pnpm storybook

# Start specific Storybook
pnpm --filter @repo/ui storybook
pnpm --filter @repo/web storybook
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests for specific package
pnpm --filter @repo/ui test
```

## 📦 Adding New Components

### Component Structure

The UI package has a clear separation between component types:

```
packages/ui/src/components/
├── shadcn/           # shadcn/ui primitive components
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── composite/        # Custom composite components
    ├── user-card.tsx
    └── ...
```

### To the UI Package

#### Adding shadcn/ui Components

1. Use shadcn CLI: `npx shadcn@latest add button`
2. Components are automatically placed in `packages/ui/src/components/shadcn/`
3. These components are excluded from Prettier formatting

#### Adding Custom Composite Components

1. Create component in `packages/ui/src/components/composite/`
2. Add to `packages/ui/src/index.ts`
3. Create stories in `packages/ui/src/components/composite/*.stories.tsx`
4. Add tests in `packages/ui/src/components/composite/*.test.tsx`
5. These components are formatted by Prettier

### Using Components in Web App

```tsx
import { Button, Card, UserCard } from "@repo/ui";

export default function MyPage() {
  return (
    <Card>
      <Button>Click me</Button>
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
        role="Software Engineer"
        onEdit={() => console.log("Edit clicked")}
      />
    </Card>
  );
}
```

## 🔧 Configuration

### ESLint

Shared ESLint configuration in `packages/config/eslint/`:

- Base config for TypeScript
- Next.js specific rules
- React library rules

### Tailwind CSS

Tailwind CSS v4 configuration in `packages/config/tailwind/`:

- Shared design tokens
- CSS variables for theming
- Component-specific styles

### TypeScript

Shared TypeScript configurations in `packages/tsconfig/`:

- Base configuration
- Next.js specific config
- React library config

### Prettier

Prettier configuration with smart formatting rules:

- **shadcn/ui primitive components** (`packages/ui/src/components/shadcn/*.tsx`) are excluded from Prettier formatting
- **Custom composite components** (`packages/ui/src/components/composite/*.tsx`) are formatted by Prettier
- This prevents shadcn components from being modified while keeping custom components properly formatted

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Deploy Web App

The web app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - Great for static sites
- **AWS Amplify** - Full-stack deployment
- **Railway** - Simple deployment platform

### Environment Variables

Create a `.env.local` file in the `apps/web` directory for environment-specific variables:

```bash
# Example environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🔧 Troubleshooting

### Common Issues

**Port conflicts**: If ports 3000, 6006, or 6007 are in use, the development servers will automatically use the next available port.

**Node.js version**: Make sure you're using Node.js 22+. Check with `node --version`.

**pnpm not found**: Install pnpm globally with `npm install -g pnpm`.

**Build errors**: Try clearing the cache with `pnpm clean` and reinstalling dependencies.

### Getting Help

- Check the [Issues](https://github.com/genm/turborepo-nextjs-shadcn-starter/issues) page
- Review the [Contributing Guide](CONTRIBUTING.md)
- Ask questions in [GitHub Discussions](https://github.com/genm/turborepo-nextjs-shadcn-starter/discussions)

## 🎯 Using as Template

This repository is designed to be used as a GitHub Template Repository:

1. Click the **"Use this template"** button on GitHub
2. Create a new repository from this template
3. Clone your new repository
4. Follow the [Getting Started](#-getting-started) guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`pnpm test && pnpm lint`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
