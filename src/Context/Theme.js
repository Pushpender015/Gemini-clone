// JUST ANOTHER WAY OF *REPRESENTATION OF CONTEXT*

import { createContext , useContext } from "react"; 

export const ThemeContext = createContext({
    // just give default value
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// directly export from here
export const ThemeProvider = ThemeContext.Provider

// create custom hook for theme and export from here
export default function useTheme() {
    return useContext(ThemeContext);
}