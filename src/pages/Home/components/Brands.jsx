import { motion } from "motion/react";
import {
    brandsContainerVariants,
    itemVariants,
} from "../../../motion/animation";
import {
    SiNike,
    SiAdidas,
    SiPuma,
    SiNewbalance,
    SiReebok,
    SiUnderarmour,
} from "react-icons/si";

// (Icon + Name)
const brandsData = [
    { id: 1, name: "Nike", icon: <SiNike /> },
    { id: 2, name: "Adidas", icon: <SiAdidas /> },
    { id: 3, name: "Puma", icon: <SiPuma /> },
    { id: 4, name: "New Balance", icon: <SiNewbalance /> },
    { id: 5, name: "Reebok", icon: <SiReebok /> },
    { id: 6, name: "Under Armour", icon: <SiUnderarmour /> },
];

export default function Brands() {
    return (
        <section className="mb-14">
            <div className="container">
                {/* 3. The Grey Box Container */}
                <motion.div
                    variants={brandsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-gray-100 rounded-3xl p-10 sm:p-14 text-center"
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-stone-500 font-bold uppercase tracking-widest mb-10 text-sm sm:text-base"
                    >
                        Trusted by top brands
                    </motion.h3>

                    {/* 4. Brands Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        {brandsData.map((brand) => (
                            <motion.div
                                key={brand.id}
                                variants={itemVariants}
                                className="group flex flex-col items-center gap-3 cursor-pointer"
                            >
                                {/* Icon Wrapper */}
                                <span className="text-4xl sm:text-5xl text-stone-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 ease-in-out">
                                    {brand.icon}
                                </span>

                                {/* Brand Name (Optional - fades in on hover) */}
                                <span className="text-xs font-bold text-stone-900 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
