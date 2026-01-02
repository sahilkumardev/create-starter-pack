"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function HeroSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="max-w-3xl place-content-center place-items-center text-center">
        <h1 className="text-5xl font-mono font-semibold mb-4 leading-tight tracking-wide">
          Framework Experience
          <br />
          for the beginner dev 👌
        </h1>
        <p className="text-muted-foreground text-lg">
          A powerful CLI tool that helps beginners quickly scaffold (Basic)
          starter projects with index, CSS, and script files - getting you from
          zero to coding in seconds.
        </p>

        <div
          className={cn(
            "font-mono text-sm cursor-default transition-all",
            "flex items-center gap-2 px-7 py-4 rounded-full mt-4",
            "hover:text-foreground hover:border-muted-foreground/60",
            "hover:scale-105 hover:shadow-[0_0_30px_rgba(76,29,149,0.2)]",
            "bg-background/80 border text-muted-foreground duration-200 select-none [&_svg]:shrink-0 [&_svg]:size-4"
          )}
          data-cmd="npx create-starter-pack@latest"
          onClick={() => handleCopy("npx create-starter-pack@latest")}
        >
          <span className="text-indigo-400">$</span>
          npx create-starter-pack@latest
          <div className="relative w-4 h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "absolute inset-0 text-foreground transition-all duration-300 ease-in-out",
                copied
                  ? "opacity-0 scale-75 rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              )}
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "absolute inset-0 text-green-400 transition-all duration-300 ease-in-out",
                copied
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 -rotate-90"
              )}
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
