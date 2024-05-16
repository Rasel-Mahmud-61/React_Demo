

import React  from "react";
import Products from "./Products";
import './product.css';

const Product=({product})=>{

    return(
       <div className="product_container">
             <div className="prodcut_div">
            <h1   className="id">{product.id}</h1>
            <p className="title">{product.title}</p>
            <img className="image" src={product.image}></img>
            <p className="price">{product.price}</p>
        </div>
        
       </div>

    );
    

}
export default Product ;