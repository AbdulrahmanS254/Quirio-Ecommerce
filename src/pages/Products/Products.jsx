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
    const itemsPerPage = 12;

    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);

    // Calculate pagination
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

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
                            Showing {paginatedItems.length} of {items.length}{" "}
                            results
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
                        {paginatedItems.map((product) => (
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
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button
                            onClick={() =>
                                setCurrentPage(Math.max(1, currentPage - 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 border border-stone-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-100 transition"
                        >
                            Previous
                        </button>

                        <div className="flex gap-2">
                            {Array.from(
                                { length: totalPages },
                                (_, i) => i + 1
                            ).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-2 rounded-lg transition ${
                                        currentPage === page
                                            ? "bg-black text-white"
                                            : "border border-stone-200 hover:bg-stone-100"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() =>
                                setCurrentPage(
                                    Math.min(totalPages, currentPage + 1)
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border border-stone-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-100 transition"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
