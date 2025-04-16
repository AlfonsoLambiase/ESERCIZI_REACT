/* 
Crea un componente denominato Color che riceve un oggetto denominato color come prop, 
il quale avrà 2 proprietà, id e name, e restituisce un tag li che visualizza la proprietà name.
Crea un secondo componente denominato Colors, che accetta un array di oggetti come prop, 
in cui le proprietà sono sempre nome e id, e visualizza un elenco non ordinato di componenti Colore.
*/

const Color = ({color}) => {
    
    return(
        
        <li>{color.name}</li>
    )
};

export default Color;