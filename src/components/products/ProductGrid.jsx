import React from "react";

import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {

  return (

    <div className="flex-1">

      {products.length > 0 ? (

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

          {products.map((item) => (

            <ProductCard
              key={item.id}
              item={item}
            />

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