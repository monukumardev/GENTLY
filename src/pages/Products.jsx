// ===============================================
// FILE: src/pages/Products.jsx
// ===============================================

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import products from "../data/products";

import FilterSidebar from "../components/filters/FilterSidebar";
import ProductGrid from "../components/products/ProductGrid";

const Products = () => {

  const { category } = useParams();

  // FILTER STATE
  const [selectedCategory, setSelectedCategory] = useState([]);

  // CATEGORY PRODUCTS
  const categoryProducts = products.filter(
    (item) => item.category.toLowerCase() === category?.toLowerCase()
  );

  // FILTERED PRODUCTS
  const filteredProducts = categoryProducts.filter((item) => {

    // SHOW ALL PRODUCTS
    if (selectedCategory.length === 0) {
      return true;
    }

    // FILTER PRODUCTS
    return selectedCategory.includes(item.type);

  });

  // HANDLE FILTER
  const handleCategoryChange = (value) => {

    if (selectedCategory.includes(value)) {

      setSelectedCategory(
        selectedCategory.filter((item) => item !== value)
      );

    } else {

      setSelectedCategory([...selectedCategory, value]);

    }
  };

  return (

    <section className="min-h-screen bg-[#fafafa] py-6 md:py-8">

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-400 mb-5">

          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>

          <span>/</span>

          <span className="text-gray-800 font-semibold capitalize">
            {category}
          </span>

        </div>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {category} <span className="text-red-500">Collection</span>
            </h1>

            <p className="text-sm text-gray-400 mt-2">
              Discover premium fashion crafted for modern streetwear culture.
            </p>

          </div>

          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            {filteredProducts.length} Products Available
          </div>

        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* FILTER */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />

          {/* PRODUCTS */}
          <ProductGrid products={filteredProducts} />

        </div>

      </div>

    </section>
  );
};

export default Products;