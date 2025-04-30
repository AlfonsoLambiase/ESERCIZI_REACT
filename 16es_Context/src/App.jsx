import { useState } from "react";
import { LanguagesContext, messages } from "./LanguagesContext";
import Hello from "./Hello"; 

function App() {
  const [language, setLanguage] = useState("it");

  return (
    <LanguagesContext.Provider value={{ language, messages }}>

<select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>

        <Hello />
    </LanguagesContext.Provider>
  );
}

export default App;
