import { motion } from "framer-motion";

const SkillsCard = ({ icon: Icon, skillName, index }) => {
    return (
        <motion.div
            className="bg-pri-blue/20 hover:bg-pri-blue/35 duration-300 py-6 rounded-lg flex flex-col items-center gap-4 border border-white-shade/10 shadow-xl shadow-white-shade/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="w-14 h-14 lg:w-16 lg:h-16 flex justify-center items-center border border-white/30 rounded-lg bg-main-dark-bg">
                <Icon className="text-white-shade text-3xl lg:text-4xl" />
            </span>

            <h4 className="text-white-shade/85 font-bold">
                {skillName}
            </h4>
        </motion.div>
    )
}

export default SkillsCard;
