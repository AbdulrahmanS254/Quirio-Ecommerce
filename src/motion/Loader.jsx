import { motion } from "motion/react";
import {
    LoadingDot,
    LoadingContainer,
    ContainerVariants,
    DotVariants,
} from "./animation";

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
