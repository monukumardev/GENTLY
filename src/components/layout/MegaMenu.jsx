import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ data }) => {
  // Guard clause in case data isn't loaded or structured correctly
  if (!data || !Array.isArray(data)) return null;

  return (
    <div
      className="
        absolute
        top-full
        left-0
        right-0
        mx-auto
        w-full
        max-w-[950px]
        bg-white
        border-t border-b border-gray-100
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        opacity-0
        invisible
        translate-y-1
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        transition-all
        duration-200
        ease-out
        z-50
      "
    >
      <div className="p-7 flex flex-col gap-8">
        
        {/* TOP SECTION: Myntra-Style Columns Layout */}
        <div className="grid grid-cols-3 gap-6">
          {data.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index !== data.length - 1 ? "border-r border-gray-50 pr-4" : ""
              }`}
            >
              {/* Category Header */}
              <h3 className="text-[13px] font-bold tracking-wide text-red-500 mb-3.5">
                {section.title}
              </h3>

              {/* Sub-links */}
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/products/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="
                        block
                        text-[13px]
                        text-gray-600
                        hover:text-gray-900
                        hover:font-semibold
                        transition-colors
                        duration-150
                      "
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Full-Width Marketing Banner */}
        <div className="border-t border-gray-100 pt-5">
          <div
            className="
              relative
              w-full
              h-[100px]
              rounded-xl
              overflow-hidden
              bg-gradient-to-r
              from-gray-950
              via-gray-900
              to-red-950
              px-8
              flex
              items-center
              justify-between
              shadow-inner
            "
          >
            {/* Background design accents */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-500/10 to-transparent blur-xl pointer-events-none" />
            
            {/* Left text area */}
            <div className="relative z-10 flex items-center gap-6">
              <span className="bg-red-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm shadow-red-500/30">
                Trending Offer
              </span>
              <div>
                <h2 className="text-base font-black text-white tracking-tight leading-tight">
                  Summer Streetwear 2026
                </h2>
                <p className="text-xs text-gray-400 mt-0.5 font-light">
                  Discover oversized fits, premium essentials, and modern fashion upgrades.
                </p>
              </div>
            </div>

            {/* Right button area */}
            <button
              className="
                relative
                z-10
                bg-white
                text-gray-900
                hover:bg-gray-100
                active:scale-[0.98]
                px-6
                py-2.5
                rounded-lg
                text-xs
                font-bold
                uppercase
                tracking-wider
                transition-all
                duration-200
                shadow-md
              "
            >
              Explore Collection
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;