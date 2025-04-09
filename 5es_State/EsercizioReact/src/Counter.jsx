import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

let Counter = (props) => {      
  const [Count, setCount] = useState(props.start);

  const Incremento = () => {             // 
    setCount(Count + 1);
  };

  const Decremento = () => {
    setCount(Count - 1);
  };

  const Resetta = () => {
    setCount(props.start);
  };

  return (
    <>
      <CounterDisplay Count={Count}/>
      <button onClick={Incremento}>Aumenta Qui</button>
      <button onClick={Decremento}>Diminuisci Qui</button>
      <button onClick={Resetta}>Resetta Qui</button>
    </>
   
  )
};

export default Counter;
