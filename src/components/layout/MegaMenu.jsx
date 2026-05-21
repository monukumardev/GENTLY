import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ data }) => {
  return (
    <div
      className="
        absolute
        top-full
        left-0
        mt-2
        w-[min(90vw,850px)]
        max-w-[850px]
        min-w-[320px]
        max-h-[80vh]
        overflow-y-auto
        bg-white/95
        backdrop-blur-md
        rounded-[2rem]
        border
        border-gray-100/80
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]
        p-9
        opacity-0
        invisible
        translate-y-2
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        transition-all
        duration-300
        ease-out
        z-50
      "
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-8">
        
        {/* LEFT 3 COLUMNS */}
        <div className="col-span-3 grid grid-cols-3 gap-8">
          {data.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to="/products/new"
                      className="
                        inline-block
                        text-[14px]
                        font-medium
                        text-gray-600
                        hover:text-red-500
                        hover:translate-x-1
                        transition-all
                        duration-200
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

        {/* RIGHT COLUMN: Marketing Card */}
        <div
          className="
            relative
            overflow-hidden
            bg-gradient-to-br
            from-gray-950
            via-gray-900
            to-black
            rounded-2xl
            p-6
            text-white
            flex
            flex-col
            justify-between
            min-h-[280px]
            shadow-xl
          "
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-red-400">
              New Arrival
            </span>

            <h2 className="text-xl font-black mt-4 leading-tight tracking-tight">
              Summer Streetwear 2026
            </h2>

            <p className="text-xs text-gray-400 mt-2.5 leading-relaxed font-light">
              Discover oversized fits, premium essentials, and modern fashion updates.
            </p>
          </div>

          <button
            className="
              relative
              z-10
              mt-6
              w-full
              bg-red-500
              hover:bg-red-600
              active:scale-[0.98]
              py-3
              rounded-xl
              text-xs
              font-bold
              uppercase
              tracking-wider
              transition-all
              duration-200
              shadow-lg
              shadow-red-500/20
            "
          >
            Explore Collection
          </button>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;