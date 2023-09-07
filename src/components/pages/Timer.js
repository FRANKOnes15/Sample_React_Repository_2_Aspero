import { useEffect, useState } from "react";


const Timer = () => {
    const [count, setCount] = useState(0);
    // useEffect(
    //     () =>
    //     {
    //         setTimeout( 
    //             () => {
    //                 setCount((count) => count + 1)
    //         }
    //         ,1000
                
    //         )
    //        // setCount ((count) => count + 1); 
    //     }
    // );
    
    const [letter, setLetter] = useState();
    const [letter2, setLetter2] = useState();
    useEffect(
        () =>
        {
            setTimeout( 
                () => {
                    setCount((count) => count + 1)
            }
            ,1000
                
            )}
           // setCount ((count) => count + 1); 
        ,
        [letter]
    );
    return ( 
            
            <>
                <div className="container text-center">
                    <div className="card">
                        <div className="card-body">
                            <h1>{count}</h1>
                            typing counter
                            {/* <h1>{count2}</h1> */}
                            <br></br>
                            <input type="text" value={letter} onChange={(e) => setLetter(e.target.value)} />
                            <input type="text" value={letter2} onChange={(e) => setLetter2  (e.target.value)} />
                        </div>
                    </div>
                </div>
            </> 
    );
}
 
export default Timer;