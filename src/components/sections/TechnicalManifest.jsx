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
  FaCogs, FaServer, FaLayerGroup 
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
      { Icon: SiDjango, name: "DRF" },
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
      { Icon: FaLayerGroup, name: "Docker Compose" },
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
        className="flex flex-col items-start mb-16 md:mb-20"
      >
        <motion.div variants={itemVariants} className="eyebrow mb-6">
          04 — Technical Stack
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {STACK_CATEGORIES.map((category) => (
          <motion.div 
            key={category.num}
            variants={itemVariants}
            className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/60 dark:bg-[#111215] p-7 hover:border-black/[0.2] dark:hover:border-white/[0.2] hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] transition-all duration-500"
          >
            {/* Category Title */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-[#10B981]">
                {category.num}
              </span>
              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[#111111] dark:text-[#EDEDED]">
                {category.category}
              </h3>
            </div>

            {/* Icon Row */}
            <div className="flex flex-wrap items-center gap-3 mb-8 relative">
              {category.icons.map((tech, idx) => (
                <div 
                  key={idx}
                  className="relative group flex items-center justify-center w-14 h-14 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-[#F4F4F0] dark:bg-white/[0.03] hover:border-[#10B981]/40 transition-colors cursor-default"
                  onMouseEnter={() => setHoveredIcon(`${category.num}-${idx}`)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <tech.Icon 
                    className="text-2xl text-[#6F6F6F] dark:text-[#8E8E93] group-hover:text-[#111111] dark:group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
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
            <div className="mt-auto pt-5 border-t border-black/[0.06] dark:border-white/[0.06] font-mono text-[11px] uppercase text-[#6F6F6F] dark:text-[#8E8E93] tracking-widest">
              {category.capabilities}
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default TechnicalManifest;
