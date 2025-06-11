import React from "react";
import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";

export default function CartTable({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <div className="mb-24 w-full lg:w-2/3 mx-auto p-4">
      <div className="overflow-x-auto shadow-md rounded-lg bg-white animate-fade-in">
        <table className="min-w-full text-center">
          <thead className="bg-gray-100">
            <tr className="text-sm font-semibold text-gray-600">
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4" colSpan="2"></th>
            </tr>
          </thead>
          <tbody>
            {isEmpty ? (
              <tr>
                <td colSpan="6" className="py-6 text-gray-500">
                  Your cart is empty
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr key={item.id} className="border-t border-b-gray">
                  <td className="py-4 px-4">
                    <img src={item.image} className="w-10 h-10 rounded-full" alt={item.title} />
                  </td>
                  <td className="py-4 px-4 text-sm">{item.title}</td>
                  <td className="py-4 px-4">${item.price}</td>
                  <td className="py-4 px-4 flex gap-2 justify-center items-center">
                    <button className="text-gray-500 bg-gray-100 p-1 rounded cursor-pointer"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <TbMinus className="text-lg" />
                    </button>
                    <span>
                      {item.quantity}
                    </span>
                    <button className="text-gray-500 bg-gray-100 p-1 rounded cursor-pointer"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <TbPlus className="text-lg" />
                    </button>
                  </td>
                  <td className="py-4 px-4">${item.price * item.quantity}</td>
                  <td className="py-4 px-2">
                    <button className="text-red-500 bg-gray-100 p-2 rounded cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <TbTrash className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


    </div>
  );
};


