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
            <NavLink to="/lore/the-fall-of-the-dragon">
                <div className="lore-box">
                    <h1>The Fall of the Dragon</h1>
                    <p>The dragon fell, and the three realms opened before them.</p>
                </div>
            </NavLink>
            <NavLink to="/lore/the-withers-creation">
                <div className="lore-box">
                    <h1>The Wither's Creation</h1>
                    <p>A forbidden creation born from the remnants of the Nether.</p>
                </div>
            </NavLink>
            <NavLink to="/lore/the-expansion">
                <div className="lore-box">
                    <h1>The Expansion</h1>
                    <p>With the great evils fallen, the two turned their eyes toward the wider world.</p>
                </div>
            </NavLink>
        </main>
    )
}
export default Lorepage