import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Strumento per leggere l'URL
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ProductDetails() {
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
    <>
      <Navbar />
      <main className="product-details">
        <div className="image-details">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-infos">
          <h1>{product.title}</h1>
          <p>Categoria: {product.category}</p>
          <h2>Prezzo: {product.price} €</h2>
          <h2>About this item</h2>
          <p>{product.description}</p>
        </div>
      </main>
    </>
  );
}
