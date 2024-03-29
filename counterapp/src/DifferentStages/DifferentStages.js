import { useState } from "react";
import Stages from "./Stages.js";
import Data from "./Data.js";
import Buttons from "./Buttons.js";


export default function DifferentStages(){

    const [level, setLevel] = useState(1)
    const [garam, setGaram] = useState(false)


    function darkho(){
        setGaram(true)
    }

    function lightho(){
        setGaram(false)
    }


 

return (
    <div style={{height: '100vh', backgroundColor: garam ? "white" : "black"}}>
        <div style={{justifyItems: "center", margin: "auto" }   }>
        <button onClick={darkho}>Light</button>
        <button onClick={lightho}>Dark</button>
        </div>

            <div style={differentStagesCSS}>
                <Stages level={level} /> 
                <Data level={level} />
                <Buttons setLevel={setLevel} level={level}/>
            </div>
    </div>

)

}

const differentStagesCSS = { height: "80vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}