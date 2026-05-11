import { motion } from "framer-motion";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="w-full h-[75vh] md:h-[85vh] relative overflow-hidden">
      
      {/* Background Image with Zoom */}
      <motion.img
        src={heroImg}
        alt="Men Fashion"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          
          <div className="max-w-lg text-white">

            {/* Small Tag */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-widest mb-2 text-gray-200"
            >
              New Collection 2026
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Elevate Your Everyday Style
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-sm md:text-base text-gray-200"
            >
              Premium fashion curated for modern men. Discover the latest trends.
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded shadow hover:text-white hover:bg-red-500 transition"
            >
              Explore Collection →
            </motion.button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;