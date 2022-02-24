import React,{useEffect, useState} from 'react';
// Import our custom hook.
import { useTheme } from '../utils/ThemeContext';
// import '../../src/assets/css/style.css'

// Make our ThemeComponent the default export from this file
 const ThemeComponent =() => {
  // Pluck values from our ThemeContext by invoking our useTheme hook
  const { darkTheme, toggleTheme } = useTheme();
  const {theme,setTheme} = useState('')

  // Object containing CSS gradient for darkTheme and non-darkTheme

  useEffect(() => {
    switch (darkTheme) {
     
      case true:
     document.getElementById('button').innerHTML='Light theme'
    document.body.style.background='#344f56'
        break;
      case false:
      default:
        document.getElementById('button').innerHTML='Dark theme'
     
        document.body.style.background='#d7cb7663'
      
        break;
    }
  }, [darkTheme,theme]);
  return (
    <>
     
      <button id="button" style={{margin:'-69px'}} onClick={toggleTheme} className="btn" type="button">
        
      </button>
     
    
    </>
  );
}
export default ThemeComponent;