import Color from "./Color";
import Colors from "./Colors";

function App() {
  const listaColori = [
    { id: 1, name: "Rosso" },
    { id: 2, name: "Verde" },
    { id: 3, name: "Blu" },
  ];
  return (
    <>
      <Color color={{ id: "1", name: "Alfonso" }} />
      <Colors colors={listaColori} />
    </>
  );
}

export default App;
