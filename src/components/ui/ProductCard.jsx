import { Link } from "react-router";
import { LuShoppingCart } from "react-icons/lu";

const ProductCard = ({ id, title, thumb, desc, price, onAddToCart }) => {
    return (
        <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-xl bg-white">
            <Link
                to={`/product/${id}`}
                className="group grow relative transition-all duration-300"
            >
                <div className="relative h-72 overflow-hidden">
                    <img
                        src={thumb}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={title}
                    />
                </div>
                <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-orange-500 transition-colors">
                        {title}
                    </h3>
                    <p className="text-stone-500 text-sm line-clamp-2 leading-relaxed">
                        {desc}
                    </p>
                </div>
            </Link>
            <div className="p-5 pt-0 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-stone-900">
                        ${price}
                    </span>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onAddToCart) onAddToCart();
                    }}
                    className="bg-stone-800 text-white py-2 px-8 rounded-full flex items-center gap-1 text-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                >
                    +<LuShoppingCart size={20} />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;