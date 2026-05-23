import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";
import { openCart } from "../../redux/slices/uiSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slices/wishlistSlice";

import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlist);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* IMAGE SECTION */}
        <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
          {/* PRODUCT IMAGE */}
          <Link
            to={`/product/${product.slug}`}
            className="block h-72 flex items-center justify-center overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain p-5 group-hover:scale-110 transition duration-700"
            />
          </Link>

          {/* TOP ACTIONS */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-20">
            {/* BADGE */}
            {product.badge && (
              <span className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
                {product.badge}
              </span>
            )}

            {/* WISHLIST */}
            <button
              onClick={() => {
                if (isWishlisted) {
                  dispatch(removeFromWishlist(product.id));
                } else {
                  dispatch(addToWishlist(product));
                }
              }}
              className={`
    w-9 h-9 rounded-full flex items-center justify-center shadow transition
    ${
      isWishlisted
        ? "bg-red-500 text-white"
        : "bg-white hover:bg-red-500 hover:text-white"
    }
  `}
            >
              <Heart size={15} className={isWishlisted ? "fill-white" : ""} />
            </button>
          </div>

          {/* QUICK VIEW */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="absolute bottom-4 left-4 right-4 translate-y-5 group-hover:translate-y-0 transition duration-300 z-20">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 shadow-lg">
                <Eye size={16} />
                Quick View
              </button>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="p-4 pb-0">
          {/* CATEGORY */}
          <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
            {product.subCategory}
          </p>

          {/* PRODUCT NAME */}
          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="text-[15px] font-semibold text-gray-800 line-clamp-1 group-hover:text-red-500 transition">
              {product.name}
            </h3>
          </Link>

          {/* RATINGS */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center flex-wrap gap-2 mt-3">
            <span className="text-xl font-bold text-gray-900">
              ₹{product.price}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="p-4 pt-0">
        <button
          onClick={() => {
            dispatch(addToCart(product));

            dispatch(openCart());
          }}
          className="w-full mt-4 bg-gray-900 hover:bg-red-500 text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition duration-300"
        >
          <ShoppingCart size={16} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
