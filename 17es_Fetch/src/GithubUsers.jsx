import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [inputValue, setInputValue] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed && !usernames.includes(trimmed)) {
      setUsernames([...usernames, trimmed]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Cerca un utente GitHub</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci username GitHub"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>

      <ul>
        {usernames.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;