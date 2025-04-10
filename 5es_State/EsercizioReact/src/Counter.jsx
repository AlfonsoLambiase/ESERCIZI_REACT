import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import "./Counter.css"

const Counter = ({start=0}) => {           
  const [count, setCount] = useState(start);     // USESTATE RESTITUISCE UN ARRAY CON LO STATO E LA FUNZIONE PER MODIFICARLO E INFINE IL VALORE DELLO STATO 

  const incremento = () => {       // CREAMO LA CONST. CHE GRAZIE ALLA FUNZIONE APPOSITA DI USESTATE AUMENTA LO STATO DI 1
    setCount(count + 1);        
  };

  const decremento = () => {      // CREAMO LA CONST. CHE GRAZIE ALLA FUNZIONE APPOSITA DI USESTATE DECREMENTA LO STATO DI 1
    setCount(count - 1);
  };

  const resetta = () => {         // CREAMO LA CONST. CHE GRAZIE ALLA FUNZIONE APPOSITA TORNA IL VALORE DELLO STATO INIZIALE
    setCount(start);
  };

  return (
    <>
      <CounterDisplay count={count}/>      {/* PASSIAMO AL COMPONENTE IMPORTATO LA CHIAVE E IL VALORE DELLO STATO */}

      <button className="btn" onClick={incremento}>Aumenta Qui</button>    
      <button className="btn" onClick={decremento}>Diminuisci Qui</button>    {/* ALL'EVENTO PASSIAMO LA CONST/FUNZIONE CREATA */}
      <button className="btn" onClick={resetta}>Resetta Qui</button>
    </>
   
  )
};

export default Counter;
