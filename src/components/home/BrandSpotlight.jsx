import React from "react";

import nike from "../../assets/nike.webp";
import puma from "../../assets/puma.webp";
import rayban from "../../assets/rayban.webp";

const brands = [
  {
    name: "Nike",
    image: nike,
    tagline: "Move Without Limits",
    offer: "40% OFF",
    price: "From ₹1999",
  },
  {
    name: "Puma",
    image: puma,
    tagline: "Forever Faster",
    offer: "30% OFF",
    price: "From ₹1499",
  },
  {
    name: "Ray-Ban",
    image: rayban,
    tagline: "Iconic Eyewear",
    offer: "25% OFF",
    price: "From ₹2999",
  },
];

const BrandSpotlight = () => {
  return (
    <section className="bg-white py-6">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">
            Brand <span className="text-red-600">Spotlight</span>
          </h2>

          <button className="text-xs font-semibold text-red-600 hover:underline">
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative h-52 rounded-lg overflow-hidden cursor-pointer"
            >

              {/* Image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

              {/* Offer */}
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded">
                {brand.offer}
              </span>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-3">

                <h3 className="text-base font-semibold text-white">
                  {brand.name}
                </h3>

                <p className="text-[11px] text-gray-200">
                  {brand.tagline}
                </p>

                <p className="text-xs font-medium text-white mb-2">
                  {brand.price}
                </p>

                <button className="px-3 py-1 bg-white text-black text-xs rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                  Shop Now
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BrandSpotlight;