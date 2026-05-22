import { useState } from "react";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition ${
              selectedImage === img ? "border-red-500" : "border-gray-200"
            }`}
          >
            <img
              src={img}
              alt="product"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="h-[650px] flex-1 bg-white rounded-2xl border ">
        <div className="h-[650px] flex items-center justify-center overflow-hidden">
            <img src={selectedImage} alt={product.name} className="max-h-full object-contain hover:scale-105 transition duration-500"></img>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
