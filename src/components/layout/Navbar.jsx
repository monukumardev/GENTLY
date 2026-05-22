import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MegaMenu from "./MegaMenu";
import menuData from "../../data/menuData";

import { Badge, IconButton, Button, Tooltip, Stack } from "@mui/material";

import {
  PersonOutline,
  FavoriteBorder,
  ShoppingBagOutlined,
  CompareArrows,
  Search as SearchIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const badgeStyle = {
    "& .MuiBadge-badge": {
      backgroundColor: "#ff5252",
      color: "white",
      fontSize: "10px",
      height: "18px",
      minWidth: "14px",
      border: "2px solid white",
    },
  };

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <IconButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        {/* LOGO */}
        <div>
          <Link
            to="/"
            className="text-xl md:text-2xl text-red-500 font-black tracking-tight uppercase"
          >
            GENTLY
          </Link>
        </div>

        {/* NAV LINKS */}
        {/* 1. Add 'relative' here so the mega menus align to the entire bar */}
        <ul className="relative hidden lg:flex items-center gap-6 text-[12px] font-semibold uppercase tracking-wide text-gray-800">
          {/* New Drop */}
          <li className="py-5">
            <Link to="/products/new" className="hover:text-red-500">
              New Drops
            </Link>
          </li>

          {/* STYLE - Notice 'relative' is REMOVED from <li>, but 'group' stays */}
          <li className="group py-5">
            <Link to="/products/new" className="hover:text-red-500 transition">
              Style
            </Link>
            <MegaMenu data={menuData.style} />
          </li>

          {/* Footwear - 'relative' removed */}
          <li className="group py-5">
            <Link to="/products/footwear" className="hover:text-red-500">
              Footwear
            </Link>
            <MegaMenu data={menuData.footwear} />
          </li>

          {/* Accessories - 'relative' removed */}
          <li className="group py-5">
            <Link to="/products/accessories" className="hover:text-red-500">
              Accessories
            </Link>
            <MegaMenu data={menuData.accessories} />
          </li>

          {/* Grooming - 'relative' removed */}
          <li className="group py-5">
            <Link to="/products/grooming" className="hover:text-red-500">
              Grooming
            </Link>
            <MegaMenu data={menuData.grooming} />
          </li>

          {/* Trending */}
          <li>
            <Link to="/products/trending" className="hover:text-red-500">
              🔥 Trending
            </Link>
          </li>

          {/* Sale */}
          <li>
            <Link to="/products/sale" className="text-red-500 font-bold">
              Sale
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden xl:flex items-center bg-gray-50 px-3 py-1.5 rounded-lg w-80 border focus-within:border-red-500">
            <SearchIcon sx={{ fontSize: 18, color: "#9ca3af" }} />
            <input
              type="text"
              placeholder="Search sneakers, hoodies..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>

          <Stack direction="row" spacing={0.5}>
            <Button
              startIcon={<PersonOutline />}
              sx={{
                display: { xs: "none", sm: "flex" },
                fontSize: "12px",
                fontWeight: 700,
                color: "#374151",
                "&:hover": { color: "#ff5252" },
              }}
            >
              Login
            </Button>

            <Tooltip title="Compare">
              <IconButton>
                <Badge badgeContent={2} sx={badgeStyle}>
                  <CompareArrows />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Wishlist">
              <IconButton>
                <Badge badgeContent={0} showZero sx={badgeStyle}>
                  <FavoriteBorder />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Cart">
              <Link to="/cart">
                <IconButton>
                  <Badge badgeContent={totalQuantity} showZero sx={badgeStyle}>
                    <ShoppingBagOutlined />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>
          </Stack>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md animate-slideDown">
          <div className="p-5 space-y-3">
            {[
              { name: "New Drops", path: "/products/new" },
              { name: "Style", path: "/products/style" },
              { name: "Footwear", path: "/products/footwear" },
              { name: "Accessories", path: "/products/accessories" },
              { name: "Grooming", path: "/products/grooming" },
              { name: "Trending", path: "/products/trending" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-semibold bg-gray-50 hover:bg-red-50 hover:text-red-500 transition"
              >
                {item.name}
                <span className="text-sm">→</span>
              </Link>
            ))}

            {/* SALE SPECIAL CARD */}
            <Link
              to="/products/sale"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 px-4 py-3 rounded-lg bg-red-500 text-white font-bold text-center shadow hover:bg-red-600 transition"
            >
              Sale
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
