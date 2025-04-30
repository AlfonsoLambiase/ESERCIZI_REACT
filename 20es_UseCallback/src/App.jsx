/*
-Crea un hook personalizzato useCounter che tenga traccia dello stato di un contatore 
e ne restituisca il valore corrente, oltre a tre funzioni per incrementare, decrementare 
e azzerare il contatore. 
-Utilizza useCallback per memorizzare le funzioni utilizzate per incrementare, decrementare 
e azzerare il contatore.
-Crea un componente FilteredList che riceva un elenco di oggetti, ciascuno contenente un nome, 
un ID e una proprietà "età". 
-Il componente FilteredList deve visualizzare solo gli elementi dell'elenco la cui età è maggiore 
di 18 anni e il filtraggio deve essere eseguito solo quando l'elenco cambia. 
-Utilizza useMemo per memorizzare l'elenco filtrato.
*/

import "./App.css";
import FilteredList from "./FilteredList";
import { useCounter } from "./Hooks/useCounter";

function App() {
  const {conteggio, Incrementa, Decrementa, Reset} = useCounter();

  return (
    <>
      <FilteredList />
      <p>{conteggio}</p>
      <button onClick={Incrementa}>+</button>
      <button onClick={Decrementa}>-</button>
      <button onClick={Reset}>/</button>
    </>
  );
}

export default App;
