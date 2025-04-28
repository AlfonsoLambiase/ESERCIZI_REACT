import React from "react";

  const CounterDisplay = ({ count }) => {
    return (
      <div style={{ fontSize: "24px", color: "blue" }}>
        Conteggio: {count}
      </div>
    );
  };

  export default CounterDisplay;