import { useParams } from "react-router-dom"
import characters from "../data/charachters"
function SketchDetail(){
    const {charId}=useParams()
    let character=characters.find(character=>character.id==charId)
    return(
        <main className="background-main">
            <div className="charachter-div">
                <h1>{character.title}</h1>
                <p>
                    {
                        character.paragraphs.map(paragraph=>(
                            <span>
                                {paragraph}
                                <br/>
                                <br/>
                            </span>
                        ))
                    }
                </p>
            </div>
        </main>
    )
}
export default SketchDetail