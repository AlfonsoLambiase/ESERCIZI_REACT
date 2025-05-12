import { useState, useEffect, useRef } from "react";
import useSWR from "swr"; 

const fetcher = (url) => fetch(url).then(res => res.json());

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null);

  const { data } = useSWR("https://mocki.io/v1/b264e71d-5550-4c72-a3c4-783fcf635aa0", fetcher);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === "") return;

    // Aggiungi il messaggio dell'utente
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, scrittore: "user" }
    ]);

    // Aggiungi la risposta del bot dopo un timeout
    setTimeout(() => {
      if (data?.responses) {
        const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: randomResponse, scrittore: "bot" }
        ]);
      }
    }, 1000);

    setInputValue("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "300px",
        backgroundColor: "green",
        margin: "auto",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((value, index) => (
          <p
            key={index}
            style={{
              textAlign: value.scrittore === "user" ? "right" : "left",
              backgroundColor: value.scrittore === "user" ? "yellow" : "red",
              padding: "8px 12px",
              borderRadius: "8px",
              margin: "5px 0",
            }}
          >
            {value.text}
          </p>
        ))}
        <div ref={chatEndRef} />
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
        }}
      >
        Invia
      </button>
    </div>
  );
};

export default Chat;
