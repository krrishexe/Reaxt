import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    // default values in this object
    Mode: 'light',
    darkMode: ()=>{},
})

export const ThemeContextProvider = ThemeContext.Provider

//creating our own hook
const useTheme = function(){
    return useContext(ThemeContext)
}

export default useTheme