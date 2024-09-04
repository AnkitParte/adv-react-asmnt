import { useEffect, useState } from "react"
import { useContext } from "react"
import { createContext } from "react"

const ThemeContext = createContext()
export const useTheme = () => {
  return useContext(ThemeContext)
}
export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme((p) => !p)
  }

  let isDark = theme ? "light" : "dark"

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark)
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
