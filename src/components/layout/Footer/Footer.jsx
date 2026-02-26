import { Link } from "react-router";
import { motion } from "framer-motion";
import { footerVariants } from "../../../motion/animation";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-8">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={footerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
                >
                    {/* 1. Brand Section */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-3xl font-bold text-white">
                            <span className="text-orange-500">Q</span>urio
                        </Link>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Discover the best products with Qurio. We provide
                            high-quality items with a seamless shopping
                            experience.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 mt-2">
                            <SocialIcon icon={<FaFacebookF />} />
                            <SocialIcon icon={<FaTwitter />} />
                            <SocialIcon icon={<FaInstagram />} />
                            <SocialIcon icon={<FaLinkedinIn />} />
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-2">
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/products">All Products</FooterLink>
                            <FooterLink to="/cart">My Cart</FooterLink>
                        </ul>
                    </div>

                    {/* 3. Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Support
                        </h3>
                        <ul className="flex flex-col gap-2">
                            <FooterLink to="#">Help Center</FooterLink>
                            <FooterLink to="#">Privacy Policy</FooterLink>
                            <FooterLink to="#">Terms of Service</FooterLink>
                            <FooterLink to="#">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* 4. Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Subscribe
                        </h3>
                        <p className="text-stone-400 text-sm mb-4">
                            Get the latest updates and offers.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-stone-900 border border-stone-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            />
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
                    <p>
                        &copy; {new Date().getFullYear()} Qurio Store. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

// Reusable Components for clean code

// 1. Footer Link Component
function FooterLink({ to, children }) {
    return (
        <li>
            <Link
                to={to}
                className="hover:text-orange-500 transition-colors duration-300 block w-fit"
            >
                {children}
            </Link>
        </li>
    );
}

// 2. Social Icon Component
function SocialIcon({ icon }) {
    return (
        <a
            href="#"
            className="bg-stone-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}
