import React,{useState,useContext}  from 'react';
export const ThemeContext = React.createContext();
export const useTheme =()=> useContext(ThemeContext);

export default function ThemeProvider({children}){
    const [darkTheme,setDarkTheme] = useState(true);

    const toggleTheme = ()=>{
       // console.log('inside')
return setDarkTheme((prev) =>!prev)
    };
    return (
        <ThemeContext.Provider value={{darkTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
       
    )

}
