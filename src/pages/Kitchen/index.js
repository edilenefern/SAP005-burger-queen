// import React from 'react'
import React, { useState ,useEffect} from "react";
 
    function Kitchen(){
  

const token = localStorage.getItem("token");
const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://lab-api-bq.herokuapp.com/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
    })
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        })
      },[token])

  
        
     
  return (
      <div>
        <h1>Kitchen</h1>
      {produtos.price} 
    </div>
  )
}
      
  



    
export default Kitchen;

