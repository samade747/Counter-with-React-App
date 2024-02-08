import { useState } from "react";
import Stages from "./Stages.js";
import Data from "./Data.js";
import Buttons from "./Buttons.js";


export default function DifferentStages(){

    const [level, setLevel] = useState(1)
    const [theme, setTheme] = useState(false)


    function darkho(){
        setTheme(true)
    }

    function lightho(){
        setTheme(false)
    }


 

return(
    <div style={{height: '100vh', backgroundColor: theme ? "White" : "Black"}}>
        <Buttons onClick={darkho}>Dark</Buttons>
        <Buttons onClick={lightho}>Light</Buttons>

            <div style={differentStagesCSS}>
                <Stages level={level}/> 
                <Data level={level}/>
                <Buttons setLevel={setLevel} level={level}/>
            </div>
    </div>

)

}

const differentStagesCSS = { height: "80vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}