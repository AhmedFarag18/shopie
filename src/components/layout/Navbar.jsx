import React, { useState } from "react";
import {
  FaSearch,
  FaRegUser,
  FaRegHeart,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#f8f8fb] font-sans">
      <header className="flex justify-between items-center px-4 md:px-6 py-4 shadow-sm bg-white">
        <div className="flex items-center space-x-2">
          <img src="src/assets/Blueberry - eCommerce/logo.png" alt="Blue Berry Logo" className="h-10"/>
        </div>

        <div className="hidden md:flex items-center border border-gray-300 rounded-md px-2 w-full max-w-md">
          <select className="bg-transparent px-2 py-1 text-sm outline-none text-gray-600">
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Dairy</option>
            <option>Snacks</option>
            <option>Drinks</option>
            <option>Bakery</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            className="px-2 py-1 w-full outline-none text-sm bg-transparent"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
            <FaRegUser /> <span>Login</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
            <FaRegHeart /> <span>Wish List</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
            <FaShoppingCart /> <span>Cart</span>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-2xl text-[#6c7fd8]"
        >
          ☰
        </button>
      </header>

      <nav className="hidden md:flex items-center space-x-6 px-6 py-2 text-sm text-gray-600 border-b bg-white">
        <span className="cursor-pointer hover:text-[#6c7fd8]">Home</span>
        <span className="cursor-pointer hover:text-[#6c7fd8]">Categories</span>
        <span className="cursor-pointer hover:text-[#6c7fd8]">Products</span>
        <span className="cursor-pointer hover:text-[#6c7fd8]">Pages</span>
        <span className="cursor-pointer hover:text-[#6c7fd8]">Blog</span>
        <span className="cursor-pointer hover:text-[#6c7fd8]">Offers</span>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30">
          <div className="w-64 bg-white h-full p-4 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-lg">
                <FaTimes />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-gray-700 text-sm">
              <span className="cursor-pointer hover:text-[#6c7fd8]">Home</span>
              <span className="cursor-pointer hover:text-[#6c7fd8]">Categories</span>
              <span className="cursor-pointer hover:text-[#6c7fd8]">Products</span>
              <span className="cursor-pointer hover:text-[#6c7fd8]">Pages</span>
              <span className="cursor-pointer hover:text-[#6c7fd8]">Blog</span>
              <span className="cursor-pointer hover:text-[#6c7fd8]">Offers</span>

              <hr />

              <div className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
                <FaRegUser /> <span>Login</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
                <FaRegHeart /> <span>Wish List</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
                <FaShoppingCart /> <span>Cart</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
