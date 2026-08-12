import { NavLink } from "react-router-dom"
function Lorepage(){
    return(
        <main id="lore-main">
            <NavLink to="/lore/awakening">
                <div className="lore-box">
                    <h1>The Awankening</h1>
                    <p>The first chapter of a history repeated.</p>
                </div>
            </NavLink>
            <NavLink to="/lore/rise">
                <div className="lore-box">
                    <h1>The Rise of the Island</h1>
                    <p>From a humble camp, the foundations of a kingdom were laid.</p>
                </div>
            </NavLink>
        </main>
    )
}
export default Lorepage