// components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={product.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2 line-clamp-2">
        {product.description}
      </p>
      <p className="text-green-600 font-bold text-lg mb-2">${product.price}</p>
      <div className="flex gap-2">
        <button
          onClick={() => navigate(`/products/${product.id}`)}
          className="text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
        >
          View Details
        </button>
        <button
          onClick={() => navigate("/login")}
          className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
