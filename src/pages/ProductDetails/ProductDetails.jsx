import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
    LuStar,
    LuMinus,
    LuPlus,
    LuShoppingCart,
    LuHeart,
    LuTruck,
    LuShieldCheck,
} from "react-icons/lu";

// Import actions
import {
    fetchProductById,
    clearSingleProduct,
} from "../../features/productsSlice";
import Loading from "../../components/layout/Loading";
import ErrorDisplay from "../../components/layout/ErrorDisplay";
import { addToCart } from "../../features/cartSlice";

// Constants for static data not provided by API

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { singleItem, itemStatus, itemError } = useSelector(
        (state) => state.products,
    );

    // Local State
    const [activeImage, setActiveImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    // Fetch Logic & Cleanup
    useEffect(() => {
        dispatch(fetchProductById(id));
        window.scrollTo(0, 0);

        // Cleanup: Clear previous product data when leaving
        return () => {
            dispatch(clearSingleProduct());
        };
    }, [dispatch, id]);

    // Sync active image when data arrives
    useEffect(() => {
        if (singleItem?.images?.length > 0) {
            setActiveImage(singleItem.images[0]);
        }
    }, [singleItem]);

    // Handling States
    if (itemStatus === "pending") return <Loading />;

    if (itemStatus === "failed")
        return (
            <ErrorDisplay
                message={itemError}
                onRetry={() => dispatch(fetchProductById(id))}
            />
        );

    // Guard clause if data is missing
    if (!singleItem) return null;

    const handleAddToCart = () => {
        const productToAdd = {
            id: singleItem.id,
            title: singleItem.title,
            price: singleItem.price,
            thumbnail: activeImage || singleItem.thumbnail,
            quantity: quantity,
        };

        dispatch(addToCart(productToAdd));

        setQuantity(1);
    };

    return (
        <section className="min-h-screen bg-white py-10 pb-20">
            <div className="container">
                {/* 1. Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8 overflow-hidden">
                    <Link
                        to="/"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <Link
                        to="/products"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Products
                    </Link>
                    <span>/</span>
                    <span className="text-stone-900 font-medium truncate">
                        {singleItem.title}
                    </span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* 2. Left Column: Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4"
                    >
                        {/* Main Image */}
                        <div className="md:w-1/2 mx-auto lg:w-full h-96 sm:h-125 lg:h-125 bg-gray-50 rounded-3xl overflow-hidden border border-stone-100">
                            <motion.img
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={activeImage || singleItem.thumbnail}
                                alt={singleItem.title}
                                className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {singleItem.images
                                ?.slice(0, 4)
                                .map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(img)}
                                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all bg-gray-50 ${
                                            activeImage === img
                                                ? "border-stone-900 opacity-100"
                                                : "border-transparent opacity-70 hover:opacity-100"
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index}`}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </button>
                                ))}
                        </div>
                    </motion.div>

                    {/* 3. Right Column: Product Info */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6 lg:sticky lg:top-24 h-fit"
                    >
                        {/* Header Info */}
                        <div>
                            <div className="flex justify-between items-start">
                                <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-2">
                                    {singleItem.title}
                                </h1>
                                <button className="p-2 rounded-full hover:bg-gray-100 text-stone-400 hover:text-red-500 transition-colors">
                                    <LuHeart size={24} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1 text-orange-500">
                                    <LuStar fill="currentColor" />
                                    <span className="font-bold text-stone-900 ml-1">
                                        {singleItem.rating}
                                    </span>
                                </div>
                                <span className="text-stone-300">|</span>
                                <span className="text-stone-500 text-sm">
                                    128 Reviews{" "}
                                    {/* Static count as API lacks it */}
                                </span>
                            </div>

                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-stone-900">
                                    ${singleItem.price}
                                </span>
                                {singleItem.discountPercentage > 0 && (
                                    <span className="text-orange-500 text-sm font-bold bg-orange-100 px-2 py-1 rounded mb-1">
                                        {Math.round(
                                            singleItem.discountPercentage,
                                        )}
                                        % OFF
                                    </span>
                                )}
                            </div>
                        </div>

                        <hr className="border-stone-100" />

                        <p className="text-stone-500 leading-relaxed">
                            {singleItem.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            {/* Quantity */}
                            <div className="flex items-center justify-between bg-gray-50 rounded-full px-4 py-3 border border-stone-200 sm:w-1/3">
                                <button
                                    onClick={() =>
                                        setQuantity((q) => Math.max(1, q - 1))
                                    }
                                    className="p-1 hover:text-orange-500 transition-colors cursor-pointer"
                                >
                                    <LuMinus />
                                </button>
                                <span className="font-bold text-stone-900">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="p-1 hover:text-orange-500 transition-colors cursor-pointer"
                                >
                                    <LuPlus />
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <button 
                            onClick={handleAddToCart}
                            className="flex-1 bg-stone-900 text-white rounded-full py-4 font-bold flex items-center justify-center gap-2 hover:bg-orange-500 transition-all shadow-xl active:scale-95 cursor-pointer">
                                <LuShoppingCart size={20} /> Add to Cart
                            </button>
                        </div>

                        {/* Extra Info Icons */}
                        <div className="grid grid-cols-2 gap-4 text-xs text-stone-500 mt-2">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <LuTruck size={16} />
                                </div>
                                <span>Free shipping over $100</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <LuShieldCheck size={16} />
                                </div>
                                <span>Secure payment</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
