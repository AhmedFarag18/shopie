// components/ProductCard.jsx
import React from "react";
import { BsCart } from "react-icons/bs";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useCart } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { isAuthenticated } = useAuth();

  const { addToCart } = useCart();


  return (
    <div className="bg-white shadow rounded-xl py-3 px-4 hover:shadow-lg transition">
      <img
        src={product.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.title}
        className="w-full h-56 object-cover mb-4 rounded-xl"
      />
      <h3 className="text-lg font-semibold mb-1 line-clamp-1">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
      <p className="text-green-600 font-bold text-lg mb-2">${product.price}</p>

      <div className="flex gap-2">
        <button
          onClick={() => {
            isAuthenticated ? addToCart(product) : toast.error("Please Sign in First")
          }}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          Add to Cart
          <BsCart className="text-lg" />
        </button>
        <Link
          to={`/products/${product.id}`}
          className="text-sm flex items-center justify-center px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
          title="Show Details"
        >
          <TbArrowLeftFromArc />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
