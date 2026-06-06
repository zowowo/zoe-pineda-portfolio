import { motion } from "framer-motion";

const facts = [
  { num: "4", label: "Industry\ncertifications" },
  { num: "324", label: "Internship\nhours" },
  { num: "5", label: "Shipped\nprojects" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      {/* Decorative number */}
      <div
        className="absolute top-16 right-[8%] text-[10rem] leading-none font-serif select-none pointer-events-none hidden lg:block"
        style={{ color: "oklch(0.93 0.005 155)" }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="rounded-2xl overflow-hidden bg-card border border-border relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Main two-column content */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-10 md:gap-16 items-start">
              {/* Left — pull-quote heading */}
              <div>
                <motion.p
                  className="text-xs font-semibold tracking-widest uppercase text-primary mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  About
                </motion.p>
                <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] leading-snug tracking-tight mb-5">
                  Software engineer who builds with{" "}
                  <em className="text-primary italic">intention</em>
                </h2>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 rounded-full bg-sage flex-shrink-0 animate-pulse" />
                  Biñan, Laguna, PH
                </div>
              </div>

              {/* Right — bio */}
              <div className="space-y-4">
                <p className="text-[0.92rem] text-muted-foreground leading-[1.8] max-w-[45ch]">
                  <strong className="font-semibold text-foreground">CS graduate</strong> with
                  experience spanning full-stack development, data science, and machine learning. I believe
                  good interfaces should feel like someone actually cared about the person using them.
                </p>
                <p className="text-[0.92rem] text-muted-foreground leading-[1.8] max-w-[45ch]">
                  Currently building healthcare tools at{" "}
                  <strong className="font-semibold text-foreground">GoRocky</strong>. Previously
                  interned at{" "}
                  <strong className="font-semibold text-foreground">STMicroelectronics</strong>{" "}
                  where I shipped a Flask web app in an agile team.
                </p>
              </div>
            </div>
          </div>

          {/* Facts strip */}
          <div className="bg-surface-green-light px-8 md:px-12 py-6 flex flex-wrap gap-x-14 gap-y-5">
            {facts.map((fact, idx) => (
              <motion.div
                key={fact.num}
                className="flex items-baseline gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              >
                <span className="text-3xl text-primary tracking-tight">{fact.num}</span>
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
