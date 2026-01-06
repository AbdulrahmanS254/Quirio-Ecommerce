import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

import { NavLink } from "react-router";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";

const linkClass =
    "px-3 py-2 rounded-3xl transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-500 font-semibold";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-stone-950 text-white py-5">
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <div className="brand text-3xl uppercase">
                        <NavLink to={"/"}>
                            <span className="text-orange-500">Q</span>
                            urio
                        </NavLink>
                    </div>
                    {/* Menu */}
                    <div className="links hidden md:flex items-center">
                        <ul className="list-none flex gap-5">
                            <li>
                                <NavLink to={"/products"} className={linkClass}>
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin"} className={linkClass}>
                                    Admin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/create"} className={linkClass}>
                                    Create
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* icons */}
                    <div className="flex items-center ms-auto me-4 md:m-0 gap-2">
                        <NavLink
                            to={"/cart"}
                            className="text-2xl rounded-full p-2 hover:bg-orange-500 transition duration-300"
                        >
                            <LuShoppingCart />
                        </NavLink>
                        <NavLink
                            to={"/login"}
                            className={
                                "font-semibold bg-white text-stone-900 px-3 py-2 rounded-3xl hover:text-orange-500 transition duration-300"
                            }
                        >
                            Login
                        </NavLink>
                    </div>
                    {/* Mobile Menu */}
                    <button
                        className="flex items-center p-1 text-2xl cursor-pointer md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>
            {/* Mobile Sidebar */}
            <MobileSidebar open={open} />
        </>
    );
}
