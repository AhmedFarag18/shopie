// pages/ProductsPage.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../../components/common/ProductCard";
import { toast } from "react-toastify";
import ProductsSkeleton from "../../components/common/skeletons/ProductsSkeleton";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { getProducts } from "../../services/api";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const PRODUCTS_PER_PAGE = 6;

  const { showScroll, scrollToTop } = useScrollToTop();
  const {
    filters,
    search,
    page,
    setFilters,
    setSearch,
    setPage,
    searchParams,
    setSearchParams,
  } = useSearchFilter();

  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    setLoading(true);
    try {
      getProducts().then(res => {
        setProducts(res.data);
        setLoading(false);
      })
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
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
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm"
        />
      </div>

      <div className="flex gap-6 px-6 py-12 max-w-7xl mx-auto max-md:flex-col">
        <aside className="w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <select
              name="category"
              onChange={handleFilterChange}
              className="w-full border px-2 py-1 rounded-lg border-b-gray h-12"
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
            <ProductsSkeleton length={6} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPage(i + 1);
                  setSearchParams({ ...filters, search, page: i + 1 });
                }}
                className={`px-3 py-1 rounded border ${page === i + 1
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
