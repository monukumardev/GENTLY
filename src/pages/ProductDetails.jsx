import React from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "../components/productDetails/ProductGallery";
import Breadcrumb from "../components/common/Breadcrumb";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductTabs from "../components/productDetails/ProductTabs";
import RelatedProducts from "../components/productDetails/RelatedProducts";
import DeliveryInfo from "../components/productDetails/DeliveryInfo";




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

    <section className="min-h-screen bg-[#fafafa] py-2">

      <div className="max-w-[1400px] mx-auto px-4 md:px-2">
        <Breadcrumb product={product} />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          
          <ProductGallery product={product} /> 

          {/* RIGHT INFO */}
          <ProductInfo product={product} />

        </div>

        <DeliveryInfo product={product} />
        <ProductTabs product={product} />
        <RelatedProducts currentProduct={product} />

      </div>

    </section>
  );
};

export default ProductDetails;