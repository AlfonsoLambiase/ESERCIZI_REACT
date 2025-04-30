/*
-Crea un hook personalizzato useCounter che tenga traccia dello stato di un contatore
e restituisca il valore corrente del contatore, nonché tre funzioni per incrementare, 
decrementare e reimpostare il contatore.

-Crea un hook personalizzato che tenga traccia dello stato di un modulo controllato 
con gli input di nome utente e password e restituisca il valore corrente degli input 
nonché un gestore eventi per aggiornare entrambi gli input.

-Crea un hook personalizzato chiamato useGithubUser che riceve un nome utente, 
recupera i dati dell'utente Github corrispondente dall'API Github e restituisce utente, 
errore, caricamento e la funzione per recuperare i dati

-Scrivere il gancio personalizzato useCurrentLocation, che utilizza l'API 
navigator.geolocation del browser per ottenere la posizione attuale dell'utente tramite 
il metodo incorporato getCurrentPosition. Il gancio deve restituire la posizione attuale e una funzione per ottenere la posizione attuale, 
nonché gli stati di errore e di caricamento. I dettagli su come utilizzare questa API 
sono disponibili qui: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
*/

import { useCounter } from "./Hooks/useCounter";
import { useForm } from "./Hooks/useForm";
import { useCurrentLocation } from "./Hooks/useCurrentLocation";
import React, { useState } from "react";
import { useGithubUser } from "./Hooks/useGithubUser"; 

function App() {
  const { contatore, Incremento, Decremento, Reset } = useCounter();
  const { userData, handleChange } = useForm();
  const { location, error, loading, getLocation } = useCurrentLocation();
  const [username, setUsername] = useState(""); 
  const { user, error2, loading2, fetchUser } = useGithubUser();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    fetchUser(username);
  };
  
  const PressButton = () => {
    getLocation();
  };

  return (
    <>
      <div>
        <button onClick={PressButton}>Ottieni la mia posizione</button>

        {loading && <p>Caricamento posizione...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {location ? (
          <>
            <p>Latitudine: {location.latitude}</p>
            <p>Longitudine: {location.longitude}</p>
          </>
        ) : null}
      </div>

      <p>{contatore}</p>
      <button onClick={Incremento}>Incremento</button>
      <button onClick={Decremento}>Decremento</button>
      <button onClick={Reset}>Reset</button>

      <form>
        <input
          type="text"
          placeholder="Inserisci il nome"
          onChange={handleChange}
          value={userData.name}
        />
        <input
          type="text"
          placeholder="Inserisci la password"
          onChange={handleChange}
          value={userData.password}
        />
      </form>

      <div>
        <h1>Ricerca Utente GitHub</h1>
        <input
          type="text"
          placeholder="Inserisci nome utente GitHub"
          value={username}
          onChange={handleInputChange} 
        />
        <button onClick={handleSearch}>Cerca</button>

        {loading2 && <p>Caricamento...</p>}
        {error2 && <p style={{ color: "red" }}>{error2}</p>} {/* Usato error2 qui */}

        {user && (
          <div>
            <h2>{user.name}</h2>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt={user.login} width="100" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
