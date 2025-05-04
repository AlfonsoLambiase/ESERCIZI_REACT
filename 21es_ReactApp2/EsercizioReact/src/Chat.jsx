import { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null); // REF PER SCROLL

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, { text: inputValue, scrittore: "user" }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Risposta", scrittore: "risposta" },
      ]);
    }, 1000);

    setInputValue("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); // SCROLL AUTOMATICO
  }, [messages]);

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "300px",
        backgroundColor: "green",
        margin: "auto",
        borderRadius: "20px",
      }}>
      <div
        style={{
          maxHeight: "300px", // LIMITE ALTEZZA
          overflowY: "auto",  // SCROLL ABILITATO
          marginBottom: "10px"
        }}>
        {messages.map((value, index) => (
          <p
            key={index}
            style={{
              textAlign: value.scrittore === "user" ? "right" : "left",
              backgroundColor: value.scrittore === "user" ? "yellow" : "red",
              padding: "8px 12px",
              borderRadius: "8px",
              margin: "5px 0",
            }}>
            {value.text}
          </p>
        ))}
        <div ref={chatEndRef} /> {/* REF PER SCROLL */}
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
        }}
      />
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
