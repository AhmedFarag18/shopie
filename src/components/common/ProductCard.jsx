import React from "react";

export default function ProductCard({ image, category, title, price, oldPrice, extra }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg flex flex-col h-full">
      <div className="h-40 mb-3 flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>
      <div className="text-xs text-gray-500 mb-1">{category}</div>
      <h3 className="font-medium text-gray-800">{title}</h3>
      <div className="flex justify-between items-center mt-2">
        {oldPrice && <span className="text-gray-500 line-through">{oldPrice}</span>}
        <span className="font-bold text-purple-600">{price}</span>
      </div>
      {extra && <div className="text-xs text-gray-500 mt-1">{extra}</div>}
    </div>
  );
}
