import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white border border-[#eee] shadow-sm rounded-md p-4 hover:scale-105 transition transform">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto mb-4"
      />

      <h3 className="text-lg font-semibold line-clamp-2 text-[#333]">{product.title}</h3>

      <p className="text-[#232323] text-sm mt-1 line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-bold text-[#232323]">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
