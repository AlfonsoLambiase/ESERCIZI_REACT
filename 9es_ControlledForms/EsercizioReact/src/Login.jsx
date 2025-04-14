import { useState } from "react";

const Login = ({ onLogin }) => {
  const [input, setInput] = useState({
    nomeUtente: "",
    password: "",
    checkbox: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(input);
  };

  const handleReset = () => {
    setInput({
      nomeUtente: "",
      password: "",
      checkbox: false,
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="nomeUtente"
          value={input.nomeUtente}
          onChange={handleChange}
          placeholder="Nome utente"
        />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={input.checkbox}
            onChange={handleChange}
          />{" "}
          Ricorda
        </label>

        <button
          type="submit"
          disabled={input.nomeUtente === "" || input.password === ""}
        >
          Login
        </button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
};

export default Login;
