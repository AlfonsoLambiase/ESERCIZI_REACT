import { useState, useCallback } from "react";

export const useCounter = ()=>{

    const[conteggio, setConteggio]= useState(0);

    const Incrementa = useCallback(()=>{
        setConteggio((c)=> c + 1)
    }, []);

    const Decrementa = useCallback(()=>{
        setConteggio((c)=> c - 1)
    }, []);

    const Reset = useCallback(()=>{
        setConteggio(0)
    }, []);

    return{ conteggio, Incrementa, Decrementa, Reset }
};





