import { useEffect, useState } from "react";

export default function FetchUsers(){
    const[user,setUser]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch Users")
            }
            
            return response.json()
        })
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error)
            setError(error.message);
            setLoading(false);
            
        })
        
    },[])

    if(loading){
        return <h1>Loading...</h1>;
    }

    if(error){
        return <h1>Error:{error}</h1>
    }
    return(
        <div>
            <h2>Users</h2>
            {user.map((user)=>(
                <div key={user.id}>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>
                </div>
            ))}
        </div>
    )
}