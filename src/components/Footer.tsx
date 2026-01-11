import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-background/50 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Shawn Enzo J. Gimena. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="#"
              className="text-background/50 hover:text-primary transition-colors text-sm"
            >
              Back to top ↑
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
