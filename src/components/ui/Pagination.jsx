import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    // Calculate visible page numbers based on current page
    const getPageNumbers = () => {
        const maxVisible = window.innerWidth < 640 ? 3 : 5; // Mobile: 3 pages, Desktop: 5 pages
        const pages = [];

        if (totalPages <= maxVisible) {
            // Show all pages if total is less than max visible
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            // Calculate range around current page
            let start = Math.max(
                2,
                currentPage - Math.floor((maxVisible - 3) / 2)
            );
            let end = Math.min(totalPages - 1, start + (maxVisible - 3));

            // Adjust if we're near the end
            if (end === totalPages - 1) {
                start = Math.max(2, end - (maxVisible - 3));
            }

            // Add ellipsis and middle pages
            if (start > 2) pages.push("...");
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            if (end < totalPages - 1) pages.push("...");

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    const visiblePages = getPageNumbers();

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-2 mt-8 sm:mt-12 px-4 sm:px-0">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center gap-1 px-3 sm:px-4 py-2 border border-stone-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:disabled:bg-transparent hover:bg-stone-100 transition-all duration-200 text-stone-700 hover:text-stone-900 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-1"
                aria-label="Previous page"
            >
                <LuChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1 sm:gap-1.5 flex-wrap justify-center">
                {visiblePages.map((page, index) =>
                    page === "..." ? (
                        <span
                            key={`ellipsis-${index}`}
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-stone-400 text-sm sm:text-base"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg flex items-center justify-center font-medium transition-all duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                                currentPage === page
                                    ? "bg-black text-white shadow-md focus:ring-black"
                                    : "border border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-700 hover:text-stone-900 focus:ring-stone-400"
                            }`}
                            aria-label={`Page ${page}`}
                            aria-current={
                                currentPage === page ? "page" : undefined
                            }
                        >
                            {page}
                        </button>
                    )
                )}
            </div>

            {/* Next Button */}
            <button
                onClick={() =>
                    onPageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="flex items-center justify-center gap-1 px-3 sm:px-4 py-2 border border-stone-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:disabled:bg-transparent hover:bg-stone-100 transition-all duration-200 text-stone-700 hover:text-stone-900 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-1"
                aria-label="Next page"
            >
                <span className="hidden sm:inline">Next</span>
                <LuChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
    );
}
