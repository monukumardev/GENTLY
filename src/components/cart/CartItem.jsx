import React from "react";
import QuantityButton from "./QuantityButton";


import { Minus, Plus, Trash2 } from "lucide-react";

import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border rounded-3xl p-5 flex flex-col md:flex-row gap-5">
      {/* PRODUCT IMAGE */}
      <div className="w-full md:w-[180px] h-[220px] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full object-contain p-4"
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* CATEGORY */}
          <p className="text-sm uppercase tracking-wider text-red-500 font-semibold">
            {item.subCategory}
          </p>

          {/* NAME */}
          <h2 className="text-2xl font-bold text-gray-900 mt-2">{item.name}</h2>

          {/* PRICE */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-3xl font-black text-gray-900">
              ₹{item.price}
            </span>

            <span className="text-lg text-gray-400 line-through">
              ₹{item.oldPrice}
            </span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mt-6">
          {/* QUANTITY */}
          <QuantityButton
            quantity={item.quantity}
            onIncrease={() => dispatch(increaseQuantity(item.id))}
            onDecrease={() => dispatch(decreaseQuantity(item.id))}
          />

          {/* REMOVE */}
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold transition"
          >
            <Trash2 size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
