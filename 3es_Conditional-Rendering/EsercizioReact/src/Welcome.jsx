import Age from "./Age";
import Messaggio from "./Messaggio";

function Welcome({ name }) {
  return (
    <>
      <p>Benvenuto, {name}</p>
      
      <Age age={26} />
      <Age age={18} />
      <Age age={70} />
      <Age age={13} />

      <Messaggio />
    </>
  );
}

export default Welcome;
