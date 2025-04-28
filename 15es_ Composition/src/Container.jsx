import { useState } from "react";

const Container = ({children, title})=>{

    const [visibile, setVisibile] = useState(false)

const handleClick = ()=>{
setVisibile(!visibile)
}

    return(
       <div style={{ backgroundColor: "white", border: "1px solid red", width:"fit-content" }}>
      <h1 onClick={handleClick}>{title}</h1>
      {visibile && children}
       </div>
    )
};

export default Container;