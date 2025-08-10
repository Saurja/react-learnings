import { useTheme, useThemeUpdate } from "./theme-context-values";

export const UseContextHook = () => {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Theme</div>
    </>
  );
};
