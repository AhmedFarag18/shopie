import React from "react";
import { Link } from "react-router-dom"; 

export default function CartTable ({ cartItems }) {
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <div className="mb-24 w-full lg:w-2/3 w-3/5 mx-auto p-4">
      <div className="overflow-x-auto shadow-md rounded-lg bg-white animate-fade-in">
        <table className="min-w-full text-center">
          <thead className="bg-gray-100">
            <tr className="text-sm font-semibold text-gray-600">
              <th className="py-3 px-4">Product</th>
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
              cartItems.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4 px-4">{item.name}</td>
                  <td className="py-4 px-4">${item.price}</td>
                  <td className="py-4 px-4">{item.quantity}</td>
                  <td className="py-4 px-4">${item.price * item.quantity}</td>
                  <td className="py-4 px-2">
                    <button className="text-red-500 hover:underline">
                      Remove
                    </button>
                  </td>
                  <td className="py-4 px-2">
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center animate-fade-in">
        {!isEmpty && (
          <div
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Check Out
          </div>
        )}
      </div>
    </div>
  );
};


