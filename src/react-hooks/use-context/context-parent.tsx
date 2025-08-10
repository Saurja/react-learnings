import { UseContextHook } from "./use-context";
import { ThemeProvider } from "./theme-context";

export const CreateContextHook = () => {
  return (
    <>
      <h3>Create Context Example</h3>

      <ThemeProvider>
        <UseContextHook></UseContextHook>
      </ThemeProvider>
    </>
  );
};
