import { create } from "zustand";
/* eslint-disable */
export const usePortfolioStore = create<{
  darkTheme: boolean;
  toggleDarkTheme: () => void;
  setDarkTheme: (input: boolean) => void;
}>((set) => ({
  darkTheme: true,
  toggleDarkTheme: () => {
    set((state) => {
      const inverted = !state.darkTheme;
      setThemeToLocalStorage(inverted);
      return { darkTheme: inverted };
    });
  },
  setDarkTheme: (input) => {
    set((state) => ({ darkTheme: input }));
    setThemeToLocalStorage(input);
  },
}));

function setThemeToLocalStorage(themeBoolean: boolean) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("theme", themeBoolean.toString());
  }
}
