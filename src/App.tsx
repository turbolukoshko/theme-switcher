import ReactSwitch from "react-switch";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from "./utils/localStorage";
import "./App.css";

interface IThemeContent {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContent = createContext<IThemeContent | null>(null);

function App() {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = getValueFromLocalStorage("theme");
    return storedTheme ?? "light";
  });

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    setValueToLocalStorage("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContent.Provider value={{ theme, setTheme }}>
      <main className="main" id={theme}>
        <h1>Hi, I'm cat!</h1>
        <img src="../src/assets/cat.png" />
        <p>Сhange the theme of the site with me</p>
        <ReactSwitch checked={theme === "dark"} onChange={toggleTheme} />
      </main>
    </ThemeContent.Provider>
  );
}

export default App;
