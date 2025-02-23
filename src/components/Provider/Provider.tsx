"use client";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
function Provider({ children }: { children: ReactNode }) {
  return (
    <div>
    <NextTopLoader color="#4ade80" />
      {children}
    </div>
  );
}

export default Provider;
