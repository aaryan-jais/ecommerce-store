import React, { useState, useEffect } from "react";

export default function Banner() {
  const slides = [
    "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
   "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
  ];

  const categories = [
    "Top Offers",
    "Jewelery",
    "Electronics",
    "Fashion",
    
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="w-full bg-gray-100 py-6 px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        {/* ---------------- LEFT CATEGORY MENU ---------------- */}
        <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-lg mb-3">Categories</h3>

          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li
                key={i}
                className="p-2 hover:bg-blue-100 rounded cursor-pointer transition"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- SLIDER / BANNER ---------------- */}
        <div className="col-span-12 md:col-span-9 relative overflow-hidden rounded-lg shadow">

          {/* Slides */}
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="banner"
                className="w-full object-cover"
              />
            ))}
          </div>

          {/* --- Previous Button --- */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-3 -translate-y-1/2 
            bg-white/70 hover:bg-white p-2 rounded-full shadow"
          >
            ‹
          </button>

          {/* --- Next Button --- */}
          <button
            onClick={next}
            className="absolute top-1/2 right-3 -translate-y-1/2 
            bg-white/70 hover:bg-white p-2 rounded-full shadow"
          >
            ›
          </button>

          {/* --- Dots Navigation --- */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full cursor-pointer
                ${current === i ? "bg-blue-600" : "bg-white/50"}`}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
