import { Routes, Route } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products"; // ✅ import this

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
      </Routes>
      {/* 🔥 ROUTING END */}



      <Footer />




      

    </div>
  );
}

export default App;