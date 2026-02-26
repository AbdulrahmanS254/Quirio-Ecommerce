import { useState } from "react";
import { motion } from "motion/react";
import MobileSidebar from "./MobileSidebar";
import { navVariants } from "../../../motion/animation";

import { NavLink } from "react-router";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { useSelector } from "react-redux";

const linkClass =
    "px-3 py-2 rounded-3xl transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-500 font-semibold";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <nav className="bg-stone-950 text-white py-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={navVariants}
                    className="container flex justify-between items-center"
                >
                    {/* Logo */}
                    <div className="brand text-3xl">
                        <NavLink to={"/"}>
                            <span className="text-orange-500">Q</span>
                            urio
                        </NavLink>
                    </div>
                    {/* Menu */}
                    <div className="links hidden md:flex items-center">
                        <ul className="list-none flex gap-5">
                            <li>
                                <NavLink to={"/"} className={linkClass}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/products"} className={linkClass}>
                                    Products
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* icons */}
                    <div className="flex items-center ms-auto me-4 md:m-0 gap-2">
                        <NavLink
                            to={"/cart"}
                            className="relative text-2xl rounded-full p-2 hover:bg-orange-500 transition duration-300"
                        >
                            <LuShoppingCart />
                            {cartCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 flex items-center justify-center bg-orange-500 text-white text-xs font-bold rounded-full">
                                    {cartCount > 99 ? "99+" : cartCount}
                                </span>
                            )}
                        </NavLink>
                    </div>
                    {/* Mobile Menu */}
                    <button
                        className="flex items-center p-1 text-2xl cursor-pointer md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <FaBars />
                    </button>
                </motion.div>
            </nav>
            {/* Mobile Sidebar */}
            <MobileSidebar open={open} />
        </>
    );
}
