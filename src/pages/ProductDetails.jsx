import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Strumento per leggere l'URL
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Errore API", error);
      });
  }, [id]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <p>Caricamento dati...</p>
      </div>
    );
  }

  // Quando arrivano i dati, stampiamo la pagina
  return (
    <div>
      <Navbar />
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <h2>Prezzo: {product.price} €</h2>
      <p>Categoria: {product.category}</p>
    </div>
  );
}
