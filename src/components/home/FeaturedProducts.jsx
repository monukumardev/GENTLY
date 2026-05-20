import React from 'react';
import ProductCard from '../products/ProductCard'; // Adjust this path based on where your ProductCard file lives

import sunglassImg from "../../assets/Sunglass.jpg";
import capImg from "../../assets/Caps.webp";
import beltImg from "../../assets/Belt.webp";
import walletImg from "../../assets/Wallet.webp";
import tshirtImg from "../../assets/Tshirt.jpg";

// Updated mock database array structure to perfectly feed your ₹ format card requirements
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 1299,
    oldPrice: 1999,
    image: tshirtImg,
    subCategory: "Clothing", // Matches item.subCategory in your Card code
    rating: 5,
    reviews: 120,
    badge: "New",
  },
  {
    id: 2,
    name: "Classic UV Sunglasses",
    price: 2499,
    oldPrice: 3499,
    image: sunglassImg,
    subCategory: "Accessories",
    rating: 4,
    reviews: 84,
    badge: "Trending",
  },
  {
    id: 3,
    name: "Handcrafted Leather Belt",
    price: 1499,
    oldPrice: 1999,
    image: beltImg,
    subCategory: "Accessories",
    rating: 5,
    reviews: 64,
    badge: "Hot",
  },
  {
    id: 4,
    name: "RFID Blocking Wallet",
    price: 999,
    oldPrice: 1499,
    image: walletImg,
    subCategory: "Accessories",
    rating: 4,
    reviews: 45,
    badge: "Sale",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#fafafa] py-8">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">

        {/* SECTION HEADER CONTAINER */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured <span className="text-red-500">Products</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Discover our best selling premium fashion picks
            </p>
          </div>

          <button className="text-sm font-medium text-red-500 hover:text-red-600 transition">
            View All →
          </button>
        </div>

        {/* REUSABLE PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard 
              key={product.id} 
              item={product} // Passes individual item records safely to your custom card
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;