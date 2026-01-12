import { motion } from "motion/react";
import {
    heroContainerVariants,
    textVariants,
    dotVariants,
} from "../../../motion/animation";
export default function Hero() {
    return (
        <section id="hero">
            <div className="container h-[70vh] sm:h-[85vh] flex items-center my-4">
                <motion.div
                    variants={heroContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="box -z-10 bg-gray-100 h-11/12 w-full rounded-3xl relative content-center gap-4 px-4 sm:px-10 lg:px-20"
                >
                    <motion.h1
                        variants={textVariants}
                        className="text-3xl sm:text-4xl md:text-4xl ms-3 font-bold text-gray-600 uppercase"
                    >
                        Let's Do something
                    </motion.h1>
                    <motion.h1
                        variants={textVariants}
                        className="text-6xl sm:text-7xl md:text-9xl font-bold"
                    >
                        Creative
                        <motion.span
                            variants={dotVariants}
                            className="text-orange-500 inline-block"
                        >
                            .
                        </motion.span>
                    </motion.h1>
                    <motion.picture
                        variants={textVariants}
                        className="absolute right-0 lg:right-2/12 top-2/12 -z-2"
                    >
                        <img
                            src="/hero-balloon.webp"
                            className="w-3xs"
                            alt=""
                        />
                    </motion.picture>
                </motion.div>
            </div>
        </section>
    );
}
