import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building modern, responsive websites and web applications using the latest technologies. From simple landing pages to complex interactive experiences.",
    skills: ["React & TypeScript", "Tailwind CSS & UI/UX", "HTML, CSS, JavaScript"],
  },
  {
    number: "02",
    title: "Programming Projects",
    description:
      "Creating diverse programming solutions, from algorithms to full applications. Always eager to tackle new challenges and learn new technologies.",
    skills: ["Python & JavaScript", "Data Structures & Algorithms", "Problem Solving"],
  },
  {
    number: "03",
    title: "Learning & Growing",
    description:
      "Constantly expanding my knowledge in computer science, software engineering, and new technologies. Documenting my journey and sharing what I learn.",
    skills: ["Computer Science Fundamentals", "Open Source Contributions", "Continuous Learning"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="glass-card rounded-3xl p-8 lg:p-10 hover-lift h-full">
        <div className="flex items-start justify-between mb-6">
          <span className="text-4xl font-display font-bold text-primary/30">
            {service.number}
          </span>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-primary">→</span>
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-foreground mb-4">
          {service.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-2">
          {service.skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="text-xs text-primary font-medium">0{i + 1}</span>
              <span className="text-foreground/80">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header with image behind text */}
        <div className="relative mb-16">
          {/* Background image - positioned behind text, consistent across all devices */}
          <motion.div
            className="absolute left-[30%] sm:left-[45%] top-0 bottom-0 w-[240px] z-0 opacity-80 flex items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 0.8, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img 
              
            />
          </motion.div>

          {/* Text content - on top of image */}
          <motion.div
            ref={headerRef}
            className="relative z-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block">(Services)</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              As a passionate young developer, I'm dedicated to learning and building
              projects that solve real problems. I love experimenting with new
              technologies and creating things that make a difference.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
