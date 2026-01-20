import React from "react";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E0D3D] py-10">
      <h1 className="text-4xl font-bold text-center text-white">
        🛒 E-Commerce Store
      </h1>
      <ProductList />
    </div>
  );
}
