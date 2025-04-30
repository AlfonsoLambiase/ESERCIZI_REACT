import { useState } from "react";

export const useCounter = () => {
  const [contatore, setContatore] = useState(0);

  const Incremento = () => {
    setContatore((c) => c + 1);
  };

  const Decremento = () => {
    setContatore((c) => c - 1);
  };

  const Reset = () => {
    setContatore(0);
  };

  return { contatore, Incremento, Decremento, Reset };
};
