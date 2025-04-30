import { useState } from "react"

export const useForm = ()=>{
    const[userData, setUserData]= useState({
        name: "",
        password: ""
    });

    const handleChange = (e)=>{
    setUserData(e.target.value)
    }

    return{userData, handleChange}
}