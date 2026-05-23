import React from "react";

import { X } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import { closeCart } from "../../redux/slices/uiSlice";

const CartDrawer = () => {

  const dispatch = useDispatch();

  const { isCartOpen } = useSelector((state) => state.ui);

  const { cartItems } = useSelector((state) => state.cart);

  // TOTAL
  const total = cartItems.reduce(

    (acc, item) => acc + item.price * item.quantity,

    0

  );

  return (

    <>

      {/* OVERLAY */}
      <div
        onClick={() => dispatch(closeCart())}
        className={`
          fixed inset-0 bg-black/40 z-[998]
          transition-all duration-300
          ${isCartOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"}
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-full sm:w-[420px]
          bg-white z-[999]
          shadow-2xl
          transition-all duration-300
          flex flex-col
          ${isCartOpen
            ? "translate-x-0"
            : "translate-x-full"}
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b">

          <div>

            <h2 className="text-2xl font-black text-gray-900">
              Shopping Cart
            </h2>

            <p className="text-sm text-gray-400 mt-1">

              {cartItems.length} Items

            </p>

          </div>

          {/* CLOSE */}
          <button
            onClick={() => dispatch(closeCart())}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
          >

            <X size={22} />

          </button>

        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">

          {cartItems.length > 0 ? (

            cartItems.map((item) => (

              <div
                key={item.id}
                className="flex gap-4 border rounded-2xl p-3"
              >

                {/* IMAGE */}
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain p-2"
                  />

                </div>

                {/* INFO */}
                <div className="flex-1">

                  <h3 className="font-semibold text-gray-900 line-clamp-1">

                    {item.name}

                  </h3>

                  <p className="text-sm text-gray-400 mt-1">

                    Qty: {item.quantity}

                  </p>

                  <div className="mt-3 font-bold text-red-500">

                    ₹{item.price * item.quantity}

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="h-full flex items-center justify-center">

              <h2 className="text-2xl font-bold text-gray-300">

                Cart Is Empty

              </h2>

            </div>

          )}

        </div>

        {/* FOOTER */}
        <div className="border-t p-5">

          {/* TOTAL */}
          <div className="flex items-center justify-between mb-5">

            <span className="text-lg text-gray-500">
              Total
            </span>

            <span className="text-3xl font-black text-gray-900">

              ₹{total}

            </span>

          </div>

          {/* BUTTON */}
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold transition">

            Checkout

          </button>

        </div>

      </div>

    </>

  );
};

export default CartDrawer;