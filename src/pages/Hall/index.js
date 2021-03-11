import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import styles from "./hall.module.css";

function Hall() {
  // const history = useHistory();
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [pedido, setPedido] = useState([]);
  // const [table, setTable] = useState("");
  // const [client, setClient] = useState("");

 

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
        setProducts(data);
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
  const Finalizar = () => {
    // history.push("/kitchen");
    // // Aqui está mostrando o pedido finalizado no console
    //   console.log(pedido);

    fetch("https://lab-api-bq.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },

      body: {
        
          id: 0,
          client_name: "",
          user_id: 0,
          table: 0,
          status: " ",
          processedAt: "",
          createdAt: "",
          updatedAt: "",
          Products: [
            {
              id: 0,
              name: "",
              flavor: "",
              complement: "",
              qtd: 0,
            }
          ]
        }
      // },
    })
      .then((response) => response.json())
      .then((data) => {
        setPedido(data);
      });
  };

  // }

  return (
    <div>
      <h1>Hall</h1>
      <h2>CARDÁPIO</h2>

      {products.map((produto) => (
        <div
          key={produto.id}
          onClick={() => {
            adicionarProduto(produto);
          }}
        >
          {/* <p>{produto.id}</p> */}

          {/* <p>{produto.type}</p> */}
          {/* <p>{produto.subtype}</p> */}
          <p>{produto.name}</p>
          <p>{produto.flavor}</p>
          <p>{produto.complement}</p>
          <button>R$ {produto.price}</button>

          {/* <p>{produto.image}</p> */}
          {/* <button>{produto.type}</button>
          <button>{produto.subtype}</button> */}
        </div>
      ))}

      <div className={styles.commands}>
        <h2 className={styles.title}>COMANDA</h2>
        <div className={styles.contentCommands}>
          {pedido.map((produto) => (
            <div key={produto.name} onClick={() => {}}>
              <div>
                <tr>
                  {/* <p>{produto.id}</p> */}
                  {/* <td>{produto.name}</td> */}
                  <td>{produto.flavor}</td>
                  <td>{produto.complement}</td>
                  <td>R$ {produto.price} </td>
                  {/* <p>{produto.image}</p> */}
                  <td>{produto.type}</td>
                  <td>{produto.subtype}</td>
                </tr>
              </div>
            </div>
          ))}

          <div className={styles.totalCommands}>TOTAL:R${somaPedidos}</div>
        </div>
      </div>
      {/* Aqui mostra o pedido finalizado no console */}
      <button onClick={() => Finalizar()}>Finalizar Pedido </button>
    </div>
  );
}

export default Hall;
