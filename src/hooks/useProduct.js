// hooks/useProduct.js

import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError("");

    getProductById(id)
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
        console.log(data)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return { product, loading, error };
}
