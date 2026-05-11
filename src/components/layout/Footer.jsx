import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LocalShipping,
  VerifiedUser,
  Apple,
  Shop,
} from "@mui/icons-material";

// Configuration for easy updates
const shopLinks = ["Men", "Streetwear", "Footwear", "Accessories", "Grooming", "Trending", "Gift Cards", "GENTLY Club"];
const policyLinks = ["Contact Us", "FAQ", "Terms & Conditions", "Track Orders", "Shipping", "Cancellation", "Privacy Policy"];
const usefulLinks = ["Blog", "Careers", "Site Map", "Corporate Info", "Fashion Tips", "Style Guide"];
const searchTags = [
  "Oversized T-Shirts", "Sneakers", "Cargo Pants", "Caps", "Sunglasses", 
  "Hoodies", "Belts", "Wallets", "Streetwear", "Joggers", 
  "Formal Shoes", "Watches", "Leather Jackets", "Gym Wear", 
  "Denim Jeans", "Perfumes", "Boots", "Minimal Shirts"
];

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 mt-20 font-sans antialiased">
      {/* 1400px Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- SECTION 1: MAIN NAVIGATION GRID --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-gray-800">
          
          {/* Subtle Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 blur-[100px] pointer-events-none"></div>

          {/* Column Logic - Reusable Link List */}
          {[
            { title: "Online Shopping", links: shopLinks },
            { title: "Customer Policies", links: policyLinks },
            { title: "Useful Links", links: usefulLinks }
          ].map((col) => (
            <div key={col.title} className="relative z-10">
              <h3 className="text-white font-black text-[11px] uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link} className="group flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 text-[14px]">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-red-500 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* APP DOWNLOAD & SOCIAL */}
          <div className="relative z-10">
            <h3 className="text-white font-black text-[11px] uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              Experience GENTLY
            </h3>
            <div className="flex flex-col gap-4">
              <AppButton icon={<Apple />} sub="Download on the" main="App Store" />
              <AppButton icon={<Shop />} sub="Get it on" main="Google Play" />
            </div>

            <div className="mt-12">
              <h4 className="text-white text-[10px] font-black mb-5 uppercase tracking-[0.2em] opacity-60">
                Keep In Touch
              </h4>
              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Twitter, YouTube].map((Icon, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full bg-[#1f2937] border border-gray-800 flex items-center justify-center hover:bg-red-500 hover:border-red-500 text-white transition-all duration-300 cursor-pointer hover:-translate-y-1">
                    <Icon fontSize="small" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TRUST SIGNALS */}
          <div className="relative z-10 lg:pl-4">
            <h3 className="text-white font-black text-[11px] uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              Our Promise
            </h3>
            <div className="space-y-5">
              <PromiseCard icon={<VerifiedUser />} title="100% Original" desc="Authentic premium products." />
              <PromiseCard icon={<LocalShipping />} title="Easy Returns" desc="14 day exchange policy." />
            </div>
          </div>
        </div>

        {/* --- SECTION 2: POPULAR SEARCHES --- */}
        <div className="py-14 border-b border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            <h3 className="text-white font-black text-[13px] uppercase tracking-widest whitespace-nowrap">
              Popular Searches
            </h3>
            <div className="hidden md:block w-full h-[1px] bg-gray-800"></div>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {searchTags.map((tag) => (
              <button key={tag} className="px-5 py-2 rounded-full border border-gray-800 bg-[#1f2937]/50 text-gray-400 text-[13px] hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300">
                {tag}
              </button>
            ))}
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-500">
            <p>Trending fashion searches updated daily for modern style.</p>
            <button className="text-red-500 hover:text-red-400 font-bold tracking-widest uppercase text-[11px] transition-colors">
              Explore All Trends →
            </button>
          </div>
        </div>

        {/* --- SECTION 3: SEO CONTENT --- */}
        <div className="py-20 border-b border-gray-800">
          <div className="max-w-[1000px] mb-16">
            <h3 className="text-white font-black text-xl md:text-2xl mb-6 tracking-tighter uppercase italic">
              GENTLY: India's Premium Streetwear Destination
            </h3>
            <p className="text-gray-500 text-[15px] leading-8">
              We bring you the latest global trends, from oversized silhouettes to minimalist essentials. 
              Discover trending collections designed for modern style, premium comfort, and individual expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <SEOCard title="Smart Men's Clothing" text="Signature oversized t-shirts, heavy-weight hoodies, and utility cargos curated for the modern lifestyle." />
            <SEOCard title="Fashionable Footwear" text="High-traction sneakers and handcrafted loafers that balance aesthetics with extreme durability." />
            <SEOCard title="Stylish Accessories" text="Polarised sunglasses, streetwear-inspired caps, and precision-engineered watches." />
            <SEOCard title="Global Experience" text="Secure encrypted payments, lightning-fast delivery, and a hassle-free 14-day return policy." />
          </div>
        </div>

        {/* --- SECTION 4: FINAL BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm">
            Questions? <span className="text-red-500 cursor-pointer font-bold hover:underline ml-1">Contact Us</span>
          </p>
          <p className="text-[13px] font-medium tracking-wide">
            © 2026 GENTLY PVT LTD. All rights reserved.
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            A Premium Fashion Brand
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Sub-Components for Clean Code ---

const AppButton = ({ icon, sub, main }) => (
  <a href="#" className="group relative overflow-hidden flex items-center gap-4 bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-800 rounded-2xl px-5 py-3 hover:border-red-500 transition-all duration-500 hover:-translate-y-1">
    <div className="text-white group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <div>
      <p className="text-[9px] text-gray-500 uppercase tracking-widest leading-none mb-1">{sub}</p>
      <h4 className="text-sm font-bold text-white leading-none">{main}</h4>
    </div>
  </a>
);

const PromiseCard = ({ icon, title, desc }) => (
  <div className="group flex gap-4 items-center bg-gray-900/30 p-4 rounded-2xl border border-transparent hover:border-gray-800 transition-all duration-300">
    <div className="w-10 h-10 rounded-xl bg-[#1f2937] flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold text-[13px] uppercase tracking-tight">{title}</h4>
      <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
    </div>
  </div>
);

const SEOCard = ({ title, text }) => (
  <div className="relative pl-8 border-l-2 border-red-500/20 hover:border-red-500 transition-colors duration-500">
    <h4 className="text-white font-bold text-[14px] mb-3 uppercase tracking-widest">{title}</h4>
    <p className="text-gray-500 text-[13px] leading-7 font-medium">{text}</p>
  </div>
);

export default Footer;