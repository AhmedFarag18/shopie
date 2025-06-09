// pages/ProductsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: "", price: 1000 });
  const [search, setSearch] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const PRODUCTS_PER_PAGE = 6;

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const price = parseInt(searchParams.get("price")) || 1000;
    const searchQuery = searchParams.get("search") || "";
    const currentPage = parseInt(searchParams.get("page")) || 1;

    setFilters({ category, price });
    setSearch(searchQuery);
    setPage(currentPage);
  }, [searchParams]);

  useEffect(() => {
    fetchProducts();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
    setLoading(false);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    setSearchParams({ ...newFilters, search, page: 1 });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchParams({ ...filters, search: value, page: 1 });
  };

  const handleResetFilters = () => {
    const defaultFilters = { category: "", price: 1000 };
    setFilters(defaultFilters);
    setSearch("");
    setPage(1);
    setSearchParams({});
    toast.success("Filters have been reset");
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category?.name === filters.category) &&
      product.price <= filters.price &&
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  return (
    <div className="bg-white text-gray-800">
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>

      <div className="flex gap-6 px-6 py-12 max-w-7xl mx-auto">
        <aside className="w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <select
              name="category"
              onChange={handleFilterChange}
              className="w-full border px-2 py-1 rounded"
              value={filters.category}
            >
              <option value="">All</option>
              <option value="Clothes">Clothes</option>
              <option value="Shoes">Shoes</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Price (Max)</h3>
            <input
              type="range"
              name="price"
              min="0"
              max="1000"
              value={filters.price}
              onChange={handleFilterChange}
              className="w-full"
            />
            <p className="text-sm mt-1">Up to ${filters.price}</p>
          </div>
          <button
            onClick={handleResetFilters}
            className="text-sm text-red-600 hover:underline"
          >
            Reset Filters
          </button>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 && "s"}
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 animate-pulse p-4 rounded-xl"
                >
                  <div className="bg-gray-300 h-48 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 mb-1 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 mb-1 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 mt-4 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPage(i + 1);
                  setSearchParams({ ...filters, search, page: i + 1 });
                }}
                className={`px-3 py-1 rounded border ${
                  page === i + 1
                    ? "bg-[#6D6ADB] text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
