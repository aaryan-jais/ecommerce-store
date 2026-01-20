import React, { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(1000);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
      setFiltered(res.data); // initial list
    } catch (err) {
      console.log("API Error:", err);
    }
    setLoading(false);
  };

  const addToCart = (product) => {
    console.log("Added to cart:", product);
    alert(product.title + " added to cart!");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filtering Logic
  useEffect(() => {
    let list = [...products];

    // Search
    if (search.trim()) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    // Price filter
    list = list.filter((p) => p.price <= price);

    setFiltered(list);
  }, [search, category, price, products]);

  if (loading)
    return (
      <h2 className="text-center text-xl text-blue-600 animate-pulse mt-10">
        Loading products...
      </h2>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">

      {/* --------------------- FILTER SECTION ----------------------- */}
      <div className="bg-white p-3  rounded-lg shadow mb-8 grid md:grid-cols-3 gap-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          className="p-3 border rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          className="p-3 border rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        {/* Price Slider */}
        <div>
          <label className="text-sm font-semibold">
            Max Price: ${price}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* --------------------- PRODUCT LIST ----------------------- */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.length > 0 ? (
          filtered.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500 text-xl">
            No products found 😢
          </p>
        )}

      </div>
    </div>
  );
}
