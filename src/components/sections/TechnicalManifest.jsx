import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, 
  SiExpress, SiDjango, SiPostgresql, SiRedis, 
  SiMongodb, SiMysql, SiDocker, SiNginx, 
  SiApachekafka, SiCelery 
} from 'react-icons/si';
import { 
  FaJava, FaAws, FaCloud, FaStream, 
  FaNetworkWired, FaBrain, FaRobot, FaSearch, 
  FaCogs, FaServer 
} from 'react-icons/fa';

const STACK_CATEGORIES = [
  {
    num: "01",
    category: "LANGUAGES",
    capabilities: "Async · Typed · Concurrent",
    icons: [
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiPython, name: "Python" },
      { Icon: FaJava, name: "Java" },
    ]
  },
  {
    num: "02",
    category: "BACKEND",
    capabilities: "APIs · Services · Auth",
    icons: [
      { Icon: SiNodedotjs, name: "Node.js" },
      { Icon: SiExpress, name: "Express" },
      { Icon: SiDjango, name: "Django" },
      { Icon: FaServer, name: "REST APIs" },
    ]
  },
  {
    num: "03",
    category: "DATA",
    capabilities: "Transactions · Cache · Persistence",
    icons: [
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiRedis, name: "Redis" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: SiMysql, name: "MySQL" },
    ]
  },
  {
    num: "04",
    category: "INFRASTRUCTURE",
    capabilities: "Cloud · Containers · Edge",
    icons: [
      { Icon: FaAws, name: "AWS" },
      { Icon: SiDocker, name: "Docker" },
      { Icon: SiNginx, name: "NGINX" },
      { Icon: FaCloud, name: "ECS" },
    ]
  },
  {
    num: "05",
    category: "SYSTEMS",
    capabilities: "Events · Queues · Realtime",
    icons: [
      { Icon: SiApachekafka, name: "Kafka" },
      { Icon: FaStream, name: "BullMQ" },
      { Icon: SiCelery, name: "Celery" },
      { Icon: FaNetworkWired, name: "WebSockets" },
    ]
  },
  {
    num: "06",
    category: "AI",
    capabilities: "Models · Retrieval · Orchestration",
    icons: [
      { Icon: FaBrain, name: "LLMs" },
      { Icon: FaRobot, name: "AI Agents" },
      { Icon: FaSearch, name: "RAG" },
      { Icon: FaCogs, name: "Automation" },
    ]
  }
];

const TechnicalManifest = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <section 
      id="stack" 
      ref={containerRef}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden border-b border-black/[0.12] dark:border-white/[0.12]"
    >
      
      {/* Section Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-start mb-24"
      >
        <motion.div variants={itemVariants} className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#6F6F6F] dark:text-[#8E8E93] font-medium mb-8">
          03 // TECHNICAL STACK
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.85] uppercase text-[#111111] dark:text-[#EDEDED]">
          ENGINEERING<br />
          MANIFEST.
        </motion.h2>
      </motion.div>

      {/* 2-Column Icon Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24 lg:gap-y-24"
      >
        {STACK_CATEGORIES.map((category) => (
          <motion.div 
            key={category.num}
            variants={itemVariants}
            className="flex flex-col border-t border-black/10 dark:border-white/10 pt-6"
          >
            {/* Category Title */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-display font-bold text-lg text-[#10B981]">
                {category.num}
              </span>
              <h3 className="font-display font-bold text-lg uppercase tracking-widest text-[#111111] dark:text-[#EDEDED]">
                {category.category}
              </h3>
            </div>

            {/* Icon Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8 relative">
              {category.icons.map((tech, idx) => (
                <div 
                  key={idx}
                  className="relative group flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => setHoveredIcon(`${category.num}-${idx}`)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <tech.Icon 
                    className="text-3xl sm:text-4xl text-[#6F6F6F] dark:text-[#8E8E93] group-hover:text-[#111111] dark:group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                  />
                  {/* Tiny Tooltip */}
                  {hoveredIcon === `${category.num}-${idx}` && (
                    <motion.div 
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 whitespace-nowrap px-2 py-1 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-mono text-[10px] uppercase tracking-wider rounded-sm z-10 pointer-events-none"
                    >
                      {tech.name}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Capabilities */}
            <div className="font-mono text-xs sm:text-sm text-[#6F6F6F] dark:text-[#8E8E93] tracking-widest">
              {category.capabilities}
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default TechnicalManifest;
