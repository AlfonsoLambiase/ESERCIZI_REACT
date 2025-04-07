import Age from "./Age";
import Messaggio from "./Messaggio";

function Welcome({ name="Jhon", age }) {   // PASSA UN VALORE PREDEFINITO A `NAME` E UN VALORE NON PREDEFINTO A `AGE`
  return (
    <>
      <p>Benvenuto, {name}!</p>  {/* PASSO LA PROPS NAME CHE E' STATA PREDEFINITO */}

      {/* && STA PER "ALLORA MANDA  A SCHERMO" */}

      {age > 18 && <Age age={age}/>}   {/* SE AGE RISPETTA LE CONDIZIONI, MOSTRA  IL COMPONENTE `AGE`, CON LA PROPS DEFINITA */}
      {age  && <Age age={age}/>}       {/* SE AGE E' UN VALORE TRUTHY VERRA' MANDATO A SCHERMO */}
      {age > 18 && age < 65 && <Age age={age}/>}   {/* AGE VIENE MOSTRATO SOLO SE L'ETA' E' COMPRESA TRA I 18 E I 65 ANNI */}
      {name === "Jhon" && age > 18 && <Messaggio age={age}/>}   {/* AGE VIENE MOSTRATO SOLO SE L'ETA' E' MAGGIORE DI 18 E IL NOME E' UGUALE A `JHON` */} 

      <Messaggio />  {/* PASSA IL COMPONENTE `MESSAGGIO` */}
    </>
  );
}

export default Welcome;
