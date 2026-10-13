import { useState } from "react";

export default function Reports(){
    const [crash, setCrash]=useState(false);

    if(crash){
        throw new Error("Sales Chart failed");
    }

    return(
        <div>
            <h2>Reports Dashboard</h2>
            <p>Monthly Sales: ₹50,000</p>
            <button onClick={()=>setCrash(true)}>
                Simulate Error
            </button>
        </div>
    )
}