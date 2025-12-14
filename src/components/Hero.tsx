import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background gradients */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none"
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <motion.div 
        style={{ y: y2, opacity, scale }}
        className="relative max-w-5xl"
      >
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] font-extrabold leading-[0.85] tracking-[-0.03em]">
            <span className="text-gradient-soft">The D<span className="letter-bob">i</span>g<span className="letter-bob">i</span>tal</span>
            <br />
            <span className="italic text-gradient-soft">Or<span className="letter-bob">i</span>g<span className="letter-bob">i</span>ns</span>
          </h1>
        </motion.div>
        
        {/* Code-styled subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="code-syntax text-base md:text-lg mt-10 max-w-lg"
        >
          {"<"}of a developer named{" "}
          <span className="highlight font-medium">Nathaniel Nathaniel</span> who built amazing
          <br />
          software{"/>"}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA - Hire Me with glow */}
          <motion.a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_2s_linear_infinite]" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: '0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--secondary) / 0.3)'
              }}
            />
            
            <span className="relative z-10 text-background font-semibold">Hire Me</span>
            <Sparkles className="relative z-10 w-4 h-4 text-background" />
          </motion.a>
          
          {/* Secondary CTA - About Me */}
          <motion.a 
            href="#about" 
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 transition-colors duration-300 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10 text-foreground">About Me</span>
            <ArrowRight className="relative z-10 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Triangles decorative grid on the right */}
      <div className="absolute top-1/2 right-6 hidden lg:block transform -translate-y-1/2 pointer-events-none">
        <div className="hero-triangles">
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '0s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '0.15s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '0.28s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '0.42s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '0.58s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '0.72s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '0.86s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '1.04s' }} />
          <div className="hero-triangle" style={{ ['--triangle-delay' as any]: '1.2s' }} />
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
        className="absolute bottom-32 right-12 md:right-24 hidden md:block"
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-3 h-3 rounded-full bg-primary/40"
        />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
        className="absolute top-40 right-[20%] hidden lg:block"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border border-border/50 rounded-lg"
        />
      </motion.div>
      
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
        className="absolute top-60 left-[15%] hidden lg:block"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-secondary/60"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
