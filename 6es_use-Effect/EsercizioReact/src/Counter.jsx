import { useEffect, useState } from "react";

const Counter = ({start=0}) => {
    const [count, setCount] = useState(start);

    const aggiungi = () => {
        setCount(count + 1)
    }

    useEffect(()=>{
     console.log(count)
    },[count]);

    return(
        <>
        <button onClick={aggiungi}>AGGIUNGI</button>
        <h2>{count}</h2>
        </>
    )
}

export default Counter;