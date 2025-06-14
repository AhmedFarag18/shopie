// hooks/useProduct.js

import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    setLoading(true);
    setError("");

    getProducts()
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}
