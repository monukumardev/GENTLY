import React, { useState } from "react";

import {
  Star,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";

const ProductInfo = ({ product }) => {

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0]
  );

  const [quantity, setQuantity] = useState(1);

  return (

    <div>

      {/* BRAND */}
      <p className="text-sm uppercase tracking-[3px] text-red-500 font-bold">
        {product.brand}
      </p>

      {/* TITLE */}
      <h1 className="text-xl md:text-m font-black text-gray-900 mt-3 leading-tight">

        {product.name}

      </h1>

      {/* RATING */}
      <div className="flex items-center gap-4 mt-2">

        <div className="flex items-center gap-1">

          {[...Array(5)].map((_, i) => (

            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />

          ))}

        </div>

        <span className="text-gray-500 text-sm">
          {product.rating} ({product.reviews} Reviews)
        </span>

      </div>

      {/* PRICE */}
      <div className="flex items-center flex-wrap gap-4 mt-2">

        <span className="text-xl text-gray-400 line-through">
          ₹{product.oldPrice}
        </span>

        <h2 className="text-lg font-black text-gray-900">
          ₹{product.price}
        </h2>

        

        <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-bold">
          {product.discount}% OFF
        </span>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-500 leading-8 mt-2">

        {product.description}

      </p>

      {/* SIZE */}
      <div className="mt-2">

        <div className="flex items-center justify-between mb-4">

          <h3 className="font-bold text-gray-700 text-sm">
            Select Size
          </h3>

          <button className="text-sm text-red-500 font-medium">
            Size Guide
          </button>

        </div>

        <div className="flex flex-wrap gap-3">

          {product.sizes?.map((size, index) => (

            <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 rounded-lg text-[12px] border font-semibold transition ${
                selectedSize === size
                  ? "bg-red-500 border-red-500 text-white"
                  : "border-gray-300 hover:border-red-500 hover:text-red-500"
              }`}
            >
              {size}
            </button>

          ))}

        </div>

      </div>

      {/* QUANTITY */}
      <div className="mt-2">

        <h3 className="font-bold text-gray-900 text-sm mb-2">
          Quantity
        </h3>

        <div className="flex items-center border rounded-lg w-fit overflow-hidden">

          <button
            onClick={() =>
              quantity > 1 && setQuantity(quantity - 1)
            }
            className="w-10 h-8 flex items-center justify-center hover:bg-gray-100 transition"
          >

            <Minus size={14} />

          </button>

          <div className="w-8 h text-center font-semibold text-sm">
            {quantity}
          </div>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition"
          >

            <Plus size={14} />

          </button>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">

        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-5 rounded-lg font-bold text-sm transition">

          Add To Cart

        </button>

        <button className="flex-1 bg-gray-900 hover:bg-black text-white py-5 rounded-lg font-bold text-lg transition">

          Buy Now

        </button>

        <button className="w-16 h-16 border rounded-lg flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">

          <Heart size={22} />

        </button>

      </div>

      {/* DELIVERY INFO */}
      <div className="bg-white border rounded-3xl p-6 mt-8 space-y-6">

        <div className="flex items-center gap-4">

          <Truck size={24} className="text-red-500" />

          <div>

            <h4 className="font-bold text-gray-900">
              Free Delivery
            </h4>

            <p className="text-sm text-gray-500">
              Delivery within 3-5 working days
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <RotateCcw size={24} className="text-red-500" />

          <div>

            <h4 className="font-bold text-gray-900">
              7 Days Return
            </h4>

            <p className="text-sm text-gray-500">
              Easy return & refund available
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <ShieldCheck size={24} className="text-red-500" />

          <div>

            <h4 className="font-bold text-gray-900">
              Secure Payment
            </h4>

            <p className="text-sm text-gray-500">
              100% secure payment protection
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductInfo;