import React, { useState } from "react";


export default function DataFetch(){

    // usestate

    const[count,setCount]=useState(0);
    const handleChage=(e)=>{

        setCount(count+1);
    }


        return(


            <div>

                    <button onClick={handleChage}>
                        ++
                    </button>
                    <p> Count:{count}</p>
            </div>
        )
}