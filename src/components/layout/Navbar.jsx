import React, { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { mainIcon } from "../../assets/icons";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <div className="bg-light font-sans  border-b border-b-gray-50">
      <header className="flex justify-between items-center px-4 md:px-6 py-4 shadow-sm bg-white">
        <Link to="/" className="flex items-center gap-1">
          <img
            src={mainIcon}
            alt="Blue Berry Logo"
            className="h-8"
          />
          <span className="text-xl text-fuchsia-900 font-bold uppercase mt-1">Shopie</span>
        </Link>

      <nav className="hidden md:flex items-center space-x-6 px-6 py-2 text-sm text-gray-600 bg-white">
        <Link to="/" className="cursor-pointer transition hover:text-[#6c7fd8]">Home</Link>
        <Link to="categories" className="cursor-pointer transition hover:text-[#6c7fd8]">Categories</Link>
        <Link to="about" className="cursor-pointer transition hover:text-[#6c7fd8]">About</Link>
        <Link to="products" className="cursor-pointer transition hover:text-[#6c7fd8]">Products</Link>
      </nav>

        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <Link to="/cart" className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
            <LuShoppingCart className="text-xl" /> <span>Cart</span>
          </Link>

          {
            isAuthenticated ?
              (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full border-2 border-b-gray"
                    />
                  </button>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-auto p-2 bg-white border border-b-gray rounded z-50">
                      <div className="p-2 text-sm text-gray-800 border-b border-b-gray">
                        {user.name || "User"}
                      </div>
                      <div className="p-2 text-sm text-gray-800 border-b border-b-gray">
                        {(user?.email.lenght > 15 ? user?.email.slice(0, 15) : user?.email) || "User Email"}
                      </div>
                      <button
                        onClick={logout}
                        className="w-full p-2 text-left text-red-500 hover:bg-red-500 hover:text-white text-sm rounded-sm"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )
              : <Link to="/login" className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
                <FiUser className="text-xl" /> <span>Login</span>
              </Link>
          }
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-2xl text-[#6c7fd8]"
        >
          <CiGrid41 className="text-2xl" />
        </button>
      </header>



      {isMenuOpen && (
        <div className="fixed inset-0 z-50 h-full w-full bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100">
          <div className="w-64 bg-white h-full p-4 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-lg">
                <CiGrid41 className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-gray-700 text-sm">
              <Link to="/" className="cursor-pointer hover:text-[#6c7fd8]">Home</Link>
              <Link to="categories" className="cursor-pointer hover:text-[#6c7fd8]">Categories</Link>
              <Link to="products" className="cursor-pointer hover:text-[#6c7fd8]">Products</Link>

              <hr />

              <Link to="/cart" className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
                <LuShoppingCart className="text-xl" /> <span>Cart</span>
              </Link>

              {
                isAuthenticated ?
                  (
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-2 focus:outline-none"
                      >
                        <img
                          src={user.avatar}
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full border-2 border-b-gray"
                        />
                      </button>

                      {/* Dropdown */}
                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-auto p-2 bg-white border border-b-gray rounded z-50">
                          <div className="p-2 text-sm text-gray-800 border-b border-b-gray">
                            {user.name || "User"}
                          </div>
                          <div className="p-2 text-sm text-gray-800 border-b border-b-gray">
                            {(user?.email.lenght > 15 ? user?.email.slice(0, 15) : user?.email) || "User Email"}
                          </div>
                          <button
                            onClick={logout}
                            className="w-full p-2 text-left text-red-500 hover:bg-red-500 hover:text-white text-sm rounded-sm"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  )
                  : <Link to="/login" className="flex items-center space-x-1 cursor-pointer hover:text-[#6c7fd8]">
                    <FiUser className="text-xl" /> <span>Login</span>
                  </Link>
              }
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
