import React, { useState } from "react";

export default function Event(){

    const[count,setCount]=useState(0);

    const  handleClick=(e)=>{

        setCount(count+1)
     
      }

    return(

      
         <div>
              <button onClick={handleClick}> Inrement </button> 

            <p> Count:{count}</p>  
         </div>
    )
}