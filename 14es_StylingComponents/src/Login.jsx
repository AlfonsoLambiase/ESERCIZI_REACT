import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Inserisci password"
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
};

export default Login;