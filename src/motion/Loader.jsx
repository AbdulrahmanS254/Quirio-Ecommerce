import { motion } from "motion/react";

const LoadingDot = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "black",
    borderRadius: "50%",
};

const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around",
};

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const DotVariants = {
    initial: {
        opacity: 0.5,
        y: "0%",
    },
    animate: {
        opacity: 1,
        y: "100%",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
};

export default function Loader() {
    return (
        <motion.div
            style={LoadingContainer}
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.span style={LoadingDot} variants={DotVariants} />
            <motion.span style={LoadingDot} variants={DotVariants} />
            <motion.span style={LoadingDot} variants={DotVariants} />
        </motion.div>
    );
}
