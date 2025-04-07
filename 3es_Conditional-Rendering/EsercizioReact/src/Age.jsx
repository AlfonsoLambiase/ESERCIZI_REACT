import React from "react";

function Age({ age, name}) {  
  const eta1 = age >= 18 ? "Sei maggiorenne" : null;  
  const eta2 = age >= 18 && age < 65 ? "Approvato" : null;  
  const eta3 = age ? "Approvato" : null; 
  const eta4 = name === "John" ? "Approvato" : null; 
  return (
   <>
   {age} {eta1} {eta2} {eta3} {eta4}
   </>
  );
}

export default Age;
