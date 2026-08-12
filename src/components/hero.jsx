import { useContext } from "react"
import {ThemeContext} from "../ThemeContext"
function Hero(){
    let {show,display}=useContext(ThemeContext)
    return(
        <>
        {show &&
            <div id="hero-section">
                <h1>The Chronicles of Basim & Taha</h1>
                <p>The complete history of a world forged through exploration, war, and endless creation.</p>
                <button onClick={display}>Begin the Chronicle</button>
            </div>
        }
        </>
    )
}
export default Hero