import React, { useState, useEffect } from "react";

function Hall() {
  const token = localStorage.getItem("token");
  const [produtos, setProdutos] = useState([]);
  const [pedido, setPedido] = useState([]);
  // const [total, setTotal] = useState([])
  // const [count, setCount] = useState([]);
  // const [price,setPrice] = useState([]);
  // const [id, setId] = useState([]);

  useEffect(() => {
    fetch("https://lab-api-bq.herokuapp.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      });
  }, [token]);

  function adicionarProduto(produto) {
    console.log(produto);
    setPedido([...pedido, produto]);
    
  }

  const somaPedidos = pedido.reduce((acc, valorAtual) => {
    console.log(valorAtual);
    return acc + valorAtual.price;
  }, 0);

  // console.log(produtos)
  // const Finalizar = () => {
  //Aqui está mostrando o pedido finalizado no console
    // console.log(pedido);
  // };
  

  // }
  // fetch("https://lab-api-bq.herokuapp.com/orders", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `${token}`,
  //   },

  //   body:{
  //     client:"",
  //     table:"",
  //     products:[],

  //   }
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setProdutos(data);
  //   });

  return (
    <div>
      <h1>Hall</h1>
      <h2>CARDÁPIO</h2>

      {produtos.map((produto) => (
        <div
          key={produto.id}
          onClick={() => {
            adicionarProduto(produto);
          }}
        >
          {/* <p>{produto.id}</p> */}

          <p>{produto.type}</p>
          <p>{produto.subtype}</p>
          <p>{produto.name}</p>
          <p>{produto.flavor}</p>
          <p>{produto.complement}</p>
          <button>R$ {produto.price}</button>

          {/* <p>{produto.image}</p> */}
          {/* <button>{produto.type}</button>
          <button>{produto.subtype}</button> */}
        </div>
      ))}

      <div>
        <h2>COMANDA</h2>
        {pedido.map((produto) => (
          // <div key={produto.id} onClick={() => {}}>
          <div>
            <tr>
              {/* <p>{produto.id}</p> */}
              <td>{produto.name}</td>
              <td>{produto.flavor}</td>
              <td>{produto.complement}</td>
              <td>R$ {produto.price} </td>
              {/* <p>{produto.image}</p> */}
              <td>{produto.type}</td>
              <td>{produto.subtype}</td>
            </tr>
          </div>
        ))}
      </div>
      

      {/* Aqui mostra a soma do pedido */}
      <div>TOTAL:R${somaPedidos}</div>

      {/* Aqui mostra o pedido finalizado no console */}
      {/* <button onClick={() => Finalizar()}>Finalizar Pedido </button> */}
    </div>
  );
}

export default Hall;
