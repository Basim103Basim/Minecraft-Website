import info from "../data/info"
import { useParams } from "react-router-dom"
function Infobar(){
    let {infoId}=useParams()
    let obj=info.find(object=>object.id==infoId)
    return(
        <section id="infobar">
            <img src={obj.photo}/>
            <h3>{obj.name}</h3>
            <p><b>Made by:</b> {obj.maker}</p>
            <p><b>Location: </b> {obj.location}</p>
            <p><b>Used for: </b>{obj.used}</p>
            <p><b>Dwellers: </b>{obj.inside}</p>
        </section>
    )
}
export default Infobar