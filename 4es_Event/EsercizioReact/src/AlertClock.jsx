import "./AlertClock.css"

const AlertClock = ({Time}) => {                       
  return <button onClick={Time}>Ora Esatta!</button>;    // AGGIUNGO AL BOTTONE L'EVENTO ONCLICK PASSANDO LA PROPS DESTRUTTURATA TIME
};

export default AlertClock;
