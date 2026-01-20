import React from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/NavBar";

export default function App() {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-white py-10">
     
      <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
        🛒 Featured Products
      </h1>
      
      <ProductList />
    </div>
    </>
  );
}
