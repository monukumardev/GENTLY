import React, { useState } from "react";

const ProductTabs = ({ product }) => {

  const [activeTab, setActiveTab] = useState("description");

  // IMPORTANT FIX
  if (!product) {
    return null;
  }

  return (

    <div className="bg-white rounded-3xl border p-6 mt-10">

      {/* TAB BUTTONS */}
      <div className="flex gap-4 border-b pb-4">

        <button
          onClick={() => setActiveTab("description")}
          className={`px-5 py-2 rounded-xl font-semibold transition ${
            activeTab === "description"
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("details")}
          className={`px-5 py-2 rounded-xl font-semibold transition ${
            activeTab === "details"
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Details
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-5 py-2 rounded-xl font-semibold transition ${
            activeTab === "reviews"
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Reviews
        </button>

      </div>

      {/* TAB CONTENT */}
      <div className="mt-6">

        {activeTab === "description" && (
          <p className="text-gray-600 leading-7">
            {product.description || "No description available"}
          </p>
        )}

        {activeTab === "details" && (

          <div className="space-y-3">

            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-500">Brand</span>
              <span className="font-semibold">
                {product.brand || "Vantix"}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-500">Material</span>
              <span className="font-semibold">
                {product.material || "Cotton"}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-500">Category</span>
              <span className="font-semibold">
                {product.category}
              </span>
            </div>

          </div>

        )}

        {activeTab === "reviews" && (

          <div>
            <h3 className="font-semibold text-lg">
              Customer Reviews
            </h3>

            <p className="text-gray-500 mt-2">
              ({product.reviews}) Reviews Available
            </p>
          </div>

        )}

      </div>

    </div>
  );
};

export default ProductTabs;