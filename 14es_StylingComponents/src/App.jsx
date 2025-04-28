import React from "react";
import Welcome from "./Welcome";
import CounterDisplay from "./CounterDisplay";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Welcome />
      <CounterDisplay count={5} />
      <Login />
    </div>
  );
};

export default App;