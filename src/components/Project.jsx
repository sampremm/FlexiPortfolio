import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y:-20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  },
};

const itemsVariants = {
  hidden: { opacity: 0, x:0.8  },
  visible: {
    opacity: 1, scale: 1  , transition: { duration: 0.5 }, 
    transition: { duration: 0.5 },
  },
};

const Project = () => {
  return (
    <div id="projects">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center py-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} variants={itemsVariants}>
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
