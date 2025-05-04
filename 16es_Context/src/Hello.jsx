/*
-Crea un componente funzione Hello che esegua il messaggio "Hello, World!" all'interno di un h2.
-Crea un LanguageContext e inserisci il componente Hello nel suo provider. 
-Aggiungi un tag select al componente in cui viene eseguito il rendering del componente Hello,
che consenta all'utente di selezionare la lingua, e passalo come valore al provider.
-Utilizza LanguageContext all'interno del componente Hello tramite il gancio useContext 
e mostra il messaggio "Hello, World!" nella lingua corretta
*/

const Hello = ({ lingua }) => {
  return <h2>{lingua === "it" ? "Ciao" : lingua === "en" ? "Hello" : "Salut"}</h2>;
};

export default Hello;


