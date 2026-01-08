import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { 
    LuPlus, 
    LuPencil, 
    LuTrash2, 
    LuDollarSign, 
    LuShoppingBag, 
    LuPackage, 
    LuSearch 
} from "react-icons/lu";

// Mock Data (Simulating Database)
const initialProducts = [
    { id: 1, title: "Shadow Drip Hoodie", category: "Hoodies", price: 99, stock: 12, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Urban Cargo Pants", category: "Pants", price: 85, stock: 5, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=997&auto=format&fit=crop" },
    { id: 3, title: "Oversized Tee", category: "T-Shirts", price: 45, stock: 0, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Tactical Vest", category: "Accessories", price: 120, stock: 8, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&auto=format&fit=crop" },
];

export default function Admin() {
    // Local State for simulating CRUD
    const [products, setProducts] = useState(initialProducts);
    const [searchTerm, setSearchTerm] = useState("");

    // Simulate Delete Function
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    // Filter Logic
    const filteredProducts = products.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="min-h-screen bg-gray-50 py-10 pb-20">
            <div className="container">
                
                {/* 1. Header & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-900">Dashboard</h1>
                        <p className="text-stone-500">Overview of your store performance.</p>
                    </div>
                    <Link 
                        to="/create" 
                        className="bg-stone-900 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-500 transition-colors shadow-lg active:scale-95"
                    >
                        <LuPlus size={20} /> Add Product
                    </Link>
                </div>

                {/* 2. Stats Cards (Overview) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <StatCard 
                        title="Total Sales" 
                        value="$24,500" 
                        icon={<LuDollarSign size={24} />} 
                        color="bg-green-100 text-green-600" 
                    />
                    <StatCard 
                        title="Total Orders" 
                        value="1,240" 
                        icon={<LuShoppingBag size={24} />} 
                        color="bg-blue-100 text-blue-600" 
                    />
                    <StatCard 
                        title="Products" 
                        value={products.length} 
                        icon={<LuPackage size={24} />} 
                        color="bg-orange-100 text-orange-600" 
                    />
                </div>

                {/* 3. Inventory Table Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                    
                    {/* Toolbar (Search) */}
                    <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-stone-900">Inventory</h3>
                        <div className="relative">
                            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Table Header (Hidden on Mobile) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-xs font-bold text-stone-500 uppercase tracking-wider">
                        <div className="col-span-5">Product</div>
                        <div className="col-span-2">Price</div>
                        <div className="col-span-2">Stock</div>
                        <div className="col-span-3 text-right">Actions</div>
                    </div>

                    {/* Product Rows */}
                    <div className="divide-y divide-stone-100">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={product.id} 
                                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors group"
                                >
                                    {/* Product Info */}
                                    <div className="col-span-5 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                                            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 text-sm">{product.title}</h4>
                                            <span className="text-xs text-stone-400">{product.category}</span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="col-span-2 text-sm font-medium text-stone-600">
                                        <span className="md:hidden font-bold mr-2">Price:</span>
                                        ${product.price}
                                    </div>

                                    {/* Stock Status */}
                                    <div className="col-span-2">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                                            product.stock > 0 
                                            ? "bg-green-100 text-green-700" 
                                            : "bg-red-100 text-red-700"
                                        }`}>
                                            {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="col-span-3 flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-stone-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                            <LuPencil size={18} />
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(product.id)}
                                            className="p-2 text-stone-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <LuTrash2 size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="p-8 text-center text-stone-500">
                                No products found matching "{searchTerm}"
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Stats Card Component (Reusable)
function StatCard({ title, value, icon, color }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-stone-500 text-sm font-medium">{title}</p>
                <h3 className="text-2xl font-bold text-stone-900">{value}</h3>
            </div>
        </div>
    );
}
