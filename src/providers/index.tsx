"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import ActiveSectionContextProvider from "@/lib/session-context";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
