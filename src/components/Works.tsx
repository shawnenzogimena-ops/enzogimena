import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "The Rise",
    description: "About a band who wants to change the world through music",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://enzotherise.netlify.app/",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    number: "02",
    title: "Stranger Chat",
    description: "Omegle inspired but only chat!",
    tags: ["JavaScript", "Canvas", "HTML/CSS"],
    link: "https://strangercss.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: "03",
    title: "Qsaints Shop",
    description: "Shop Website For Qsaints",
    tags: ["React", "Firebase", "HTML/CSS"],
    link: "https://qsaints.vercel.app",
    color: "from-rose-500/20 to-pink-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="relative rounded-3xl overflow-hidden bg-foreground dark:bg-background p-8 lg:p-12 hover-lift border border-foreground/10 dark:border-foreground/20">
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-background/10 dark:bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
            <ExternalLink className="w-4 h-4 text-background dark:text-foreground" />
          </div>
        </div>

        <span className="text-6xl lg:text-8xl font-display font-bold text-background/10 dark:text-foreground/10 block mb-6">
          {project.number}
        </span>

        <h3 className="text-2xl lg:text-3xl font-display font-bold text-background dark:text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-background/70 dark:text-muted-foreground mb-6 max-w-md">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-background/10 dark:bg-foreground/5 backdrop-blur-sm rounded-full text-xs font-medium text-background/80 dark:text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-background/60 dark:text-foreground/60 group-hover:text-primary transition-colors">
          View Project
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.a>
  );
};

const Works = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-4 block">(Projects)</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A collection of projects I've built while learning and experimenting
            with different technologies. Each project represents a step in my
            journey as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
