"use client";

import { useEffect } from "react";
import { usePortfolioStore } from "@/zustand/zustand";

export default function Template({ children }: { children: React.ReactNode }) {
  function getThemeFromSessionStorage() {
    if (typeof window !== "undefined") {
      const sessionData = sessionStorage.getItem("theme");
      return sessionData === null
        ? true
        : sessionStorage.getItem("theme") === "true";
    }
    return true;
  }
  const colourTheme = usePortfolioStore((state) => state.darkTheme);
  const setColourTheme = usePortfolioStore((state) => state.setDarkTheme);
  useEffect(() => {
    setColourTheme(getThemeFromSessionStorage());
  }, [setColourTheme]);

  if (colourTheme === null) return null;
  return (
    <div
      id="theme-wrapper"
      className={`min-h-screen w-full  ${
        colourTheme ? "dark bg-bg-dk" : "bg-bg"
      }`}
    >
      {children}
    </div>
  );
}
