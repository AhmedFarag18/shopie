// hooks/useProduct.js

import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

export function useCategories() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    setLoading(true);
    setError("");

    getCategories()
      .then((data) => {
        setCategories(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { categories, loading, error };
}
