import { createContext } from "react";

const ThemeContext = createContext({
    theme: "default",
    updateTheme: () => { },
});

export default ThemeContext;