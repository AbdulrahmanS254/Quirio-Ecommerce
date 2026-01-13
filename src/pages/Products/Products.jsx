import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import Loading from "../../components/layout/Loading";
import ErrorDisplay from "../../components/layout/ErrorDisplay";
import { LuSettings2 } from "react-icons/lu";
import FilterSideBar from "./components/FilterSideBar";
import ProductCard from "../../components/ui/ProductCard";
import { containerVariants, cardAnim } from "../../motion/animation";
import Pagination from "../../components/ui/Pagination";

// Categories Data
const categories = [
    "All Products",
    "T-Shirts",
    "Hoodies",
    "Pants",
    "Accessories",
    "Shoes",
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const { items, status, error, total } = useSelector(
        (state) => state.products
    );

    // Calculate pagination
    const totalPages = Math.ceil(total / 12);

    useEffect(() => {
            dispatch(fetchProducts(currentPage));
            window.scroll({top: 0, behavior: "smooth"})
    }, [dispatch, currentPage]);

    if (status === "failed")
        return (
            <ErrorDisplay
                message={error}
                onRetry={() => dispatch(fetchProducts())}
            />
        );
    if (status === "pending") return <Loading />;

    return (
        <div className="min-h-screen bg-white pt-10 pb-20">
            <div className="container">
                {/* Page Header (Title & Sort) */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold uppercase mb-2">
                            Collection
                        </h1>
                        <p className="text-stone-500">
                            Showing {items.length} of {items.length} results
                        </p>
                    </div>

                    {/* Controls (Filter Toggle Mobile & Sort) */}
                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            className="md:hidden flex-1 flex items-center justify-center gap-2 border border-stone-200 px-4 py-2 rounded-lg font-semibold"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <LuSettings2 /> Filters
                        </button>
                    </div>
                </div>

                <div className="flex gap-10 items-start">
                    {/* 2. Sidebar Filters (Sticky on Desktop) */}
                    <FilterSideBar
                        categories={categories}
                        activeCategory={activeCategory}
                        showFilters={showFilters}
                        setShowFilters={setShowFilters}
                        setActiveCategory={setActiveCategory}
                    />

                    {/* Overlay for Mobile Sidebar */}
                    {showFilters && (
                        <div
                            className="fixed inset-0 bg-black/50 z-30 md:hidden"
                            onClick={() => setShowFilters(false)}
                        ></div>
                    )}

                    {/* 3. Product Grid */}
                    <motion.main
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {items.map((product) => (
                            <motion.div key={product.id} variants={cardAnim}>
                                <ProductCard
                                    id={product.id}
                                    title={product.title}
                                    thumb={product.thumbnail}
                                    desc={product.description}
                                    price={product.price}
                                />
                            </motion.div>
                        ))}
                    </motion.main>
                </div>

                {/* Pagination Controls */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}
