import React from "react";

import { useSelector } from "react-redux";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {

  const { cartItems } = useSelector((state) => state.cart);

  return (

    <section className="min-h-screen bg-[#fafafa] py-10">

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* PAGE TITLE */}
        <div className="mb-10">

          <h1 className="text-4xl font-black text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-gray-400 mt-2">
            Review your selected products
          </p>

        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="bg-white rounded-3xl border py-24 text-center">

            <h2 className="text-3xl font-bold text-gray-300">
              Your Cart Is Empty
            </h2>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-5">

              {cartItems.map((item) => (

                <CartItem
                  key={item.id}
                  item={item}
                />

              ))}

            </div>

            {/* SUMMARY */}
            <CartSummary />

          </div>

        )}

      </div>

    </section>

  );
};

export default Cart;