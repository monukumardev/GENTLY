import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({product}) => {
    return (
        <div className="flex items-center flex-wrap gap-2 text-sm text-gray-800 mb-2">
            <Link to="/" className="hover:text-red-500 transition">Home</Link>
            <ChevronRight size={16}/>

            <Link to={'/products/${product.category}'} className="hover:text-red-500 transition capitalize">{product.category}</Link>
            <ChevronRight size={16}/>

            <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
    );
};




export default Breadcrumb;
