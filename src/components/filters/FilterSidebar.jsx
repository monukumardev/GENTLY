// ===============================================
// FILE: src/components/filters/FilterSidebar.jsx
// ===============================================

import React from "react";

const FilterSidebar = ({
  selectedCategory,
  handleCategoryChange,
}) => {

  return (

    <div className="w-full lg:w-[280px] bg-white rounded-2xl border border-gray-200 p-5 h-fit sticky top-24">

      {/* HEADER */}
      <div className="flex items-center justify-between pb-4 border-b">

        <h2 className="text-lg font-bold text-gray-900">
          Filters
        </h2>

        <button className="text-sm text-red-500 font-medium">
          Clear All
        </button>

      </div>

      {/* PRODUCT TYPE */}
      <div className="py-5 border-b">

        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
          Product Type
        </h3>

        <div className="space-y-4">

          {/* TSHIRT */}
          <label className="flex items-center gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={selectedCategory.includes("tshirt")}
              onChange={() => handleCategoryChange("tshirt")}
            />

            <span className="text-sm text-gray-700">
              T-Shirts
            </span>

          </label>

          {/* HOODIE */}
          <label className="flex items-center gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={selectedCategory.includes("hoodie")}
              onChange={() => handleCategoryChange("hoodie")}
            />

            <span className="text-sm text-gray-700">
              Hoodies
            </span>

          </label>

          {/* JACKET */}
          <label className="flex items-center gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={selectedCategory.includes("jacket")}
              onChange={() => handleCategoryChange("jacket")}
            />

            <span className="text-sm text-gray-700">
              Jackets
            </span>

          </label>

          {/* JOGGER */}
          <label className="flex items-center gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={selectedCategory.includes("jogger")}
              onChange={() => handleCategoryChange("jogger")}
            />

            <span className="text-sm text-gray-700">
              Joggers
            </span>

          </label>

        </div>

      </div>

    </div>
  );
};

export default FilterSidebar;