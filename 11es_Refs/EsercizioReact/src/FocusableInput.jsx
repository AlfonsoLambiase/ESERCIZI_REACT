import { useEffect, useRef } from "react";
import { BoltIcon } from "@heroicons/react/24/solid";

const FocusableInput = () => {
  const inputRef = useRef();  // FA RIFERIMENTO ALL'INPUT NEL TEMPLATE HTML
  useEffect(() => {
    inputRef.current.focus();  // FOCUS RENDE POSSIBILE LA SCRITTURA NELL'INPUT SENZA CLICCARCI DENTRO
  }, []);  // [] INDICANO LO STATO MOUNT DEL COMPONENTE

  return (
    <div>
      <BoltIcon className="w-10"/>
      <input type="text" ref={inputRef} placeholder="Scrivi qui..." style={{ margin: "30px" }}/>
    </div>
  );
};

export default FocusableInput;
