import { useMemo, useState } from "react";

const FilteredList = ()=>{
    const[elenco, setElenco]= useState([
        { nome: "Geolier", id: 1, età: 25 },
        { nome: "Kid Yugi", id: 2, età: 17 },
        { nome: "Lazza", id: 3, età: 30 },
    ]);

    const maggiorenni = useMemo(() => {
        return elenco.filter(persona => persona.età > 18);
      }, [elenco]);

    return(
     <>
     <ul>
       {maggiorenni.map((value, index)=>{
         return  <li key={index}>{value.nome},{value.età}</li>
        })}
     </ul>
     </>
    )
};

export default FilteredList;