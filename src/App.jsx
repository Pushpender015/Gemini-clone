import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { ThemeProvider } from './Context/Theme'
import { useState , useEffect} from 'react'

const App = () => {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => setThemeMode("light")

  const darkTheme = () => setThemeMode("dark")

  // actual change in theme
    useEffect(() => {
      // jese hi dependency change hogi vase hi rmove all classes
      document.querySelector('html').classList.remove("light" , "dark")
      // but whatever state is currently now you will update themeMode
      document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
      <Sidebar />
      <Main />
    </ThemeProvider>
  )
}

export default App 