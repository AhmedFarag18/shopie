import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const useSearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({ category: "", price: 1000 });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const price = parseInt(searchParams.get("price")) || 1000;
    const searchQuery = searchParams.get("search") || "";
    const currentPage = parseInt(searchParams.get("page")) || 1;

    setFilters({ category, price });
    setSearch(searchQuery);
    setPage(currentPage);
  }, [searchParams]);

  return {
    filters,
    search,
    page,
    setFilters,
    setSearch,
    setPage,
    searchParams,
    setSearchParams,
  };
};
