import "./AlertClock.css"

const AlertClock = ({showTime}) => {                       
  return <button onClick={showTime}>Ora Esatta!</button>;    // AGGIUNGO AL BOTTONE L'EVENTO ONCLICK PASSANDO LA PROPS DESTRUTTURATA TIME
};

export default AlertClock;
