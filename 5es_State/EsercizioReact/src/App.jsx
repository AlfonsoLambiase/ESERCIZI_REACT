import Counter from "./Counter";

const App = () => {
  return(
    <>
    <Counter start={0}/>   {/* DEFINIAMO IL VALORE DI START */}
    </>
  )
}

export default App;



/*
Quando si chiama la funzione "setter" per incrementare il contatore, il parametro dovrebbe essere una funzione
o un valore immediato? Perché?

-USARE UNA FUNZIONE COME PARAMETRO E' IL METODO MGLIORE PER L'AGGIORNAMENTO.
USARE UN VALORE IMMEDIATO PUO' CAUSARE PROBLEMI SE CI SONO PIU' AGGIORNAMENTI SIMULTANEI O SE VIENE FATTO IN MODO ASINCRONO.
*/