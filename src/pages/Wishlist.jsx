import React from "react";

import { useSelector } from "react-redux";

import ProductCard from "../components/products/ProductCard";

const Wishlist = () => {

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  );

  return (

    <section className="min-h-screen bg-[#fafafa] py-10">

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-10">

          <p className="text-sm uppercase tracking-[4px] text-red-500 font-semibold">
            Your Favorites
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">

            Wishlist

          </h1>

          <p className="text-gray-400 mt-3">

            Save your favorite products for later.

          </p>

        </div>

        {/* PRODUCTS */}
        {wishlistItems.length > 0 ? (

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

            {wishlistItems.map((item) => (

              <ProductCard
                key={item.id}
                product={item}
              />

            ))}

          </div>

        ) : (

          <div className="bg-white border rounded-3xl py-24 text-center">

            <h2 className="text-3xl font-black text-gray-300">

              Wishlist Is Empty

            </h2>

            <p className="text-gray-400 mt-3">

              Start adding products you love ❤️

            </p>

          </div>

        )}

      </div>

    </section>

  );
};

export default Wishlist;