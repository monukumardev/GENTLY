import React from "react";
import { Truck, RotateCcw, Headset, CircleDollarSign } from "lucide-react";

const features = [
  {
    icon: <Truck size={28} strokeWidth={1.8} />,
    title: "Free Shipping",
    description: "On all orders across India",
  },
  {
    icon: <RotateCcw size={28} strokeWidth={1.8} />,
    title: "Easy Returns",
    description: "7 days return policy",
  },
  {
    icon: <Headset size={28} strokeWidth={1.8} />,
    title: "24/7 Support",
    description: "We’re here to help anytime",
  },
  {
    icon: <CircleDollarSign size={28} strokeWidth={1.8} />,
    title: "Secure Payment",
    description: "100% secure transactions",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-10">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              
              {/* Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-50 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm md:text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;