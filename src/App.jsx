import React from "react";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";

export default function App() {
  return (
   <>
    <Banner/>
    <div className="min-h-screen bg-white py-10">
     
      <h1 className="text-4xl font-bold text-center text-black">
        🛒 E-Commerce Store
      </h1>
      
      <ProductList />
    </div>
    </>
  );
}
