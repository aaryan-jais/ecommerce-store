import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Navbar() {
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const { setSearchValue } = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchValue(input); // send search text globally
  };
  const categories = [
    "Electronics",
    "Mobiles",
    "Fashion",
    "Home",
    "Appliances",
    "Beauty",
    "Toys",
    "Grocery",
  ];

  return (
    <header className="w-full shadow-md bg-white top-0 z-50">

      {/* TOP NAV */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-blue-600 text-white">

        {/* MOBILE MENU ICON (hamburger / close) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* LOGO */}
        <h1 className="text-2xl font-bold">ShopKart</h1>

        {/* SEARCH BAR DESKTOP */}
        <div className="hidden md:flex w-[40%] bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            value={input}
          onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 text-black outline-none"
          />
          <button onClick={handleSearch} className="px-3 bg-blue-500 text-white text-xl">
            🔍
          </button>
        </div>

        {/* BUTTONS DESKTOP */}
        <div className="hidden md:flex items-center gap-6">

          {/* LOGIN DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setShowLoginMenu(true)}
            onMouseLeave={() => setShowLoginMenu(false)}
          >
            <button className="px-4 py-2 bg-white text-blue-600 rounded-md font-semibold">
              Login
            </button>

            {showLoginMenu && (
              <div className="absolute  z-50 right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md py-2">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wishlist</p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
              </div>
            )}
          </div>

          {/* CART */}
          <button className="flex items-center gap-2 text-white">
            🛒 Cart
          </button>
        </div>
      </div>

      {/* CATEGORY MENU DESKTOP */}
      <div className="hidden md:flex bg-white border-t border-gray-200 shadow-sm">
        <div className="flex gap-8 px-6 py-3 text-sm font-medium text-gray-700">
          {categories.map((cat, index) => (
            <p key={index} className="hover:text-blue-600 cursor-pointer transition">
              {cat}
            </p>
          ))}
        </div>
      </div>

      {/* MOBILE MENU SECTION */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4 px-4">

          {/* MOBILE SEARCH BAR */}
          <div className="flex w-full bg-gray-200 rounded-md overflow-hidden mt-3">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 outline-none"
            />
            <button className="px-3 bg-blue-500 text-white text-xl">
              🔍
            </button>
          </div>

          {/* LOGIN + CART BUTTONS */}
          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full py-2 bg-blue-600 text-white rounded-md">
              Login
            </button>

            <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-md text-left px-3">
              🛒 Cart
            </button>
          </div>

          {/* CATEGORY LIST MOBILE */}
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>

            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat, index) => (
                <p
                  key={index}
                  className="bg-gray-100 py-2 px-3 rounded-md hover:bg-blue-100 cursor-pointer text-gray-700 text-sm"
                >
                  {cat}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
