import { motion, useTransform, useScroll, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import zoeImage from "../assets/zoe-pineda-1.png";

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  // Parallax: content moves up, opacity fades as you scroll past
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], prefersReducedMotion ? [1, 1] : [1, 0]);
  const photoScale = useTransform(scrollYProgress, [0, 0.6], prefersReducedMotion ? [1, 1] : [1, 0.92]);
  const photoY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -40]);

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
  };
  const nameReveal = {
    hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const ruleDraw = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[max(60vh,400px)] md:min-h-screen flex items-center overflow-hidden bg-hero-bg"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.40 0.08 155 / 0.06) 0%, transparent 60%)",
          y: useTransform(scrollYProgress, [0, 1], [0, 60]),
        }}
      />
      <motion.div
        className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.06 155 / 0.03) 0%, transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [0, 30]),
        }}
      />

      {/* Decorative editorial number */}
      <motion.div
        className="absolute top-[12%] left-[5%] text-[12rem] md:text-[18rem] leading-none font-serif select-none pointer-events-none hidden md:block text-hero-decorative"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
        }}
        aria-hidden="true"
      >
        01
      </motion.div>

      <div className="container mx-auto max-w-5xl px-8 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-stretch min-h-0 md:min-h-[620px]">

          {/* Text column — parallax fade */}
          <motion.div
            className="flex flex-col justify-center pt-24 pb-12 md:py-16 w-full md:w-3/5 md:pr-16"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.p
                className="text-sm font-medium tracking-widest uppercase mb-8 text-hero-subtitle"
                variants={fadeUp}
              >
                Software Engineer
              </motion.p>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-4"
                variants={nameReveal}
              >
                <span className="text-sage italic">Zoe</span>{" "}
                <span className="text-primary-foreground">Pineda</span>
              </motion.h1>

              <motion.div
                className="h-px w-16 bg-sage/40 origin-left mb-6"
                variants={ruleDraw}
              />

              <motion.p
                className="text-[0.95rem] md:max-w-sm leading-relaxed mb-8 text-hero-body"
                variants={fadeUp}
              >
                Frontend engineer with a love for craft. Currently making healthcare more accessible at GoRocky.
              </motion.p>

              <motion.div
                className="flex items-center gap-4"
                variants={fadeUp}
              >
                <a href="#projects" className="button group">
                  <span className="inline-flex items-center gap-1">
                    View my work
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group text-sm font-medium transition-colors duration-200 px-2 py-2.5 flex items-center gap-1.5 text-hero-subtitle"
                >
                  Get in touch
                  <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">&darr;</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Photo column — parallax */}
          <motion.div
            className="flex w-full md:w-3/5 relative items-center justify-center py-8 md:py-0"
            style={{ y: photoY, scale: photoScale }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.40 0.08 155 / 0.18) 0%, transparent 65%)" }} />

            <div
              className="relative w-48 sm:w-56 md:w-64 lg:w-72 -rotate-2"
              style={{
                background: "oklch(0.96 0.003 90)",
                padding: "12px 12px 48px 12px",
                boxShadow: "0 8px 40px oklch(0.05 0.01 155 / 0.5), 0 2px 8px oklch(0.05 0.01 155 / 0.3)",
              }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={zoeImage}
                  alt="Zoe Pineda"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
