import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:enzogimena.shawn@gmail.com",
    username: "enzogimena.shawn@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/shawnenzogimena-ops",
    username: "@zoneeclx",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/enzogimena.shawn",
    username: "@enzogimena.shawn",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/enzodegimena.shawn",
    username: "enzodegimena.shawn",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">
      {/* Breathing gradient lights */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium mb-4 block">
            (Contact)
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            Let's Connect
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            I'm always open to collaborating on interesting projects, learning
            opportunities, or just having a chat about technology and programming.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <link.icon className="w-6 h-6 mb-4 text-primary" />
              <h3 className="font-display font-bold text-lg mb-1 text-white">{link.label}</h3>
              <p className="text-sm text-white/50 truncate">{link.username}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-white/60 group-hover:text-primary transition-colors">
                <span>Connect</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Big CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="mailto:enzogimena.shawn@gmail.com"
            className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-full font-display font-bold text-xl hover:scale-105 transition-transform"
          >
            <Mail className="w-6 h-6" />
            Send Me an Email
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
