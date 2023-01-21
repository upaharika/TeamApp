import { useState } from "react";

import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: setTheme }}>
      <div
        className="App"
        theme-change={theme === "light" ? "light" : "dark"}
      >
        <Header />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
