import { useCallback, useState } from "react";
import { ThemeContext, ThemeUpdateContext } from "./theme-context-values";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
