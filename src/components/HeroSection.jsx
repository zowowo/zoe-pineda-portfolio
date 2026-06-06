import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import zoeImage from "../assets/zoe-pineda-1.png";

const TiltImage = ({ src, alt }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      className="will-change-transform"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
      />
    </motion.div>
  );
};

export const HeroSection = () => {
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
      id="hero"
      className="relative min-h-screen flex items-end pb-16 md:pb-0 md:items-center overflow-hidden"
      style={{ background: "oklch(0.11 0.02 155)" }}
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
      <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.40 0.08 155 / 0.12) 0%, transparent 60%)" }} />
      <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.55 0.06 155 / 0.06) 0%, transparent 70%)" }} />

      {/* Decorative editorial number */}
      <div
        className="absolute top-[12%] left-[5%] text-[12rem] md:text-[18rem] leading-none font-serif select-none pointer-events-none hidden md:block"
        style={{ color: "oklch(0.16 0.015 155)" }}
        aria-hidden="true"
      >
        01
      </div>

      <div className="container max-w-5xl mx-auto z-10 px-6">
        <div className="flex flex-col-reverse md:flex-row items-stretch min-h-[520px] md:min-h-[620px]">

          {/* Text column */}
          <motion.div
            className="flex flex-col justify-end md:justify-center py-12 md:py-16 md:w-3/5 md:pr-16"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p
              className="text-sm font-medium tracking-widest uppercase mb-8"
              style={{ color: "oklch(0.55 0.04 155)" }}
              variants={fadeUp}
            >
              Software Engineer
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-4"
              variants={nameReveal}
            >
              <span className="text-sage italic">Zoe</span>{" "}
              <span className="text-primary-foreground">Pineda</span>
            </motion.h1>

            {/* Decorative rule */}
            <motion.div
              className="h-px w-16 bg-sage/40 origin-left mb-6"
              variants={ruleDraw}
            />

            <motion.p
              className="text-[0.95rem] max-w-sm leading-relaxed mb-8"
              style={{ color: "oklch(0.62 0.01 155)" }}
              variants={fadeUp}
            >
              Frontend engineer with a love for craft. Currently making healthcare more accessible at GoRocky.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeUp}
            >
              <a href="#projects" className="button">
                View my work
              </a>
              <a
                href="#contact"
                className="group text-sm font-medium transition-colors duration-200 px-2 py-2.5 flex items-center gap-1.5"
                style={{ color: "oklch(0.55 0.04 155)" }}
              >
                Get in touch
                <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">&darr;</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Photo column */}
          <div className="hidden md:flex md:w-2/5 relative items-center justify-center">
            {/* Soft glow behind frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.40 0.08 155 / 0.12) 0%, transparent 60%)" }} />

            {/* Photo frame */}
            <div className="relative w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-sage/15 shadow-2xl" style={{ boxShadow: "0 20px 50px oklch(0.05 0.01 155 / 0.4)" }}>
              <TiltImage src={zoeImage} alt="Zoe Pineda" />
            </div>

            {/* Decorative accents around frame */}
            <div className="absolute top-[12%] right-[8%] w-12 h-12 rounded-full border border-sage/10" />
            <div className="absolute bottom-[18%] left-[10%] w-5 h-5 rounded-full" style={{ background: "oklch(0.72 0.15 85 / 0.2)" }} />
          </div>

        </div>
      </div>
    </section>
  );
};
