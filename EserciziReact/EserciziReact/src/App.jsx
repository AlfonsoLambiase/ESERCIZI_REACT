import Hello from "./Hello";

function App(){
    return(
        <div>
            <Hello/>
        </div>
    )
}

export default App;

/*

Puoi usare il componente Hello più di una volta nel componente App? 
- SI IL COMPONENTE HELLO PUO' ESSERE UTILIZZATO TUTTE LE VOLTE IN CUI ABBIAMO BISOGNO. 


Cosa succede se lo fai? 
- VERRANNO CREATE ISTANZE SEPARATE DEL COMPONENTE `HELLO` CON IL LORO RISPETTIVO CONTENUTO.

Puoi eseguire il rendering del componente Messaggio direttamente all'interno del componente App?
- SI POTREBBE FARE, BASTERA' IMPORTARE IL COMPONTE IN `APP.JSX`.


Cosa succede se lo fai?
- MANDERA' A SCHERMO IL COMPONENTE SENZA PASSARE PRIMA DAL COMPONENTE `HELLO`.

*/

