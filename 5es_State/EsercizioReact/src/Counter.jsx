import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import "./Counter.css"

let Counter = (props) => {           
  const [Count, setCount] = useState(props.start);     // USESTATE RESTITUISCE UN ARRAY CON LO STATO E LA FUNZIONE PER MODIFICARLO E INFINE IL VALORE DELLO STATO 

  const Incremento = () => {       // CREAMO LA CONST. CHE GRAZIE ALLA FUNZIONE APPOSITA DI USESTATE AUMENTA LO STATO DI 1
    setCount(Count + 1);        
  };

  const Decremento = () => {      // CREAMO LA CONST. CHE GRAZIE ALLA FUNZIONE APPOSITA DI USESTATE DECREMENTA LO STATO DI 1
    setCount(Count - 1);
  };

  const Resetta = () => {         // CREAMO LA CONST. CHE GRAZIE ALLA FUNZIONE APPOSITA TORNA IL VALORE DELLO STATO INIZIALE
    setCount(props.start);
  };

  return (
    <>
      <CounterDisplay Count={Count}/>      {/* PASSIAMO AL COMPONENTE IMPORTATO LA CHIAVE E IL VALORE DELLO STATO */}

      <button className="btn" onClick={Incremento}>Aumenta Qui</button>    
      <button className="btn" onClick={Decremento}>Diminuisci Qui</button>    {/* ALL'EVENTO PASSIAMO LA CONST/FUNZIONE CREATA */}
      <button className="btn" onClick={Resetta}>Resetta Qui</button>
    </>
   
  )
};

export default Counter;
