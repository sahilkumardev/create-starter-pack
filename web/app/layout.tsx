import "@/styles/globals.css";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://pack.sahilkumardev.com"),
  title: "Starter Pack CLI",
  description:
    "A comprehensive starter pack CLI tool for quickly scaffolding web and development projects, for beginners or who want to experience cli tool.",
  keywords: [
    "CLI Tool",
    "Starter Pack",
    "Project Generator",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "javascript",
    "Development Tools",
    "Scaffolding",
    "Boilerplate",
    "Template Generator",
    "html",
    "css",
    "tailwindcss",
  ],
  authors: [
    {
      name: "Sahilkumardev",
      url: "https://sahilkumardev.com",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pack.sahilkumardev.com",
    title: "Starter Pack CLI",
    description:
      "A comprehensive starter pack CLI tool for quickly scaffolding web and development projects.",
    siteName: "Starter Pack CLI",
    images: [{ url: "/og-image.png" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "Sahilkumardev",
  twitter: {
    card: "summary",
    title: "Starter Pack CLI",
    description:
      "A comprehensive starter pack CLI tool for quickly scaffolding web and development projects.",
    creator: "@sahilkumardev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="dark">
        <ReactLenis root>
          <Background />
          <MaxWidthWrapper>
            <SiteHeader />
            {children}
            <SiteFooter />
          </MaxWidthWrapper>
        </ReactLenis>
      </body>
    </html>
  );
}
