import { createContext, useContext } from "react";

// Define context types explicitly
export const ThemeContext = createContext<boolean>(false);
export const ThemeUpdateContext = createContext<(() => void) | undefined>(undefined);

// Custom hook to access theme
export function useTheme() {
  return useContext(ThemeContext);
}

// Custom hook to access theme update function
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
