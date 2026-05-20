import React from "react";
import { useParams } from "react-router-dom";

import products from "../data/products";

const ProductDetails = () => {

  const { slug } = useParams();

  // FIND PRODUCT
  const product = products.find(
    (item) => item.slug === slug
  );

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">
          Product Not Found
        </h2>
      </div>
    );
  }

  return (

    <section className="min-h-screen bg-[#fafafa] py-10">

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <div className="bg-white rounded-3xl p-6 border">

            <div className="h-[500px] flex items-center justify-center">

              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />

            </div>

          </div>

          {/* RIGHT INFO */}
          <div>

            {/* CATEGORY */}
            <p className="text-sm uppercase tracking-widest text-red-500 font-semibold">
              {product.category}
            </p>

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-gray-900 mt-3">
              {product.name}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-3 mt-4">

              <div className="flex text-yellow-400 text-lg">
                ★★★★★
              </div>

              <span className="text-gray-500">
                ({product.reviews} Reviews)
              </span>

            </div>

            {/* PRICE */}
            <div className="flex items-center gap-4 mt-6">

              <span className="text-4xl font-black text-gray-900">
                ₹{product.price}
              </span>

              <span className="text-xl text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                {product.discount}% OFF
              </span>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-7 mt-6">
              {product.description}
            </p>

            {/* SIZE */}
            <div className="mt-8">

              <h3 className="font-bold text-gray-900 mb-3">
                Select Size
              </h3>

              <div className="flex gap-3">

                {product.sizes?.map((size, index) => (

                  <button
                    key={index}
                    className="w-12 h-12 border rounded-xl hover:border-red-500 hover:text-red-500 font-semibold transition"
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-10">

              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold text-lg transition">
                Add To Cart
              </button>

              <button className="flex-1 bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-semibold text-lg transition">
                Buy Now
              </button>

            </div>

            {/* DELIVERY */}
            <div className="bg-white border rounded-2xl p-5 mt-10 space-y-3">

              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-semibold text-gray-900">
                  Free Delivery Available
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  Return Policy
                </span>

                <span className="font-semibold text-gray-900">
                  7 Days Return
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  Material
                </span>

                <span className="font-semibold text-gray-900">
                  {product.material}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;