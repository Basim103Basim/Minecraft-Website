import { useParams } from "react-router-dom";
import lores from "../data/lores";

function LoreDetail(){
    const { loreId } = useParams();

    const lore = lores.find(lore => lore.id === loreId);

    return(
        <main className="loreDetail-main">
            <div className="lore-div">

                <h1>{lore.title}</h1>

                <p>
                    {lore.paragraphs.map((paragraph) => (
                        <span>
                            {paragraph}
                            <br/>
                            <br/>
                        </span>
                    ))}
                </p>

            </div>
        </main>
    )
}

export default LoreDetail;