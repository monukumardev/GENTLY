import React from "react";

import { useSelector } from "react-redux";

const CartSummary = () => {

  const { cartItems } = useSelector((state) => state.cart);

  // SUBTOTAL
  const subtotal = cartItems.reduce(

    (acc, item) => acc + item.price * item.quantity,

    0

  );

  // SHIPPING
  const shipping = subtotal > 3000 ? 0 : 99;

  // TAX
  const tax = Math.floor(subtotal * 0.05);

  // TOTAL
  const total = subtotal + shipping + tax;

  return (

    <div className="bg-white border rounded-3xl p-6 h-fit sticky top-24">

      {/* TITLE */}
      <h2 className="text-3xl font-black text-gray-900 mb-8">

        Order Summary

      </h2>

      {/* SUMMARY ITEMS */}
      <div className="space-y-5">

        {/* SUBTOTAL */}
        <div className="flex items-center justify-between">

          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-semibold text-gray-900">

            ₹{subtotal}

          </span>

        </div>

        {/* SHIPPING */}
        <div className="flex items-center justify-between">

          <span className="text-gray-500">
            Shipping
          </span>

          <span className="font-semibold text-gray-900">

            {shipping === 0 ? "Free" : `₹${shipping}`}

          </span>

        </div>

        {/* TAX */}
        <div className="flex items-center justify-between">

          <span className="text-gray-500">
            Tax
          </span>

          <span className="font-semibold text-gray-900">

            ₹{tax}

          </span>

        </div>

        {/* DIVIDER */}
        <div className="border-t pt-5 flex items-center justify-between">

          <span className="text-xl font-bold text-gray-900">
            Total
          </span>

          <span className="text-3xl font-black text-red-500">

            ₹{total}

          </span>

        </div>

      </div>

      {/* CHECKOUT BUTTON */}
      <button className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold text-lg transition">

        Proceed To Checkout

      </button>

      {/* EXTRA INFO */}
      <div className="mt-6 space-y-3 text-sm text-gray-500">

        <div className="flex items-center justify-between">

          <span>
            Delivery
          </span>

          <span className="font-medium text-gray-900">
            3-5 Days
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span>
            Return Policy
          </span>

          <span className="font-medium text-gray-900">
            7 Days Return
          </span>

        </div>

      </div>

    </div>

  );
};

export default CartSummary;