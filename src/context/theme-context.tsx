import React, { useState, useEffect, createContext, ReactNode } from "react";

const LIGHT_THEME_CLASS = "light";
const DARK_THEME_CLASS = "dark";

const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
  }
  return "light";
};

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

interface ThemeProviderProps {
  initialTheme?: string;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<string>(initialTheme || getInitialTheme());

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? LIGHT_THEME_CLASS : DARK_THEME_CLASS);
    root.classList.add(theme === "light" ? LIGHT_THEME_CLASS : DARK_THEME_CLASS);
    localStorage.setItem("color-theme", theme);
    window.dispatchEvent(new Event("color-theme-changed"));
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
