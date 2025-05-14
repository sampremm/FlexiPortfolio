import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // smoother stagger
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemsVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto">
      <h2 className="mb-12 mt-20 text-center text-4xl text-white">Skills</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-2 flex flex-row flex-wrap justify-center gap-6 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemsVariants}
            className="flex w-full max-w-xs items-center gap-4 rounded-lg bg-zinc-800 px-4 py-3 shadow-md transition-all duration-300 hover:scale-105 sm:w-auto"
          >
            {skill.icon}
            <h3 className="text-xl text-white lg:text-2xl">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
