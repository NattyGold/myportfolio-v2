import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const badgeY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -10]);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-normal text-foreground mb-3 tracking-tight">
              About <span className="italic text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">My software engineering journey</p>
          </motion.div>

          <motion.div style={{ y: contentY }} className="space-y-6">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Greetings and salutations. I'm Nathaniel and I'm a software engineer, particularly, a <span className="text-foreground font-medium">frontend engineer</span>.
            </p>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              I've been exploring various tools for coding web pages because it's what I enjoy. I view UI designs as a puzzle that I, an engineer, am tasked with solving, to deliver beautiful <span className="text-foreground font-medium">user experiences</span>.
            </p>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              When I'm not coding, I spend my time reading and hanging out with my family and friends. I also enjoy anime and completing <span className="text-foreground font-medium">3D puzzles</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center md:justify-end"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden border border-white/6 shadow-lg">
            <img src="/images/logo.png" alt="Nathaniel portrait" className="w-full h-full object-cover block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
