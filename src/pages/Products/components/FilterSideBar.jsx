const FilterSideBar = ({ categories, activeCategory, setActiveCategory, showFilters,  setShowFilters }) => {
    return (
        <aside
            className={`
                        fixed inset-0 z-40 bg-white p-6 transition-transform duration-300 md:translate-x-0 md:static md:w-1/5 md:p-0 md:block
                        ${showFilters ? "translate-x-0" : "-translate-x-full"}
                    `}
        >
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center mb-6 md:hidden">
                <h3 className="text-xl font-bold">Filters</h3>
                <button
                    onClick={() => setShowFilters(false)}
                    className="text-stone-400 text-2xl"
                >
                    &times;
                </button>
            </div>

            {/* Categories Group */}
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 border-b border-stone-100 pb-2">
                    Category
                </h3>
                <ul className="space-y-3">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => setActiveCategory(cat)}
                                className={`text-sm transition-colors duration-200 flex items-center gap-2 ${
                                    activeCategory === cat
                                        ? "text-orange-500 font-bold"
                                        : "text-stone-500 hover:text-stone-900"
                                }`}
                            >
                                {activeCategory === cat && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                )}
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range (Mock UI) */}
            <div>
                <h3 className="font-bold text-lg mb-4 border-b border-stone-100 pb-2">
                    Price
                </h3>
                <div className="flex gap-4 items-center">
                    <input
                        type="number"
                        placeholder="Min"
                        className="w-full bg-gray-50 border border-stone-200 rounded-md p-2 text-sm outline-none focus:border-orange-500"
                    />
                    <span className="text-stone-400">-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        className="w-full bg-gray-50 border border-stone-200 rounded-md p-2 text-sm outline-none focus:border-orange-500"
                    />
                </div>
            </div>
        </aside>
    );
};

export default FilterSideBar;
