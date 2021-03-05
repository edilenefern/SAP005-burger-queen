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
      },[])

  
        
     
  return (
      <div>
      
    </div>
  )
}
      
  



    
export default Kitchen;
// {/* {produtos.map(produto => (
//         <div key={produto.id} onClick={()=> {
//           console.log(produto.name)
//         }} >
//           {/* <p>{produto.id}</p> */}
//           {/* <p>{produto.name}</p>
//           <p>{produto.flavor}</p>
//           <p>{produto.complement}</p>
//           <p>R${produto.price}Total:</p> */}
//           {/* <p>{produto.image}</p> */}
//           {/* <p>{produto.type}</p>
//           <p>{produto.subtype}</p> */}
       
//         {/* </div> */}
//       // ))
//   // } */}