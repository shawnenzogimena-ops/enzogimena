import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-display text-lg font-bold text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          Enzo<span className="text-primary">.</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <motion.a
            href="mailto:enzogimena.shawn@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk
            <span className="text-xs">↗</span>
          </motion.a>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-foreground" />
              <span className="w-3/4 h-0.5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
