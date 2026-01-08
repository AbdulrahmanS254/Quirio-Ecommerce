import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
    LuSave,
    LuX,
    LuUpload,
    LuImage,
    LuDollarSign,
    LuTag,
} from "react-icons/lu";

export default function Create() {
    // 1. Local State for Form Data
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: "Hoodies",
        description: "",
        image: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Prevent Form Refresh
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Created:", formData);
        // Tomorrow: Dispatch createProduct action here!
    };

    return (
        <section className="min-h-screen bg-gray-50 py-10 pb-20">
            <div className="container max-w-6xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-900">
                            Create New Drop
                        </h1>
                        <p className="text-stone-500">
                            Add a new product to your inventory.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            to="/admin"
                            className="px-6 py-3 rounded-lg font-bold text-stone-600 hover:bg-gray-200 transition-colors"
                        >
                            Cancel
                        </Link>
                        <button
                            onClick={handleSubmit}
                            className="bg-stone-900 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-500 transition-colors shadow-lg"
                        >
                            <LuSave /> Publish Product
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* 2. Left Side: The Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Card 1: Basic Info */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                            <h3 className="text-lg font-bold mb-4">
                                Basic Information
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2">
                                        Product Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g. Shadow Drip Hoodie"
                                        className="w-full p-3 bg-gray-50 border border-stone-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Product description..."
                                        className="w-full p-3 bg-gray-50 border border-stone-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Pricing & Category */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                            <h3 className="text-lg font-bold mb-4">
                                Pricing & Organization
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2">
                                        Price
                                    </label>
                                    <div className="relative">
                                        <LuDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            className="w-full pl-10 p-3 bg-gray-50 border border-stone-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2">
                                        Category
                                    </label>
                                    <div className="relative">
                                        <LuTag className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full pl-10 p-3 bg-gray-50 border border-stone-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option>Hoodies</option>
                                            <option>T-Shirts</option>
                                            <option>Pants</option>
                                            <option>Accessories</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Image URL (Simulating Upload) */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                            <h3 className="text-lg font-bold mb-4">
                                Product Image
                            </h3>

                            <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors group cursor-pointer relative">
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" // Trick to make clickable
                                    placeholder="Paste Image URL here"
                                />
                                {/* Fallback Input for pasting URL visually */}
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="Paste Image URL here..."
                                    className="relative z-20 w-full text-center bg-transparent border-b border-stone-300 focus:border-orange-500 focus:outline-none py-2 mb-2"
                                />

                                <div className="text-stone-400 group-hover:text-orange-500 transition-colors mt-2">
                                    <LuUpload
                                        className="mx-auto mb-2"
                                        size={32}
                                    />
                                    <p className="text-sm font-medium">
                                        Click or Paste URL to upload
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Right Side: Live Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24">
                            <h3 className="font-bold mb-4 text-stone-500 uppercase tracking-widest text-xs">
                                Live Preview
                            </h3>

                            {/* The Preview Card */}
                            <div className="bg-white p-4 rounded-3xl shadow-xl border border-stone-100">
                                <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
                                    {formData.image ? (
                                        <img
                                            src={formData.image}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="text-stone-300 flex flex-col items-center">
                                            <LuImage size={48} />
                                            <span className="text-xs mt-2">
                                                No Image
                                            </span>
                                        </div>
                                    )}
                                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                                        New
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-stone-900 truncate">
                                        {formData.title || "Product Title"}
                                    </h4>
                                    <p className="text-stone-500 text-xs mt-1 line-clamp-2">
                                        {formData.description ||
                                            "Product description will appear here..."}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xl font-bold text-stone-900">
                                            ${formData.price || "0.00"}
                                        </span>
                                        <button className="bg-stone-900 text-white p-2 rounded-full cursor-not-allowed opacity-50">
                                            <LuSave size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Tips Box */}
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-xl mt-6 text-sm">
                                <p>
                                    <strong>💡 Pro Tip:</strong> Use
                                    high-quality images (800x800px) for the best
                                    look on the storefront.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
