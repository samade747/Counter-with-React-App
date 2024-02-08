import { useState } from "react";
import Stages from "./Stages.js";
import Data from "./Data.js";
import Buttons from "./Buttons.js";


export default function DifferentStages(){

    const [level, setLevel] = useState(0)
 

return(
    <div>
       <Stages /> 
       <Data />
       <Buttons setLevel={setLevel} />
    </div>
)


}