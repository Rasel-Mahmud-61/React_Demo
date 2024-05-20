import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
const ToastMessage=()=>{

    const handleClick=()=>{
          toast('button is clicked');

    }

      return(

         <div>
            <h1>message</h1>
            <button onClick={handleClick}>ClickMe</button>
            <ToastContainer />
         </div>
      )
}
export default ToastMessage;
