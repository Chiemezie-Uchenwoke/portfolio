import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "motion/react" // eslint-disable-line no-unused-vars

const ScrollToTop = () => {
    const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) setIsScrollToTopVisible(true);
            else setIsScrollToTopVisible(false);
        }

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
        {
            isScrollToTopVisible && 
            <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-pri-blue text-white fixed bottom-4 right-3 w-10 h-10  rounded-full shadow-lg active:scale-95 cursor-pointer flex justify-center items-center z-40"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </motion.button>
        }
        </>
    )
}

export default ScrollToTop;