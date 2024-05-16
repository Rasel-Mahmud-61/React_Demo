import React, { useState } from "react";

export default function OnClick(){

    const [ChangeValue,setChange]=useState(0);

    const  handleChange=(e)=>{

        setChange(e.target.value);
     
      }

    return(

      
         <div>
              <input type="text" onChange={handleChange}/>

            <p> {ChangeValue}</p>  
         </div>
    )
}