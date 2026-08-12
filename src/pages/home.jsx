import Hero from "../components/hero"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
function Homepage(){
    let {show}=useContext(ThemeContext)

    return(
        <main id="home-main">
            <Hero></Hero>
            {!show && 
            <>
                <div className="content-box">
                    <h1>THE CHRONICLES OF A FORGOTTEN WORLD</h1>
                    <p>
                        Some memories are not forgotten. They are merely buried.
                        In the year 2026, two wanderers awoke in an unfamiliar land.
                        They knew neither the place nor the path that had brought them there. 
                        Yet, as they travelled beyond the lands surrounding their awakening, 
                        something within them drew them onward.
                        <br/>
                        <br/>
                        They found a place that felt strangely familiar.
                        A village upon the plains. A land surrounded by water. 
                        A place upon which they would build their home.They could not 
                        explain why they had chosen it.They did not know that they 
                        had been there before.
                        <br/>
                        <br/>
                        Four years earlier, another world had existed. A world long 
                        since lost, erased when its realm was abandoned and forgotten. 
                        In that world, two cousins had travelled far from their point 
                        of awakening and established their home beside a village, 
                        much as they would do again years later.
                        The similarities were too numerous to be mere coincidence.
                        The land had changed, yet the memory remained.
                        <br/>
                        <br/>
                        And so began the second chapter of a story that neither of them 
                        remembered living.This is the Chronicle of that world.
                    </p>
                </div>
                <div className="content-box">
                    <h1>The Memory Within</h1>
                    <p>
                        There are things the mind forgets which the soul does not.
                        The two wanderers believed they had begun their journey in 
                        the year 2026. They remembered nothing before their awakening. 
                        No kingdom. No home. No history. Yet their actions seemed guided 
                        by something older than memory.
                        <br/>
                        <br/>
                        They travelled to distant lands without knowing why. 
                        They settled beside a village. They rebuilt after death. 
                        They endured loss without surrendering to it. Again and again, 
                        they found themselves walking the same paths their predecessors 
                        had once walked. Perhaps the world itself was calling them. Or 
                        perhaps the memories of another life had survived within them, 
                        buried beneath years of silence. The truth remains hidden 
                        within the chronicles.
                    </p>
                </div>
                <div className="content-box">
                    <h1>Two Worlds — One Memory</h1>
                    <p>
                        Four years separated the two worlds. The first was eventually 
                        abandoned, and with the passing of time its realm was lost. Its 
                        villages, constructions, journeys, deaths, and triumphs remained 
                        only in memory. Then came 2026. A new world was born, 
                        yet history appeared to repeat itself.
                        <br/>
                        <br/>
                        Once again, two cousins travelled far from their place of awakening. 
                        Once again, they found a village surrounded by familiar landscapes. 
                        Once again, they established their home.
                        Even their earliest struggle repeated itself.
                        They fell after gaining their first iron equipment and were 
                        forced to begin again. Yet, as before, they refused to remain 
                        weak. Through labour and perseverance, they rebuilt what had been lost. 
                        What appeared to be coincidence was perhaps something far older.
                        The world was new. The memory was not.
                    </p>
                </div>
                <div className="content-box">
                    <h1>The Two Wanderers</h1>
                    <p>
                        The chronicles of this realm begin with two wanderers: Basim and Taha.
                        They awakened in a world unknown to them, carrying no memory of the 
                        life that had come before. Yet an inexplicable familiarity guided their 
                        steps toward distant lands, where they would establish the foundations 
                        of their new home. Together, they would transform 
                        wilderness into civilization.
                        <br/>
                        <br/>
                        Basim, the Builder and the Guide, shaped the realm with his hands 
                        and led their journeys through lands both known and unknown.
                        From the roads and bridges of their homeland to the perilous 
                        depths of the Nether, his work gave form to their growing kingdom.
                        <br/>
                        <br/>
                        Taha, the Adventurer and the Engineer, brought prosperity through 
                        his ingenuity and answered every challenge with courage. His machines 
                        and farms sustained the realm, while his sword carried him to distant 
                        adventures—including the battle against the Dragon of the End.
                        <br/>
                        <br/>
                        Neither could have built the realm alone. One gave it its form.
                        The other gave it its strength. Together, they began a new chapter 
                        in a story that may have started long before either of them remembers.
                    </p>
                </div>
                <div className="content-box">
                    <h1>The Chronicle Continues</h1>
                    <p>
                        The story has only begun. The two wanderers have awakened, 
                        but they do not yet understand why. The world around them is 
                        young, yet beneath its soil lie the foundations of something 
                        ancient. Every journey may awaken another memory. Every familiar 
                        place may reveal another fragment of the life they once lived.
                        Whether the past will repeat itself, or whether the two wanderers 
                        will forge a history entirely their own, remains unwritten.
                        The next chapter awaits.
                    </p>
                </div>
            </>}
        </main>
    )
}
export default Homepage