import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Beta Tenant",
    role: "Frontend Developer",
    points: [
      "Developed site features and ensured web pages remained responsive, thus enhancing user experience.",
      "Identified and resolved website issues to improve stability and performance.",
    ],
    shape: "arcs",
    align: "left" as const,
  },
  {
    company: "Peak Harmony",
    role: "Backend Developer",
    points: [
      "Implemented passkey authentication code logic on the backend",
      "Set up code to process and execute Business Process Model Notation (BPMN) workflows",
    ],
    shape: "blocks",
    align: "right" as const,
  },
  {
    company: "Fhenix Africa",
    role: "Intern",
    points: [
      "Developed a user-friendly and responsive company website using WordPress",
      "Set up code to process and execute Business Process Model Notation (BPMN) workflows.",
    ],
    shape: "square",
    align: "left" as const,
  },
];

const ShapeDecoration = ({ type, scrollProgress }: { type: string; scrollProgress: any }) => {
  const y = useTransform(scrollProgress, [0, 1], [0, -30]);
  const rotate = useTransform(scrollProgress, [0, 1], [0, 15]);

  if (type === "arcs") {
    return (
      <motion.div style={{ y, rotate }} className="flex gap-1.5">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ scaleY: 1.1 }}
            className="w-6 h-14 rounded-full origin-bottom cursor-pointer transition-transform"
            style={{ 
              background: `linear-gradient(180deg, hsl(var(--neon-pink)) 0%, hsl(var(--neon-orange)) 100%)`,
              transform: `rotate(${i * 8}deg)`,
              opacity: 1 - i * 0.15
            }}
          />
        ))}
      </motion.div>
    );
  }
  
  if (type === "blocks") {
    const blockRotate = useTransform(scrollProgress, [0, 1], [0, -10]);
    return (
      <motion.div style={{ y, rotate: blockRotate }} className="grid grid-cols-2 gap-2 w-fit">
        {[1, 0.7, 0.5, 0.3].map((opacity, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-9 h-9 rounded-lg cursor-pointer transition-transform"
            style={{ 
              backgroundColor: `hsl(var(--neon-green) / ${opacity})` 
            }}
          />
        ))}
      </motion.div>
    );
  }
  
  if (type === "square") {
    const squareRotate = useTransform(scrollProgress, [0, 1], [0, 20]);
    return (
      <motion.div
        style={{ y, rotate: squareRotate }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        className="relative w-16 h-16 cursor-pointer"
      >
        <div className="absolute inset-0 rounded-xl bg-neon-blue" />
        <div className="absolute top-2 left-2 w-10 h-10 rounded-lg bg-background" />
      </motion.div>
    );
  }
  
  return null;
};

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const itemRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.article
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`flex flex-col md:flex-row items-start gap-10 ${
        exp.align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`flex-1 max-w-xl ${exp.align === "right" ? "text-right" : ""}`}>
        <h3 className="text-3xl md:text-4xl font-display font-normal text-foreground mb-1.5 tracking-tight">
          {exp.company}
        </h3>
        <p className="text-muted-foreground text-sm mb-8 tracking-wide uppercase">
          {exp.role}
        </p>
        
        <ul className={`space-y-4 ${exp.align === "right" ? "list-none" : ""}`}>
          {exp.points.map((point, i) => (
            <li
              key={i}
              className={`text-muted-foreground text-[15px] leading-relaxed flex gap-3 ${
                exp.align === "right" ? "justify-end text-right" : ""
              }`}
            >
              <span className="text-primary/70 mt-0.5 flex-shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex-shrink-0 mt-2">
        <ShapeDecoration type={exp.shape} scrollProgress={scrollYProgress} />
      </div>
    </motion.article>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="code-syntax text-xl md:text-2xl mb-20 text-right"
      >
        {"<"}Experience{"/>"}
      </motion.h2>
      
      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <ExperienceItem key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
