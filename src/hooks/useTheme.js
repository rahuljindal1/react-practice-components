import { useState } from "react";

export default function useTheme() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  const setTheme = (theme = "light") => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return { theme: currentTheme, setTheme };
}
