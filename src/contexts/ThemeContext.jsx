const { useContext, createContext, useState, useEffect } = require("react");
const { THEMES } = require("../constants/theme");



const ThemeContext = createContext(null);

const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=> localStorage.getItem('theme')  || THEMES.LIGHT);
  const toggleTheme = () => {
    setTheme(prevState => prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  }
  useEffect(()=>{
    localStorage.setItem('theme', theme);
  },[theme])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export { ThemeContext, ThemeProvider, useThemeContext }