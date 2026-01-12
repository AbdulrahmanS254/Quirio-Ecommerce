// ==================== Products Page ====================
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const cardAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ==================== Navbar ====================
export const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// ==================== Footer ====================
export const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// ==================== Loader ====================
export const LoadingDot = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "black",
    borderRadius: "50%",
};

export const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around",
};

export const ContainerVariants = {
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

export const DotVariants = {
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

// ==================== Brands Component ====================
export const brandsContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ==================== Hero Component ====================
export const heroContainerVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
};

export const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 10 },
    },
};
