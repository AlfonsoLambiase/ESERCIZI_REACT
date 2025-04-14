import { useState } from "react";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]); // AGGIUNGE UN ARRAY VUOTO DA RIEMPIRE

  const handleChange = (event) => {
    setInputValue(event.target.value); // AGGIORNARE OGNI VOLTA L'INPUT ALLA SCRITTURA
  };

  const handleClick = () => {
    if (inputValue.trim() === "") return; // NON INVIA SE L'INPUT E' VUOTO

    setMessages([...messages, { text: inputValue, scrittore: "user" }]); // AGGIUNGE IL VALORE DELL'INPUT ALL' ARRAY MESSAGGI

    setTimeout(() => {
      setMessages((prev) => [
        ...prev, { text: "Risposta", scrittore: "risposta" }  // PREV RITORNA IL VALORE PRECEDENTE DELLO STATO
      ])}, 1000);   // RISPOSTA DOPO 1 SECONDO

    setInputValue(""); // SVUOTA L'INPUT
  };

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "300px",
        backgroundColor: "green",
        margin: "auto",
        borderRadius: "20px",
      }}>
      <div style={{}}>
        {messages.map((value, index) => (
          <p
            key={index}
            style={{
              textAlign: value.scrittore === "user" ? "right" : "left", // ALLINEA A DESTRA L' UTENTE, SINISTRA LA RISPOSTA
              backgroundColor: value.scrittore === "user" ? "yellow" : "red", // COLORI DIVERSI AI MESSAGGI
              padding: "8px 12px",
              borderRadius: "8px",
              margin: "5px 0",
            }}>
            {" "}
            {value.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Scrivi un messaggio..."
        style={{
          width: "180px",
          padding: "8px",
          marginBottom: "8px",
          marginLeft: "18%",
          borderRadius: "10px",
        }}/>
      <button
        onClick={handleClick}
        style={{
          width: "200px",
          padding: "8px",
          marginLeft: "18%",
          borderRadius: "10px",
        }}>
        Invia
      </button>
    </div>
  );
};

export default Chat;