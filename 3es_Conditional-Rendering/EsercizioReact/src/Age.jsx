import React from "react";

function Age({age}) {      // PASSA AL COMPONENTE AGE LA PROPS `AGE`
  return (
    <>
      <p>La tua età è: {age}</p>
    </>
  );
}

export default Age;
