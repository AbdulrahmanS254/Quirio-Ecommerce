import { motion } from "framer-motion";

const ErrorDisplay = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md shadow-sm"
            >
                <div className="flex justify-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-8 h-8 text-red-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                            />
                        </svg>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Oops! Something went wrong
                </h3>
                <p className="text-gray-500 mb-6 text-sm">
                    {message ||
                        "We couldn't load the products. Please try again."}
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onRetry}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md shadow-red-200"
                >
                    Try Again
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ErrorDisplay;
