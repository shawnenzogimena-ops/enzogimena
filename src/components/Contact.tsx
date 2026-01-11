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
    <section id="contact" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-background/50 font-medium mb-4 block">
            (Contact)
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
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
              className="group p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <link.icon className="w-6 h-6 mb-4 text-primary" />
              <h3 className="font-display font-bold text-lg mb-1">{link.label}</h3>
              <p className="text-sm text-background/50 truncate">{link.username}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-background/60 group-hover:text-primary transition-colors">
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
