/*
Crea un componente FocusableInput che esegua il rendering di un tag di input.
Non appena il componente esegue il rendering, il tag di input dovrebbe essere automaticamente focalizzato.
Utilizzando StrictMode, crea un componente con un effetto che visualizza un messaggio solo quando
il componente viene montato per la prima volta. Utilizza un riferimento per tenere traccia se il componente è montato o meno.
*/


import { useEffect, useRef } from "react";
import { BoltIcon } from "@heroicons/react/24/solid";

const FocusableInput = () => {
  const inputRef = useRef();                                   // FA RIFERIMENTO ALL'INPUT NEL TEMPLATE HTML
  useEffect(() => {
    inputRef.current.focus();                                  // FOCUS RENDE POSSIBILE LA SCRITTURA NELL'INPUT SENZA CLICCARCI DENTRO
  }, []);                                                      // [] INDICANO LO STATO MOUNT DEL COMPONENTE

  return (
    <div>
      <BoltIcon className="w-10"/>
      <input type="text" ref={inputRef} placeholder="Scrivi qui..." style={{ margin: "30px" }}/>
    </div>
  );
};

export default FocusableInput;
