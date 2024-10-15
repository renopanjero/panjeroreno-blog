// hooks/useTheme.ts
import { useState, useEffect } from "react";

const useTheme = () => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  // Fungsi untuk toggle tema
  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  // Menyimpan tema ke localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsLightTheme(false);
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightTheme]);

  return { isLightTheme, toggleTheme };
};

export default useTheme;
