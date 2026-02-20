import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Errore API");
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Products</h1>
          <p className="sub-title">
            Controlla ciascuna pagina del prodotto per maggiori informazioni.
          </p>
        </div>
        <div id="products-container">
          {products.map((product) => {
            const [intero, centesimi] = product.price.toFixed(2).split(".");
            return (
              <Link key={product.id} to={`/Products/${product.id}`}>
                <div className="card">
                  <div className="img-container">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="infos">
                    <h2>{product.title}</h2>
                    <p>
                      {product.rating.rate} <span>{product.rating.count}</span>
                    </p>
                    <p className="price">
                      {intero}
                      <span>{centesimi}€</span>
                    </p>
                    {/* <button>Add to basket</button> */}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
