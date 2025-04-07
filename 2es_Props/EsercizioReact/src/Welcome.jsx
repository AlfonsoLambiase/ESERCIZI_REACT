import Age from "./Age";

function Welcome({ name = "Alfonso"}) {
  return (                         // CONTIENE A SUA VOLTA IL COMPONENTE `AGE` E VERRA' ESPORTATO IN `APP.JSX`
    <>
      <p>Welcome, <strong>{name}</strong>!</p>         
      <Age />
    </>
  );
}

export default Welcome;
