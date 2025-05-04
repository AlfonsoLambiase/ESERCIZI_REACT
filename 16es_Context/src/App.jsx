import { useState } from "react";
import Hello from "./Hello";

function App() {
  const [language, setLanguage] = useState("it");

  return (
    <>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      >
        <option value="en">English</option>
        <option value="it">Italiano</option>
        <option value="fr">Français</option>
      </select>

      <Hello lingua={language} />
    </>
  );
}

export default App;

