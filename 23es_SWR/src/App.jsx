/*
-Modificare il gancio personalizzato useGithubUser dal terzo esercizio sui ganci personalizzati 
per utilizzare il gancio useSWR per recuperare i dati di un utente Github.
-Modificare il hook useGithubUser in modo che, se il nome utente è nullo, non venga effettuata alcuna richiesta.
-Modificare l'hook useGithubUser in modo che restituisca una funzione per recuperare manualmente 
i dati quando viene richiamato.
-Utilizzare SWRConfig per impostare un valore predefinito per la prop fetcher del hook useSWR.
*/

import GithubUser from "./Components/GithubUser";



function App() {
  return (
    <div>
      <h1>Ricerca utente GitHub</h1>
      <GithubUser/>
    </div>
  );
}

export default App;

