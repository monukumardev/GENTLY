import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Star,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import products from "../data/products";

const Products = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <section className="min-h-screen bg-[#fafafa] py-6 md:py-8">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-400 mb-5">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>

          <span>/</span>

          <span className="text-gray-800 font-semibold capitalize">
            {category}
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7">

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 capitalize">
              {category} <span className="text-red-500">Collection</span>
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Premium styles crafted for modern street fashion
            </p>
          </div>

          <div className="mt-3 md:mt-0 text-sm text-gray-500">
            {filteredProducts.length} Products Available
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (

          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

              {filteredProducts.map((item) => (

                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >

                  {/* Product Image Section */}
                  <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">

                    {/* Product Image */}
                    <div className="h-72 flex items-center justify-center overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain p-5 group-hover:scale-110 transition duration-700"
                      />
                    </div>

                    {/* Top Actions */}
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-20">

                      {/* Badge */}
                      {item.badge && (
                        <span className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
                          {item.badge}
                        </span>
                      )}

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

                  {/* Product Details */}
                  <div className="p-4">

                    {/* Category */}
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                      {item.category}
                    </p>

                    {/* Product Name */}
                    <h3 className="text-[15px] font-semibold text-gray-800 line-clamp-1 group-hover:text-red-500 transition">
                      {item.name}
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-2 mt-2">

                      <div className="flex items-center gap-[2px]">

                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            className={
                              i < Math.floor(item.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}

                      </div>

                      <span className="text-xs text-gray-400">
                        ({item.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center flex-wrap gap-2 mt-3">

                      <span className="text-xl font-bold text-gray-900">
                        ₹{item.price}
                      </span>

                      <span className="text-sm text-gray-400 line-through">
                        ₹{item.oldPrice}
                      </span>

                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {Math.round(
                          ((item.oldPrice - item.price) / item.oldPrice) * 100
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

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">

              {/* Prev */}
              <button className="w-10 h-10 rounded-xl border bg-white flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition">

                <ChevronLeft size={18} />

              </button>

              {/* Pages */}
              <button className="w-10 h-10 rounded-xl bg-red-500 text-white font-medium shadow">
                1
              </button>

              <button className="w-10 h-10 rounded-xl border bg-white hover:bg-red-500 hover:text-white hover:border-red-500 transition">
                2
              </button>

              <button className="w-10 h-10 rounded-xl border bg-white hover:bg-red-500 hover:text-white hover:border-red-500 transition">
                3
              </button>

              <button className="w-10 h-10 rounded-xl border bg-white hover:bg-red-500 hover:text-white hover:border-red-500 transition">
                4
              </button>

              {/* Next */}
              <button className="w-10 h-10 rounded-xl border bg-white flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition">

                <ChevronRight size={18} />

              </button>
            </div>
          </>

        ) : (

          <div className="py-24 text-center">

            <h2 className="text-2xl font-semibold text-gray-300">
              No products found
            </h2>

            <Link
              to="/"
              className="inline-block mt-4 text-red-500 font-medium hover:underline"
            >
              Continue Shopping
            </Link>

          </div>
        )}
      </div>
    </section>
  );
};

export default Products;