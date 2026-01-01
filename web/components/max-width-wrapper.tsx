import * as React from "react";
import { cn } from "@/lib/utils";

export function MaxWidthWrapper({
  children,
  className,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("max-w-screen-2xl mx-auto relative", className)}>
      {children}
    </div>
  );
}
