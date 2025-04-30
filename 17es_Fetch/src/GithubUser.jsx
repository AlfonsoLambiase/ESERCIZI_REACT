/*
-Crea un componente GithubUser che riceva una prop username e recuperi 
i dati dell'utente Github corrispondente dall'API Github.
-Il componente dovrebbe visualizzare il nome utente, il login e l'avatar dell'utente.
-Crea un nuovo componente GithubUsers con un modulo con un campo di testo e un pulsante di invio. 
-Il campo di testo verrà utilizzato per cercare un utente specificandone il nome utente. 
-Ogni utente verrà visualizzato in un elenco, in cui ogni elemento dell'elenco è un componente GithubUser. 
-Questi componenti utilizzeranno il nome utente come prop.
*/

import React, { useEffect, useState } from 'react';

const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setError(null);
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Utente non trovato');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUser();
  }, [username]);

  if (error) return <li>Errore: {error}</li>;
  if (!user) return <li>Caricamento...</li>;

  return (
    <li>
      <img src={user.avatar_url} alt={`${user.login} avatar`} width="50" />
      <div><strong>Nome:</strong> {user.name || 'N/A'}</div>
      <div><strong>Login:</strong> {user.login}</div>
    </li>
  );
};

export default GithubUser;




