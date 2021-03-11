import React, { useState, useEffect } from "react"; 
import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./hall.module.css"
import IconHall from "../Icons/IconHall";


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
    <div className={styles.conteiner}>
      <div className={styles.sector}>
        <h1 className={styles.sectorTitle}>Hall</h1> 
      </div>


      <div className={styles.content}>
        <div className={styles.menu}>

          <h2 className={styles.title}>CARDÁPIO</h2>
          <div className={styles.contentMenu}>
            {produtos.map((produto) => (
              <div
                className={styles.table}
                key={produto.id}
                onClick={() => {
                  adicionarProduto(produto);
                }}
              >
                {/* <p>{produto.id}</p> */}

                {/* <p>{produto.type}</p> */}
                <p>{produto.subtype}</p>
                <p>{produto.name}</p>
                <p>{produto.flavor}</p>
                <p>{produto.complement}</p>
                <button className={styles.price}>R$ {produto.price}</button>

                {/* <p>{produto.image}</p> */}
                {/* <button>{produto.type}</button>
                <button>{produto.subtype}</button> */}
              </div>
            ))}
          </div>
        </div>


              <div>
                <tr className={styles.table}>
                  {/* <p>{produto.id}</p> */}
                  <td>{produto.name}</td>
                  <td>{produto.flavor}</td>
                  <td>{produto.complement}</td>
                  <td className={styles.price}>R$ {produto.price} </td>

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
      </div>
      {/* Aqui mostra o pedido finalizado no console */}
      <button onClick={() => Finalizar()}>Finalizar Pedido </button>
    </div>
  );
}

export default Hall;
