
function Messaggio({age}) {         // PASSA COME PROPS IL VALORE DI `AGE`
if(!age){
  return <>Età non fornita!</>
}
  return age > 18 ? <p>La tua età è: {age}</p> : <p>Sei molto giovane!</p>;
}

export default Messaggio;
