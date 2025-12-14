import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50" 
          : ""
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <a href="#" className="flex items-center gap-2 group">
          <Logo />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="link-underline text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-secondary"
          >
            Resume ↗
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-3"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                onClick={() => setIsOpen(false)}
                className="btn-secondary w-fit mt-4"
              >
                Resume ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

function Logo() {
  // show image if available, otherwise fallback to initial
  const [errored, setErrored] = useState(false);

  return (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      {!errored ? (
        // Place your logo file at /public/images/logo.png (recommended 256x256)
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-full h-full object-cover pointer-events-none"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <span className="text-sm font-semibold text-primary-foreground">N</span>
        </div>
      )}
    </div>
  );
}
