import { useState } from "react";


const FunctionalState = () => {
    let [sampleContent, changeElement] = useState("Hello World");
    let [color, changeColor] = useState("red");

    function changeSomething(){
        changeElement("WOW nabago na!");
        color == "red" ? changeColor("yellow") : changeColor("red");
    }

    return ( 
        <>
            <h1 style={{background: color}}>{sampleContent}</h1>
            <button onClick={() => changeSomething()}>change Sample Element</button>
        </>
     );
}
 
export default FunctionalState;