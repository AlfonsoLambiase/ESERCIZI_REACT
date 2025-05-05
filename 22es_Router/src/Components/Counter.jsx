import { useState } from "react";


const Counter = ()=>{
   
    const[count, setCount]= useState(0);

    const Incremento = ()=>{
        setCount((c) => c + 1)
    };
    
    const Decremento = ()=>{
        setCount((c) => c - 1)
    };

    const Reset = ()=>{
        setCount(0)
    }

    return(
    <>
     <p>{count}</p>
     <button onClick={Incremento}>Incremento</button>
     <button onClick={Decremento}>Decremento</button>
     <button onClick={Reset}>Reset</button>
    </>
    )
};

export default Counter;