/*
Estendere l'applicazione di chat creata negli esercizi precedenti per consentire all'utente 
di inviare nuovi messaggi. 
L'obiettivo è aggiungere un campo di input e un pulsante "Invia" che consentano all'utente 
di digitare un nuovo messaggio e aggiungerlo alla chat al momento dell'invio.

Requisiti:

-Quando l'utente clicca su "Invia" o preme il tasto "Invio", il nuovo messaggio viene 
aggiunto alla serie di messaggi esistenti.

-L'invio di un nuovo messaggio dovrebbe essere impedito se il campo di input è vuoto o 
contiene solo spazi.

-Dopo aver inviato il messaggio, il campo di input dovrebbe essere cancellato.

-Dopo aver inviato il messaggio, assicurati che la finestra della chat scorra automaticamente 
fino in fondo.
*/


import Chat from "./Chat";


const App = () => {
    return(
        <Chat/>
    )
}

export default App;
