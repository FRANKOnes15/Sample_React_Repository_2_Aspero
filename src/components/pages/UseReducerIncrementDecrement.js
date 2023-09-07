import { useReducer } from "react";

let counterReducer = (state, action) => {

    switch (action.type) {
        case "increment":
           
            return {num: state.num + action.points}

            break;
        
        case "decrement":
            

            return {num: state.num - action.points}

            break; 

    }

}

const UseReducerIncrementDecrement = () => {

    const [count, dispatch] = useReducer(counterReducer, {num: 0});
    return ( 
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body text-center">
                        <h1>{count.num}</h1>
                        <button className="btn btn-primary" onClick={() => dispatch({type: "increment", points:5})}>+5</button>
                        <button className="btn btn-primary" onClick={() => dispatch({type: "increment", points:1})}>+1</button>
                        <button className="btn btn-primary" onClick={() => dispatch({type: "decrement", points:1})}>-1</button>
                        <button className="btn btn-primary" onClick={() => dispatch({type: "decrement", points:5})}>-5</button>
                    </div>
                </div>
            </div>
            <h1>Hello world</h1>
        </>
     );
}
 
export default UseReducerIncrementDecrement;