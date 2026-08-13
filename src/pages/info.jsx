import { NavLink } from "react-router-dom"
function Infopage(){
    return(
        <main id="info-main">
            <NavLink to="/info/iron-farm">
                <div className="info-box">
                    <h1>Iron Farm</h1>
                    <p>Economy's Backbone</p>
                </div>
            </NavLink>
            <NavLink to="/info/castle">
                <div className="info-box">
                    <h1>The Castle of Basim & Taha</h1>
                    <p>Residence of Founders</p>
                </div>
            </NavLink>
        </main>
    )
}
export default Infopage