import UncontrolledLogin from "./UncontrolledLogin";

const App = () => {
    const handleLogin = (dati) => {
      console.log("Login (via event.target):", dati);
    };
  
    return (
      <div>
        <h2>Accesso</h2>
        <UncontrolledLogin onLogin={handleLogin} />
      </div>
    );
  };

export default App;
