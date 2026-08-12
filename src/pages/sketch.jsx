import {Link} from "react-router-dom"
function Sketchpage(){
    return(
        <main id="sketch-main">
            <Link to="/sketch/basim">
                <div className="charachter-box" id="basim-box">
                    <h1>Basim</h1>
                </div>
            </Link>
            <Link to="/sketch/taha">
                <div className="charachter-box" id="taha-box">
                    <h1>Taha</h1>
                </div>
            </Link>
        </main>
    )
}
export default Sketchpage