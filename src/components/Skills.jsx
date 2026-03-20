import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-5 h-px bg-amber-500" />
          <span className="text-xs font-mono tracking-widest uppercase text-amber-500">Skills</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Tools of the <span className="text-amber-400">Craft.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-sm lg:text-right"
          >
            Deep backend foundation with enough frontend skill to ship complete products.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="group flex flex-col items-center justify-center gap-3 py-5 px-3 bg-zinc-950 border border-zinc-800 hover:border-amber-900/70 rounded-xl cursor-default transition-colors duration-200"
            >
              <div className="text-3xl lg:text-4xl transition-transform duration-200 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-xs font-mono text-zinc-500 group-hover:text-amber-400 transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;