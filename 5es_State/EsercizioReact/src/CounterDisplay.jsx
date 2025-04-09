import "./CounterDisplay.css"

const CounterDisplay = ({Count})=>{    // LA CONST. PASSERA' COME PROPS. LA CHIAVE DELLO STATO 
    return <h2>{Count}</h2>        // RITORNERA' TRAMITE PROPS IL VALORE DELLO STATO
}

export default CounterDisplay;