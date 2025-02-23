"use client";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
function Provider({ children }: { children: ReactNode }) {
  return (
    <div>
      <ThemeProvider>
        <NextTopLoader color="#4ade80" />
        {children}
      </ThemeProvider>
    </div>
  );
}

export default Provider;
