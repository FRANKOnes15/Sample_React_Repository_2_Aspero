
import { useState,useRef } from "react";


const StopWatch = () => {
    const [count, setCount] = useState(0);
    const timerID = useRef();
    
    const startTime =() => {
        switch (timerID.current){
        case undefined:
        
        timerID.current= setInterval(
            () => {
                setCount(num => num + 1);
            }
            ,
            1000
        )
        break;
    }
}
    const stopTime = () => {
        clearInterval(timerID.current);
        timerID.current = undefined;
    }
    const resetTime = () => {
        setCount(0);
        stopTime();

    }
    
    return ( 
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body text-container">
                        <h1>{count}</h1>
                        <button className="btn btn-primary" onClick={startTime}>Start</button>
                        <button className="btn btn-warning" onClick={stopTime}>Stop</button>
                        <button className="btn btn-danger"  onClick={resetTime}>Reset</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default StopWatch;