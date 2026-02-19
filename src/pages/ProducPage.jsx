import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("errore API");
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h5>{product.category}</h5>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>{product.price} €</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
