import { LuChevronLeft, LuChevronRight } from "react-icons/lu"; 

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-2 mt-12">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 border border-stone-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-100 transition text-stone-600 font-medium"
            >
                <LuChevronLeft /> Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition ${
                                currentPage === page
                                    ? "bg-black text-white"
                                    : "border border-stone-200 hover:bg-stone-100 text-stone-600"
                            }`}
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
                className="flex items-center gap-1 px-4 py-2 border border-stone-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-100 transition text-stone-600 font-medium"
            >
                Next <LuChevronRight />
            </button>
        </div>
    );
}
