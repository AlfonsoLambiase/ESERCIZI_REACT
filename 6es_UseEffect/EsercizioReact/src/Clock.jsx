import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());    // CREO LO STATO DEL COMPONENTE `CLOCK`

  useEffect(() => {   
    const IntervalId = setInterval(() => {      // AD OGNI INTERVALLO DI UN SECONDO METTE IN PAGINA L'ORA IN TEMPO REALE
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(IntervalId);      // FERMA L'INTERVALLO
    };
  }, []);    // LA DIPENDENZA SARA' VUOTA PERCHE' IN STATO DI MOUNT (MONTAGGIO)

  return <h2>{time}</h2>;     // RICHIAMA `TIME` AGGIORNATO
};

export default Clock;
