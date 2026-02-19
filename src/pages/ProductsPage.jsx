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
    <div>
      <Navbar />
      <h1>products</h1>
      <div>
        {products.map((product) => (
          <Link key={product.id} to={`/Products/${product.id}`}>
            <h2>{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "200px" }}
            />
            <p>
              <strong>{product.price} €</strong>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
