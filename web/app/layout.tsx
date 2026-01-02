import "@/styles/globals.css";
import type { Metadata } from "next";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

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
      <body suppressHydrationWarning>
        <MaxWidthWrapper>
          {children}
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
