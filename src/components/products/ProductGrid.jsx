// ===============================================
// FILE: src/components/products/ProductGrid.jsx
// ===============================================

import React from "react";

import {
  Heart,
  ShoppingCart,
  Star,
  Eye,
} from "lucide-react";

const ProductGrid = ({ products }) => {

  return (

    <div className="flex-1">

      {products.length > 0 ? (

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

          {products.map((item) => (

            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">

                <div className="h-72 flex items-center justify-center overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain p-5 group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* TOP ACTIONS */}
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-20">

                  {item.badge && (
                    <span className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
                      {item.badge}
                    </span>
                  )}

                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition">

                    <Heart size={15} />

                  </button>

                </div>

                {/* QUICK VIEW */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300">

                  <div className="absolute bottom-4 left-4 right-4 translate-y-5 group-hover:translate-y-0 transition duration-300">

                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 shadow-lg">

                      <Eye size={16} />

                      Quick View

                    </button>

                  </div>

                </div>

              </div>

              {/* DETAILS */}
              <div className="p-4">

                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  {item.type}
                </p>

                <h3 className="text-[15px] font-semibold text-gray-800 line-clamp-1 group-hover:text-red-500 transition">
                  {item.name}
                </h3>

                {/* RATINGS */}
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

                {/* PRICE */}
                <div className="flex items-center flex-wrap gap-2 mt-3">

                  <span className="text-xl font-bold text-gray-900">
                    ₹{item.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{item.oldPrice}
                  </span>

                </div>

                {/* BUTTON */}
                <button className="w-full mt-4 bg-gray-900 hover:bg-red-500 text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition duration-300">

                  <ShoppingCart size={16} />

                  Add to Cart

                </button>

              </div>

            </div>
          ))}

        </div>

      ) : (

        <div className="bg-white rounded-2xl border border-gray-200 py-20 text-center">

          <h2 className="text-2xl font-semibold text-gray-300">
            No Products Found
          </h2>

        </div>

      )}

    </div>
  );
};

export default ProductGrid;