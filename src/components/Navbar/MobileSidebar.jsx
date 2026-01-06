import { AnimatePresence, motion } from "motion/react";

const modalVariants = {};

export default function MobileSidebar({ open }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                >
                    <div className="bg-amber-500">hello there</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
