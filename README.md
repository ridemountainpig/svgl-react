# Svgl React

**Svgl React** is an open-source npm package that offers a collection of high-quality brand SVG logos as reusable **React components** with complete TypeScript support.

You can easily use these logos in your React, Next.js, or other frontend projects, with built-in support for both light and dark variants.

This package is powered by the official [`pheralb/svgl`](https://github.com/pheralb/svgl) repository.

## ✨ Features

- Fully typed React components via [`@svgr`](https://react-svgr.com/)
- Light and dark mode variants when available
- Tree-shakable — import only what you use

## 📦 Installation

```bash
npm install @ridemountainpig/svgl-react
# or
yarn add @ridemountainpig/svgl-react
# or
pnpm add @ridemountainpig/svgl-react
# or
bun add @ridemountainpig/svgl-react
```

## 🚀 Usage

Search for Svgl components using `⌘ + k` followed by the SVG name, or visit the [Svgl Components](https://svgl-react.vercel.app/docs/components) page to see available Svgl components.

```tsx
import { VercelLight, VercelDark } from "svgl-react";

export default function SvglReact() {
  return (
    <div>
      <VercelLight />
      <Nextjs width={50} height={50} />
    </div>
  );
}
```
