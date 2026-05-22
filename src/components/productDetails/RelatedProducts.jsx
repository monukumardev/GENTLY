// ===============================================
// FILE: src/components/productDetails/RelatedProducts.jsx
// ===============================================

import React from "react";

import products from "../../data/products";

import ProductCard from "../products/ProductCard";

const RelatedProducts = ({ currentProduct }) => {

  // RELATED PRODUCTS
  const relatedProducts = products.filter(

    (item) =>

      item.category === currentProduct.category &&
      item.id !== currentProduct.id

  );

  return (

    <section className="mt-20">

      {/* SECTION HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-sm uppercase tracking-[4px] text-red-500 font-semibold">
            You May Also Like
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Related Products
          </h2>

        </div>

      </div>

      {/* PRODUCT GRID */}
      {relatedProducts.length > 0 ? (

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

          {relatedProducts.slice(0, 4).map((item) => (

            <ProductCard
              key={item.id}
              product={item}
            />

          ))}

        </div>

      ) : (

        <div className="bg-white border rounded-3xl py-16 text-center">

          <h3 className="text-2xl font-bold text-gray-300">
            No Related Products Found
          </h3>

        </div>

      )}

    </section>
  );
};

export default RelatedProducts;