// src/components/HydrationLoader.tsx
"use client";

import { useEffect, useState } from "react";
import Loading from "../app/loading";

export default function HydrationLoader({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // this runs only on the client after mount
    setHydrated(true);
  }, []);

  // show loader until hydration has completed
  if (!hydrated) {
    return <Loading />;
  }

  return <>{children}</>;
}
