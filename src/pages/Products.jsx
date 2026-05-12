import React from "react"; // Removed unused useState
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import FilterSidebar from "../components/filters/FilterSidebar";

const Products = () => {
  const { category } = useParams();

  const categoryProducts = products.filter(
    (item) => item.type.toLowerCase() === category?.toLowerCase(),
  );

  return (
    <section className="min-h-screen bg-[#fafafa] py-6 md:py-2">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between border-b border-gray-100 py-3 mb-6">
          {/* Left Group */}
          <div className="flex items-center gap-3">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gray-400">
              <Link to="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500 font-medium capitalize">
                {category}
              </span>
            </nav>

            {/* Vertical Divider */}
            <div className="h-4 w-[1px] bg-gray-200"></div>

            {/* Title  */}
            <h1 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              {category}{" "}
              <span className="font-light text-gray-500">Collection</span>
            </h1>
          </div>

          {/* Right Group */}
          <div className="text-[11px]  tracking-widest text-gray-400 font-semibold">
            Products :{" "}
            <span className="text-gray-900">{categoryProducts.length}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <FilterSidebar/>
        </div>
      </div>
    </section>
  );
};

export default Products;
