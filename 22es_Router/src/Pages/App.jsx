/*
-Crea un nuovo branch partendo dal primo esercizio sulle proprietà. 
-Modifica il componente App che racchiude un componente Routes e aggiungi una singola Route 
al percorso "/"" che esegue il rendering del componente Welcome, passandogli una proprietà name. 
-Esegui il rendering del componente App all'interno di un componente BrowserRouter. 
-Aggiungi una nuova Route al percorso /counter che esegue il rendering del componente Counter 
del primo esercizio sullo stato.
-Aggiungere una nuova Route al percorso users/:username che esegue il rendering di un componente ShowGithubUser 
che riceve il nome utente come parametro di percorso ed esegue il rendering di un componente GithubUser 
passandogli il nome utente ricevuto.
-Aggiungi tre link nel componente App principale e usali per navigare verso tutti e tre i percorsi. 
-Aggiungi un percorso Non trovato che viene visualizzato quando un utente naviga verso un percorso che non esiste.
-Crea un componente GithubUserList che, recuperando questo URL API, https://api.github.com/users , 
mostri un elenco di link di nomi utente Github. Cliccando su un nome utente, verrà visualizzato 
il componente ShowGithubUser. 
-Aggiungi una route al percorso dell'utente che mostri il componente GithubUserList. 
-Se è presente una route /users/:username, rimuovila dal componente App e aggiungi una nuova route annidata all'interno della route /users. 
-Aggiungi una route index alla route GithubUsers che mostri il messaggio "Aggiungi un utente e selezionalo".
*/

import Counter from "../Components/Counter";
import Welcome from "../Components/Welcome";
import ShowGithubUser from "../Components/ShowGithubUser ";
import GithubUsers from "../Components/GithubUsers";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">SALUTO</Link></li>
          <li><Link to="/Counter">CONTO</Link></li>
          <li><Link to="/users">UTENTE</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Alfonso" />} />
        <Route path="/counter" element={<Counter />} />
        
        <Route path="/users" element={<GithubUsers />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
