import React from 'react';
import {
  ShoppingCart,
  Eye,
  Heart,
  Star,
} from 'lucide-react';

import sunglassImg from "../../assets/Sunglass.jpg";
import capImg from "../../assets/Caps.webp";
import beltImg from "../../assets/Belt.webp";
import walletImg from "../../assets/Wallet.webp";
import tshirtImg from "../../assets/Tshirt.jpg";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 45.00,
    oldPrice: 60.00,
    image: tshirtImg,
    category: "Clothing",
    rating: 5,
    reviews: 120,
    badge: "New",
  },
  {
    id: 2,
    name: "Classic UV Sunglasses",
    price: 120.00,
    oldPrice: 150.00,
    image: sunglassImg,
    category: "Accessories",
    rating: 4,
    reviews: 84,
    badge: "Trending",
  },
  {
    id: 3,
    name: "Handcrafted Leather Belt",
    price: 85.00,
    oldPrice: 100.00,
    image: beltImg,
    category: "Accessories",
    rating: 5,
    reviews: 64,
    badge: "Hot",
  },
  {
    id: 4,
    name: "RFID Blocking Wallet",
    price: 55.00,
    oldPrice: 75.00,
    image: walletImg,
    category: "Accessories",
    rating: 4,
    reviews: 45,
    badge: "Sale",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#fafafa] py-8">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">

        {/* Header */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {PRODUCTS_DATA.map((product) => (

            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >

              {/* Product Image */}
              <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">

                {/* Image Wrapper */}
                <div className="h-72 flex items-center justify-center overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain p-5 group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Top Actions */}
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-20">

                  {/* Badge */}
                  <span className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
                    {product.badge}
                  </span>

                  {/* Wishlist */}
                  <button className="w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition">

                    <Heart size={15} />

                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300">

                  {/* Quick View */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-5 group-hover:translate-y-0 transition duration-300">

                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 shadow-lg">

                      <Eye size={16} />

                      Quick View

                    </button>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-4">

                {/* Category */}
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 className="text-[15px] font-semibold text-gray-800 line-clamp-1 group-hover:text-red-500 transition">
                  {product.name}
                </h3>

                {/* Ratings */}
                <div className="flex items-center gap-2 mt-2">

                  <div className="flex items-center gap-[2px]">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={
                          i < product.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}

                  </div>

                  <span className="text-xs text-gray-400">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center flex-wrap gap-2 mt-3">

                  <span className="text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>

                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">

                    {Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                        100
                    )}
                    % OFF

                  </span>
                </div>

                {/* Add To Cart */}
                <button className="w-full mt-4 bg-gray-900 hover:bg-red-500 text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition duration-300">

                  <ShoppingCart size={16} />

                  Add to Cart

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;