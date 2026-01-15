import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { fetchProducts } from "../../../features/productsSlice";
import ProductCard from "../../../components/ui/ProductCard";

// Animation Variants
const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};
const cardsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};
const randomNumber = Math.floor(Math.random() * 10);

export default function NewDrops() {
    // Fetching products
    const { items } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(randomNumber));
    }, [dispatch]);

    const displayItems = items ? items.slice(0, 4) : [];

    return (
        <section id="new-drops" className="my-14">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={titleVariants}
                    className="section-title"
                >
                    <h2 className="text-4xl uppercase font-bold">New Drops</h2>
                    <p className="text-gray-500 md:w-7/12 mt-2">
                        Stand out with our latest collection-bold designs,
                        premium fabrics, and street-ready fits. Once they're
                        gone, they're gone. Don't miss out!
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardsVariants}
                    className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12"
                >
                    {displayItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            thumb={item.thumbnail}
                            desc={item.description}
                            price={item.price}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
