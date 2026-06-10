import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const facts = [
  { target: 4, label: "Industry\ncertifications" },
  { target: 324, label: "Internship\nhours" },
  { target: 5, label: "Shipped\nprojects" },
];

const AnimatedCounter = ({ target, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = target > 100 ? 1200 : 600;
    let start = null;
    let rafId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) { rafId = requestAnimationFrame(step); }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return <span>{count}</span>;
};

export const AboutSection = () => {
  const factsRef = useRef(null);
  const factsInView = useInView(factsRef, { once: true, amount: 0.5 });

  return (
    <section id="about" className="py-16 md:py-28 relative">
      {/* Decorative number */}
      <div
        className="absolute -top-6 right-[6%] text-[12rem] leading-none font-serif select-none pointer-events-none hidden lg:block text-foreground/[0.06] z-0"
        aria-hidden="true"
      >
        02
      </div>

      <div className="container mx-auto max-w-5xl px-8 md:px-12">
        <motion.div
          className="rounded-2xl overflow-hidden bg-card border border-border relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-10 md:gap-16 items-start">
              {/* Left — pull-quote heading */}
              <div>
                <motion.p
                  className="text-xs font-semibold tracking-widest uppercase text-primary mb-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  About
                </motion.p>
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-[2.1rem] leading-snug tracking-tight mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  Software engineer who builds with{" "}
                  <em className="text-primary italic">intention</em>
                </motion.h2>
                <motion.div
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-sage flex-shrink-0 animate-pulse" />
                  Biñan, Laguna, PH
                </motion.div>
              </div>

              {/* Right — bio with staggered paragraphs */}
              <div className="space-y-4">
                <motion.p
                  className="text-[0.92rem] text-muted-foreground leading-[1.8] max-w-[45ch]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  <strong className="font-semibold text-foreground">CS graduate</strong> with
                  experience spanning full-stack development, data science, and machine learning. I believe
                  good interfaces should feel like someone actually cared about the person using them.
                </motion.p>
                <motion.p
                  className="text-[0.92rem] text-muted-foreground leading-[1.8] max-w-[45ch]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  Currently building healthcare tools at{" "}
                  <strong className="font-semibold text-foreground">GoRocky</strong>. Previously
                  interned at{" "}
                  <strong className="font-semibold text-foreground">STMicroelectronics</strong>{" "}
                  where I shipped a Flask web app in an agile team.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Facts strip with animated counters */}
          <div ref={factsRef} className="bg-surface-green-light px-8 md:px-12 py-6 flex flex-wrap gap-x-14 gap-y-5">
            {facts.map((fact, idx) => (
              <motion.div
                key={fact.target}
                className="flex items-baseline gap-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.12, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              >
                <span className="text-3xl text-primary tracking-tight tabular-nums">
                  <AnimatedCounter target={fact.target} inView={factsInView} />
                </span>
                <span className="text-xs text-muted-foreground whitespace-pre-line leading-tight">
                  {fact.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
