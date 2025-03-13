import { useState } from "#app"

export const useTheme = () => {
  const theme = useState<string>("theme", () => "light")

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light"
    document.documentElement.classList.toggle("dark", theme.value === "dark")
  }

  return { theme, toggleTheme }
}