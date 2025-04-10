import "./CounterDisplay.css"

const CounterDisplay = ({count})=>{    // LA CONST. PASSERA' COME PROPS. LA CHIAVE DELLO STATO 
    return <h2>{count}</h2>        // RITORNERA' TRAMITE PROPS IL VALORE DELLO STATO
}

export default CounterDisplay;