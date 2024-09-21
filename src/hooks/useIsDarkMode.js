import { useEffect, useState } from "react";

export default function useIsDarkMode(config) {
  const [isDarkMode, setIsDarkMode] = useState(config.default);

  useEffect(() => {
    const onDarkModeChange = event => {
      setIsDarkMode(event.matches);
    };
    let isDarkMode =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQueryList.addEventListener("change", onDarkModeChange);
    setIsDarkMode(isDarkMode);
    return () => {
      mediaQueryList.removeEventListener("change", onDarkModeChange);
    };
  }, []);

  return isDarkMode;
}
