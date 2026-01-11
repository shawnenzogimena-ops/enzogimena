import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";

function PorscheModel() {
  const { scene } = useGLTF("/models/2020_Porsche_911_RSR.glb");
  return <primitive object={scene} scale={1} position={[0, -0.5, 0]} />;
}

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-24 lg:pt-28">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-6 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">UI/UX Developer</span>
            </motion.div>

            <motion.h1
              className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              SHAWN
              <br />
              <span className="text-muted-foreground/40">ENZO J.</span>
              <br />
              GIMENA
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span className="text-sm">Scroll to explore</span>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A 17-year-old student passionate about programming and building
              innovative digital solutions. Always learning, always creating.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all hover:gap-3"
              >
                Contact
                <span>↗</span>
              </a>
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-full font-medium hover:border-foreground/40 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Right content - 3D Model */}
          <motion.div
            className="relative lg:justify-self-end w-full h-[400px] sm:h-[450px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1., x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Canvas
                camera={{ position: [4, 2, 5], fov: 32 }}
                className="w-full h-full"
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <PorscheModel />
                  <Environment preset="city" />
                  <ContactShadows
                    position={[0, -0.5, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={2}
                  />
                </Suspense>
                <OrbitControls
                  enablePan={false}
                  minDistance={3}
                  maxDistance={10}
                />
              </Canvas>

              {/* Floating card */}
              <motion.div
                className="absolute bottom-4 right-4 glass-card px-6 py-4 rounded-2xl z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Available for Projects
                </p>
                <p className="text-2xl font-display font-bold text-foreground">
                  {new Date().getFullYear()}
                </p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

useGLTF.preload("/models/2020_Porsche_911_RSR.glb");

export default Hero;
