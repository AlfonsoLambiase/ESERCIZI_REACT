/*
Crea un componente TodoList che esegua il rendering di un ul tag con un li tag per ogni elemento contenuto nella variabile di stato "todos". 
La variabile di stato "todos" deve essere un array di stringhe.
Il componente TodoList deve inoltre contenere un input tag e un pulsante. 
Quando si clicca sul pulsante, il gestore eventi deve aggiungere il valore del tag di input all'array "todos".
Cancella l'input ogni volta che un oggetto Todo viene aggiunto all'array todos.
Aggiungere un pulsante "reset" che, se cliccato, cancella l'array delle cose da fare.
Aggiungi un pulsante "rimuovi" a ogni tag li. 
Quando cliccato, il gestore eventi dovrebbe rimuovere l'elemento corrispondente dall'array "todos".
*/

import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const Add = () => {
    setTodos([...todos, input]);
    if(input !== ""){ setInput("")};
  };

  const remove = (position) => {
    setTodos(todos.filter((value,index)=> index !== position ? value : null));
  };

  const reset = ()=>{
    setTodos([])
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <ul>
        {todos.map((value, index) => (
        <li key={index}><button onClick={()=>{remove(index)}}>Remove</button>{value}</li>
        ))}
      </ul>
      <input
        type="text"
        name="input"
        value={input}
        placeholder="Scrivi Qualcosa"
        onChange={handleChange}
      />
      <button onClick={Add}>Aggiungi</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default ToDoList;
