import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Chrome DevTools", "npm", "Blender"],
  },
  {
    title: "Learning",
    skills: ["Algorithms", "Data Structures", "Web APIs", "Design Patterns", "3D Model"],
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-4 block">(About)</span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8">
              Developer /
              <br />
              <span className="text-muted-foreground/50">Student /</span>
              <br />
              Creator /
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm Shawn Enzo J. Gimena, a 17-year-old student with a passion for
                programming and technology. I started my coding journey a few years
                ago and haven't looked back since.
              </p>
              <p>
                What drives me is the ability to turn ideas into reality through
                code. Whether it's building a website, solving algorithmic
                challenges, or learning a new framework, I'm always excited to dive
                into new projects.
              </p>
              <p>
                When I'm not coding, I enjoy learning about computer science
                fundamentals, contributing to open-source projects, and exploring
                new technologies that push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          {/* Right side - skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-display font-bold text-foreground">
              Skills
            </h3>

            <div className="grid gap-6">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  className="glass-card rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marquee text */}
        <motion.div
          className="mt-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground/10 mx-8"
              >
                SHAWN ENZO GIMENA
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
