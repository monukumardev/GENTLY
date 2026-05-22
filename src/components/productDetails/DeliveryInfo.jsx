import React from "react";

import {
  Truck,
  RotateCcw,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const DeliveryInfo = ({ product }) => {

  return (

    <div className="bg-white border border-gray-200 rounded-3xl p-6 mt-8">

      {/* TITLE */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Delivery & Services
      </h3>

      <div className="space-y-5">

        {/* DELIVERY */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">

            <Truck size={22} />

          </div>

          <div>

            <h4 className="font-semibold text-gray-900">
              Free Delivery
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              Free delivery available across India within 3-5 business days.
            </p>

          </div>

        </div>

        {/* RETURN */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">

            <RotateCcw size={22} />

          </div>

          <div>

            <h4 className="font-semibold text-gray-900">
              Easy Returns
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              7 days easy return and exchange available on all orders.
            </p>

          </div>

        </div>

        {/* AUTHENTIC */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500">

            <ShieldCheck size={22} />

          </div>

          <div>

            <h4 className="font-semibold text-gray-900">
              100% Original Product
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              All products are verified and quality checked before shipping.
            </p>

          </div>

        </div>

        {/* MATERIAL */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-500">

            <BadgeCheck size={22} />

          </div>

          <div>

            <h4 className="font-semibold text-gray-900">
              Material
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              {product.material}
            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default DeliveryInfo;