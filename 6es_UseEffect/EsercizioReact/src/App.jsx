import Clock from "./Clock";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Counter start={0} />
      <Clock/>
    </>
  );
};

export default App;
