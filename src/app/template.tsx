"use client";

import { useEffect } from "react";
import { usePortfolioStore } from "@/zustand/zustand";

export default function Template({ children }: { children: React.ReactNode }) {
  // function setThemeToLocalStorage(themeBoolean: boolean) {
  //   if (typeof window !== "undefined") {
  //     sessionStorage.setItem("theme", themeBoolean.toString());
  //   }
  // }

  function getThemeFromSessionStorage() {
    if (typeof window !== "undefined") {
      const sessionData = sessionStorage.getItem("theme");
      // console.log("sessionData:", sessionData);
      return sessionData === null
        ? true
        : sessionStorage.getItem("theme") === "true";
    }
    return true;
  }
  const colourTheme = usePortfolioStore((state) => state.darkTheme);
  const setColourTheme = usePortfolioStore((state) => state.setDarkTheme);
  // const [colourTheme, setColourTheme] = useState<boolean | null>(null);
  //     const [colourTheme, setColourTheme] = useState(
  //     localStorage.getItem("theme") !== "false"
  //   );
  // function toggleColourTheme() {
  //   setColourTheme((currentTheme: boolean | null) => !currentTheme);
  //   setThemeToLocalStorage(!colourTheme);
  // }

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
