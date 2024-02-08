import { useState } from "react";
import Stages from "./Stages.js";
import Data from "./Data.js";
import Buttons from "./Buttons.js";


export default function DifferentStages(){

    const [level, setLevel] = useState(1)
 

return(
    <div style={{height: '100vh', backgroundColor: "black"}}>
    <div style={differentStagesCSS}>
       <Stages level={level}/> 
       <Data level={level}/>
       <Buttons setLevel={setLevel} level={level}/>
    </div>
    </div>

)

}

const differentStagesCSS = { height: "80vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}