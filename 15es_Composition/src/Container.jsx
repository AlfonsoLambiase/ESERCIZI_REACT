/*
-Crea un componente Container  che esegua il rendering dei suoi elementi figlio all'interno di un div.
-Usate un div con uno sfondo bianco e un bordo rosso.
-Aggiungere un title prop che conterrà il valore del titolo da visualizzare prima degli 
elementi figlio.
-Rendi comprimibile il contenitore, in modo che quando si clicca sul titolo gli elementi 
secondari vengano nascosti o nuovamente mostrati.
-Utilizzare il useState per tenere traccia dello stato compresso.
*/

import { useState } from "react";

const Container = ({ children, title }) => {
  const [visibile, setVisibile] = useState(false);

  const handleClick = () => {
    setVisibile(!visibile);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid red",
        width: "fit-content",
      }}>
      <h1 onClick={handleClick}>{title}</h1>
      {visibile && children}
    </div>
  );
};

export default Container;
