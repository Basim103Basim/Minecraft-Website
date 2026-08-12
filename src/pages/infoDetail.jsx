import Infobar from "../components/infobar";
import info from "../data/info";
import { useParams } from "react-router-dom";
function InfoDetail(){
    let {infoId}=useParams()
    let obj=info.find(object=>object.id==infoId)
    return(
        <>
        <Infobar></Infobar>
        <main id="infoDetail-main">
            <div id="infoDetail-div">
                <h1>{obj.name}</h1>
                <p>
                    {
                        obj.paragraphs.map(
                            (content)=>(
                                <span>
                                    {content}
                                    <br/>
                                    <br/>
                                </span>
                            )
                        )
                    }
                </p>
            </div>
        </main>
        </>
    )

}
export default InfoDetail