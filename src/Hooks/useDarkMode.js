import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage("modePreference", initialValue)

  return [darkMode, setDarkMode]
}