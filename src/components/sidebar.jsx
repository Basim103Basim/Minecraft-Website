import { NavLink } from "react-router-dom"
function Sidebar(){
    return(
        <section id="Sidebar">
            <NavLink to="/" end className={({isActive})=>isActive?"active":""}>Home</NavLink>
            <NavLink to="/sketch" className={({isActive})=>isActive?"active":""}>Sketches</NavLink>
            <NavLink to="/lore" className={({isActive})=>isActive?"active":""}>Lores</NavLink>
            <NavLink to="/info" className={({isActive})=>isActive?"active":""}>Info</NavLink>
        </section>
    )
}
export default Sidebar