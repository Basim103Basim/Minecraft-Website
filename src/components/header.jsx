import { useLocation } from "react-router-dom"
function Header(){
    const location=useLocation()
    return(
        <header key={location.pathname}>
            <h1>The Minecraft Lore of Basim & Taha</h1>
            <p>A living archive of adventures, civilizations, and forgotten tales.</p>
        </header>
    )
}
export default Header