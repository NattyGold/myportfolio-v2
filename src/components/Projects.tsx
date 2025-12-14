import { useState, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, ShoppingBag, Palette, Monitor, Globe, Cpu } from "lucide-react";

const categories = ["All", "Web", "Design", "Desktop", "Machine Learning"];

const projects = [
  {
    id: 1,
    title: "Residential Suitability Classifier",
    description: "An ML tool that classifies land based on suitability for residential use using geospatial data and MCE/AHP criteria.",
    category: "Machine Learning",
    tech: ["Python", "QGIS", "Scikit-learn"],
    icon: Cpu,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment integration, and admin dashboard.",
    category: "Web",
    tech: ["React", "Node.js", "MongoDB"],
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Complete visual identity including logo, color palette, typography, and brand guidelines.",
    category: "Design",
    tech: ["Figma", "Illustrator"],
    icon: Palette,
  },
  {
    id: 4,
    title: "Task Manager Desktop App",
    description: "Cross-platform desktop application for task management with offline support and sync.",
    category: "Desktop",
    tech: ["Electron", "TypeScript", "SQLite"],
    icon: Monitor,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, performant personal portfolio with smooth animations and responsive design.",
    category: "Web",
    tech: ["React", "Tailwind", "Framer Motion"],
    icon: Globe,
  },
  {
    id: 6,
    title: "Location Intelligence Dashboard",
    description: "Interactive dashboard for analyzing geospatial data with real-time visualizations.",
    category: "Machine Learning",
    tech: ["Python", "Plotly", "GeoPandas"],
    icon: MapPin,
  },
];

const ProjectCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const Icon = project.icon;
  
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        layout: { duration: 0.3 }
      }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm" />
      
      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/40 transition-colors duration-500" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: '0 0 40px hsl(var(--primary) / 0.15), inset 0 0 20px hsl(var(--primary) / 0.05)'
        }}
      />
      
      <div className="relative p-4">
        <div className="flex items-start justify-between mb-5">
          <motion.div 
            className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors duration-300"
            whileHover={{ rotate: 5 }}
          >
            <Icon className="w-5 h-5 text-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-lg bg-white/5"
          >
            <ArrowUpRight className="w-4 h-4 text-foreground" />
          </motion.div>
        </div>
        
        <motion.h3 
          className="text-lg font-display font-normal text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary/80 rounded-md border border-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <motion.p 
          className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground/90 transition-colors"
          initial={false}
          animate={{ y: 0 }}
          whileHover={{ y: -2 }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

const FilterButton = memo(({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: string; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileTap={{ scale: 0.97 }}
    className="relative px-5 py-2.5 text-sm font-medium transition-colors duration-300"
  >
    <span className={`relative z-10 transition-colors duration-300 ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`}>
      {category}
    </span>
    
    {/* Animated underline */}
    {isActive && (
      <motion.div
        layoutId="activeFilter"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    )}
    
    {/* Background pill on active */}
    {isActive && (
      <motion.div
        layoutId="activeFilterBg"
        className="absolute inset-0 bg-white/5 rounded-full -z-10"
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    )}
  </motion.button>
));

FilterButton.displayName = "FilterButton";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-12 md:py-12 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="code-syntax text-xl md:text-2xl mb-12">
          {"<"}Projects{"/>"}
        </h2>
        
        {/* Filter buttons with animated underline */}
        <div className="flex flex-wrap gap-1 mb-12 p-1 bg-white/[0.02] rounded-full w-fit border border-white/5">
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
        
        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-muted-foreground py-12"
            >
              No projects found in this category.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
