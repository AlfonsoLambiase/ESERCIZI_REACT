import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const GithubUsers = () => {
const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Usato per navigare programmaticamente

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      // Naviga verso la rotta per il nome utente inserito
      navigate(`/users/${username}`);
    }
  };

  return (
    <div>
      <h2>Utenti GitHub</h2>

      {/* Form di inserimento nome utente */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci un nome utente GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Vai al Profilo</button>
      </form>

      <Outlet /> {/* Qui verrà inserita la route index o :username */}
    </div>
  )}


export default GithubUsers;