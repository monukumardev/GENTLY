import React from "react";
// Remove Swiper imports

import sunglass from "../../assets/SunglassAIimage.jpg";
import cap from "../../assets/Caps.webp";
import belt from "../../assets/Belt.webp";
import wallet from "../../assets/Wallet.webp";
import tshirt from "../../assets/Tshirt.jpg";

const ACCESSORIES_DATA = [
  { category: "T-Shirts", image: tshirt, tagline: "Premium Cotton", count: "1245 Items" },
  { category: "Sunglasses", image: sunglass, tagline: "Polarized Series", count: "12 Items" },
  { category: "Caps", image: cap, tagline: "Urban Streetwear", count: "08 Items" },
  { category: "Wallets", image: wallet, tagline: "Genuine Leather", count: "20 Items" },
  { category: "Belts", image: belt, tagline: "Classic Handcrafted", count: "15 Items" },
  // Adding one more to make it an even 6 for the grid if needed
  { category: "New In", image: tshirt, tagline: "Latest Drops", count: "45 Items" },
  { category: "New In", image: tshirt, tagline: "Latest Drops", count: "45 Items" },
  { category: "New In", image: tshirt, tagline: "Latest Drops", count: "45 Items" },
  { category: "New In", image: tshirt, tagline: "Latest Drops", count: "45 Items" },
  { category: "New In", image: tshirt, tagline: "Latest Drops", count: "45 Items" },
  { category: "New In", image: tshirt, tagline: "Latest Drops", count: "45 Items" },
  { category: "New In", image: tshirt, tagline: "Latest Drops", count: "45 Items" },

];

const Categories = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-900 italic">
              Shop by <span className="text-red-600 underline decoration-gray-200 underline-offset-8">Category</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-medium">Curated essentials for the modern man.</p>
          </div>

          <button className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors">
            View All Collections →
          </button>
        </div>

        {/* --- GRID SYSTEM (2 Rows on Mobile, 3 Columns on Tablet, 6 Columns on Desktop) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">

          {ACCESSORIES_DATA.map((item, index) => (
            <div key={index} className="group relative cursor-pointer">

              {/* Card Container */}
              <div className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl">

                {/* Image Section - Fixed Aspect Ratio */}
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Item Count Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] font-bold px-2 py-1 rounded text-black z-10 uppercase tracking-tighter">
                    {item.count}
                  </div>

                  {/* Dark Overlay on Hover */}
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">

                    {/* Bottom Explore Button */}
                    <div className="absolute bottom-4 left-4 right-4 translate-y-6 group-hover:translate-y-0 transition-all duration-300">

                      <button className="w-full bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-full shadow-lg">

                        Explore

                      </button>

                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-4 bg-white border-x border-b border-gray-100 rounded-b-xl">
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                    {item.category}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                    {item.tagline}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;