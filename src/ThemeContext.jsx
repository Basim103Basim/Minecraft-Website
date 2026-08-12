import { createContext,useState } from "react";
export const ThemeContext=createContext()
function ThemeProvider({children}){
    const [show,setShow]=useState(true)
    function display(){
        if(show){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
    return(
        <ThemeContext.Provider value={{show,display}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider