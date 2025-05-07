
import { useState } from "react";
import { useGithubUser } from "../Hooks/useGithubUser";
function GithubUser() {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");

  const { user, error, loading } = useGithubUser(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue.trim());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Scrivi un username GitHub"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>

      {loading && <p>Caricamento...</p>}
      {error && <p>Errore nel caricamento</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt="Avatar" width={100} />
        </div>
      )}
    </div>
  );
}

export default GithubUser;