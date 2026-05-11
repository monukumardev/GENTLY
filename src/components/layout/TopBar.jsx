import React from "react";
import { Mail, Globe, ChevronDown } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 font-sans">
      {/* 
         Container: 
         - justify-center on mobile (centers the sale text)
         - justify-between on desktop (spreads items out)
      */}
      <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-center lg:justify-between text-[12px] md:text-[13px] text-gray-600">

        {/* --- 1. LEFT SIDE (Hidden on mobile/tablet, visible on LG screens) --- */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand-brandRed transition-colors duration-300">
            <Mail size={15} />
            <span className="hidden xl:inline">Support</span>
          </div>
          
          <div className="h-4 w-[1px] bg-gray-300"></div>
          
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand-brandRed transition-colors duration-300">
            <Globe size={15} />
            <span>Store Location</span>
          </div>
        </div>

        {/* --- 2. CENTER: PROMOTION TEXT (Always visible, text centered on mobile) --- */}
        <div className="font-medium text-center">
          <span className="text-gray-400 mr-1 hidden sm:inline">Summer Season Sale:</span>
          Get Up To 25% OFF -
          <a href="/shop" className="ml-1 text-black underline hover:text-brand-brandRed underline-offset-4 font-bold transition-colors"> 
            Shop Now
          </a>
        </div>

        {/* --- 3. RIGHT SIDE (Hidden on mobile, visible from MD screens up) --- */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {/* Quick Links - hidden on smaller desktops to save space, visible on XL */}
          <div className="hidden xl:flex items-center gap-4 border-r border-gray-200 pr-4 mr-1">
            <a href="/about" className="hover:text-brand-brandRed transition-colors">About</a>
            <a href="/faq" className="hover:text-brand-brandRed transition-colors">FAQs</a>
          </div>

          <a href="/contact" className="hover:text-brand-brandRed transition-colors">Contact Us</a>

          {/* Language Dropdown */}
          <div className="flex items-center gap-1 cursor-pointer bg-slate-900 text-white px-2 py-1 rounded hover:bg-brand-brandRed transition-all duration-300">
            <span className="text-[10px] font-bold tracking-tighter">EN</span>
            <ChevronDown size={12} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;