import OversizedTShirt from "../assets/Oversized-T-Shirt.webp";
import StreetHoddie from "../assets/StreetHoddie.webp";
import denimJacket from "../assets/DenimJacket.webp";
import cargo from "../assets/Cargo.webp";
import sweatshirt from "../assets/sweatshirt.webp";
import FlaidShirt from "../assets/Flannel-Plaid-Shirt.webp";
import BikerJacket from "../assets/Leather-Biker-jacket.webp";
import PufferVest from "../assets/Puffer-Vest.webp";

const products = [
  {
    id: 1,
    name: "Oversized T-Shirt",
    type: "tshirt",
    price: 999,
    oldPrice: 1499,
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
    category: "new",
    image: OversizedTShirt,
  },

  {
    id: 2,
    name: "Street Hoodie",
    type: "hoodie",
    price: 1999,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 87,
    badge: "New",
    category: "new",
    image: StreetHoddie,
  },

  {
    id: 3,
    name: "Vintage Denim Jacket",
    type: "jacket",
    price: 3499,
    oldPrice: 4999,
    rating: 4.4,
    reviews: 52,
    badge: "Trending",
    category: "new",
    image: denimJacket,
  },

  {
    id: 4,
    name: "Cargo Joggers",
    type: "jeans",
    price: 1599,
    oldPrice: 2199,
    rating: 4.3,
    reviews: 76,
    badge: "Hot",
    category: "new",
    image: cargo,
  },

  {
    id: 5,
    name: "Graphic Sweatshirt",
    type: "sweatshirt",
    price: 1299,
    oldPrice: 1799,
    rating: 4.6,
    reviews: 41,
    badge: "Popular",
    category: "new",
    image: sweatshirt,
  },

  {
    id: 6,
    name: "Flannel Plaid Shirt",
    type: "shirt",
    price: 1199,
    oldPrice: 1699,
    rating: 4.2,
    reviews: 33,
    badge: "Limited",
    category: "new",
    image: FlaidShirt,
  },

  {
    id: 7,
    name: "Leather Biker Jacket",
    type: "jacket",
    price: 4999,
    oldPrice: 6999,
    rating: 4.9,
    reviews: 96,
    badge: "Premium",
    category: "new",
    image: BikerJacket,
  },

  {
    id: 8,
    name: "Puffer Vest",
    type: "jacket",
    price: 2199,
    oldPrice: 2999,
    rating: 4.4,
    reviews: 59,
    badge: "Sale",
    category: "new",
    image: PufferVest,
  },
];

export default products;