import "./App.css"
import Navbar from "./components/Navbar"
import { useTheme } from "./ThemeProvider"

function App() {
  let { theme, toggleTheme } = useTheme()
  return (
    <>
      <button onClick={toggleTheme}>
        click for {theme ? "Dark" : "Light"}
      </button>
      <Navbar />
    </>
  )
}

export default App
