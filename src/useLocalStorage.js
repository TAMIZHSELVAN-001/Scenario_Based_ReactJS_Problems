import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue){
    const[value, setValue]=useState(()=>{
        try{
            const savedValue=localStorage.getItem(key);
            if (savedValue!==null){
                return JSON.parse(savedValue);
            }
            return initialValue;
        }catch(error){
            return initialValue;
        }
    })
    useEffect(()=>{
        try{
            localStorage.setItem(key,JSON.stringify(value));
        }catch(error){
            console.error("Unable to save the LocalStorage",error)
        }

    },[key,value])
    return[value,setValue];
}
export default useLocalStorage; 