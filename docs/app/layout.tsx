import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Svgl React",
  description:
    "Svgl React is an open-source npm package that provides a collection of high-quality SVG logos as React components.",
  openGraph: {
    title: "Svgl React",
    description:
      "Svgl React is an open-source npm package that provides a collection of high-quality SVG logos as React components.",
    url: "https://svgl-react.vercel.app/docs",
    siteName: "Svgl React",
    images: "/svgl.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ridemountainpig",
    creator: "@ridemountainpig",
    images: "/svgl.png",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
