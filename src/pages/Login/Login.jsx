import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { LuMail, LuLock, LuArrowRight, LuLoader } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const navigate = useNavigate();

    // Form States
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulate API Call (Remove this when integrating real Auth)
        setTimeout(() => {
            if (formData.email && formData.password) {
                console.log("Logged in:", formData);
                navigate("/"); // Redirect to Home
            } else {
                setError("Please fill in all fields");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* 1. Left Side: Visual Branding (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 relative bg-stone-950 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Fashion Model"
                />
                <div className="relative z-10 m-auto text-center px-10">
                    <h1 className="text-6xl font-bold text-white mb-4 brand">
                        <span className="text-orange-500">Q</span>uirio.
                    </h1>
                    <p className="text-stone-300 text-lg tracking-wide">
                        Join the community. Experience the new era of
                        streetwear.
                    </p>
                </div>
            </div>

            {/* 2. Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-24 relative">
                {/* Back to Home Link */}
                <Link
                    to="/"
                    className="absolute top-8 left-8 text-sm font-bold text-stone-500 hover:text-stone-900 transition-colors"
                >
                    ← Back to Store
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-stone-900 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-stone-500">
                            Please enter your details to sign in.
                        </p>
                    </div>

                    {/* Social Login */}
                    <button className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 text-stone-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all mb-6">
                        <FcGoogle size={22} />
                        Continue with Google
                    </button>

                    <div className="relative flex py-5 items-center mb-6">
                        <div className="grow border-t border-stone-200"></div>
                        <span className="shrink mx-4 text-stone-400 text-sm">
                            OR
                        </span>
                        <div className="grow border-t border-stone-200"></div>
                    </div>

                    {/* The Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-stone-900">
                                Email Address
                            </label>
                            <div className="relative">
                                <LuMail
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                                    size={20}
                                />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-stone-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-stone-900 placeholder:text-stone-400"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-stone-900">
                                    Password
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-xs text-stone-500 hover:text-orange-500 font-bold"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <LuLock
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                                    size={20}
                                />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-stone-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-stone-900 placeholder:text-stone-400"
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg text-center">
                                {error}
                            </p>
                        )}

                        {/* Submit Button */}
                        <button
                            disabled={isLoading}
                            className="bg-stone-900 text-white font-bold py-4 rounded-full mt-4 hover:bg-orange-500 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <LuLoader className="animate-spin" size={20} />
                            ) : (
                                <>
                                    Sign In <LuArrowRight />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-stone-500 mt-8 text-sm">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-stone-900 font-bold hover:text-orange-500 transition-colors"
                        >
                            Sign up for free
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
