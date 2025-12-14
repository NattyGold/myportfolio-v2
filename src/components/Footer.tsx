import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "X" },
];

const Footer = () => {
  return (
    <footer className="py-6 px-6 md:px-12 lg:px-24">
      <div className="divider mb-6" />
      
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-3 surface-elevated rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-300"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground/70">
          © {new Date().getFullYear()} Nathaniel Nathaniel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
