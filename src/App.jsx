import { Routes, Route } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products"; 
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CartDrawer from "./components/cart/CartDrawer";
import Wishlist from "./pages/Wishlist";


function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Navbar />
      





      {/* 🔥 ROUTING START */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic category route */}
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      {/* 🔥 ROUTING END */}

      <CartDrawer />

      <Footer />




      

    </div>
  );
}

export default App;