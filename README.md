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

Visit the [Svgl Components](https://svgl-react.vercel.app/docs/components) page to explore the available Svgl components. You can search for components by pressing `⌘ + k` and entering the SVG name. If you're unsure which SVGs are available, visit [Svgl](https://svgl.app/) to find the one you need.

```tsx
import { Svgl } from "@ridemountainpig/svgl-react";

export default function SvglReact() {
  return <Svgl />;
}
```

## 📄 Documentation

Find the Svgl components and examples in the [documentation](https://svgl-react.vercel.app/docs).

## ©️ License

[MIT](https://github.com/ridemountainpig/svgl-react/blob/main/LICENSE) License © [Yen Cheng Lin](https://github.com/ridemountainpig/)
