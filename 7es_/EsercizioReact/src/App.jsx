import AlertClock from "./AlertClock";

const App = () => {
  const ShowTime = () => {                   // CREO LA VARIABILE CHE CONTERRA' LA FUNZIONE DA USARE
    alert(new Date().toLocaleTimeString());  // `NEWDATE().TOLOCALTIMESTRING()` FORNIRA' L'ORA ESATTA 
  };
  return (
    <>
      <AlertClock Time={ShowTime}></AlertClock>   {/* IMPORTO IL COMPONENTE `ALERTCLOCK` FACENDO PASSARE ALLA PROPS LA FUNZIONE `SHOWTIME` */}
    </>
  );
};

export default App;
