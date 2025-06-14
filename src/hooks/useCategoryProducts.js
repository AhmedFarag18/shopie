// hooks/useProduct.js

import { useEffect, useState } from "react";
import { getCategoryProducts } from "../services/api";

export function useCategoryProducts(categoryId) {
  const [categoryProducts, setCategoryProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    setLoading(true);
    setError("");

    getCategoryProducts(categoryId)
      .then((data) => {
        setCategoryProducts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { categoryProducts, loading, error };
}
