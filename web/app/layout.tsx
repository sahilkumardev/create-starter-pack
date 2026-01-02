import "@/styles/globals.css";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "Starter Pack Cli",
  description: "It is a starter pack for your index project.",
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
