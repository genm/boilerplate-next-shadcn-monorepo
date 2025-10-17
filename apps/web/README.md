# @repo/web

Next.js 15 application with React 19, App Router, and shadcn/ui components.

## 🚀 Features

- **Next.js 15** with App Router
- **React 19** with latest features
- **shadcn/ui** components from `@repo/ui`
- **Tailwind CSS v4** for styling
- **Storybook** for component development

## 🛠️ Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Start Storybook
pnpm storybook
```

## 📁 Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # App-specific components
└── lib/               # Utility functions
```

## 🎨 Styling

This app uses Tailwind CSS v4 with the shared configuration from `@repo/tailwind-config`.

## 📚 Storybook

View app-specific stories at `http://localhost:6006`

## 🚀 Deployment

This app can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**

### Vercel Deployment

1. Connect your repository to Vercel
2. Set build command: `pnpm build`
3. Set output directory: `.next`
4. Deploy!
