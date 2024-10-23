import { SKILLS } from "../constants";

import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  },
};

const itemsVariants = {
  hidden: { opacity: 0, x:-20  },
  visible: {
    opacity: 1, x:0 , transition: { duration: 0.5 }, 
    scale: 1,
    transition: { duration: 0.5 },
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
      className="mx-2 flex flex-row flex-wrap rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
        {SKILLS.map((skill, index) => (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={itemsVariants}
            viewport={{ once: true }}
          key={index} className="mb-8 flex items-center justify-between">
            <div className="flex items-center ">
              {skill.icon}
              <h3 className="px-6 text-xl lg:text-3xl text-white">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
