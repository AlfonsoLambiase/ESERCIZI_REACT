import { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";

const InteractiveWelcome = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleLogin = (datiLogin) => {
    console.log("Login ricevuto:", datiLogin);
    // Puoi fare chiamate API, controlli, navigazione, ecc.
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <Welcome name={input} />
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default InteractiveWelcome;

