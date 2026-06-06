import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import agrikaImage from "../assets/projects/agrika.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

const secondaryProjects = [
  {
    num: "02",
    title: "LORO",
    desc: "AI speech therapy app for Filipino children with speech disorders",
    tech: ["UX Design", "Pitch", "AI/ML"],
    award: "3rd Place — Microsoft Hackathon",
    awardColor: "text-accent-amber",
    link: "https://www.youtube.com/watch?v=pl7zoGsUxuc",
    linkLabel: "Watch pitch",
  },
  {
    num: "03",
    title: "Haste-urant",
    desc: "Full-stack restaurant management system",
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/GaWobi/Haste-aurant",
    linkLabel: "GitHub",
  },
  {
    num: "04",
    title: "This Portfolio",
    desc: "The site you're on right now",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/zowowo/zoe-pineda-portfolio",
    linkLabel: "GitHub",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4 relative">
      {/* Decorative number */}
      <div
        className="absolute top-12 right-[8%] text-[10rem] leading-none font-serif select-none pointer-events-none hidden lg:block"
        style={{ color: "oklch(0.93 0.005 155)" }}
        aria-hidden="true"
      >
        03
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          className="flex justify-between items-baseline mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Projects</p>
            <h2 className="text-3xl md:text-4xl tracking-tight">Selected Work</h2>
          </div>
          <span className="text-sm z-10 text-muted-foreground hidden sm:block">4 projects</span>
        </motion.div>

        {/* Featured project — AgriKA */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-6 relative"
          style={{ background: "oklch(0.13 0.025 155)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, oklch(0.48 0.1 155 / 0.3), transparent 60%)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-sage mb-4">
                Thesis Project
              </span>
              <h3 className="text-3xl md:text-4xl tracking-tight mb-4 leading-tight" style={{ color: "oklch(0.93 0.005 155)" }}>
                AgriKA
              </h3>
              <p className="text-[0.9rem] leading-[1.7] max-w-[40ch] mb-5" style={{ color: "oklch(0.72 0.01 155)" }}>
                CNN-LSTM rice yield prediction using satellite imagery. From model training to
                full-stack Flask deployment. Our batch&apos;s best thesis — the research earned top
                marks among over 400 graduating students.
              </p>
              <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-md w-fit mb-5 text-accent-amber bg-accent-amber/10">
                Best Thesis — 400+ Graduates
              </span>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {["Python", "TensorFlow", "Flask", "Satellite Imagery"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md font-medium" style={{ background: "oklch(0.20 0.02 155)", color: "oklch(0.65 0.03 155)" }}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/lalaperlala/AgriKA"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-sage hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View on GitHub
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center p-6 md:p-8 min-h-[260px]" style={{ background: "oklch(0.18 0.03 155)" }}>
              <motion.img
                src={agrikaImage}
                alt="AgriKA project screenshot"
                className="w-full rounded-lg object-cover"
                style={{ boxShadow: "0 12px 40px oklch(0.05 0.01 155 / 0.5)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Secondary projects — compact list */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {secondaryProjects.map((project, idx) => (
            <motion.a
              key={project.num}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block px-6 md:px-8 py-6 grid grid-cols-[auto_1fr_auto] gap-4 md:gap-6 items-start group hover:bg-muted/40 transition-colors duration-200 ${
                idx < secondaryProjects.length - 1 ? "border-b border-border" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] },
                },
              }}
            >
              {/* Number */}
              <span className="text-2xl text-border/60 w-8 hidden sm:block pt-1 group-hover:text-primary/40 transition-colors duration-200">{project.num}</span>

              {/* Content */}
              <div className="min-w-0">
                <h4 className="text-lg tracking-tight mb-0.5 group-hover:text-primary transition-colors duration-200">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[0.7rem] px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                {project.award && (
                  <span className={`text-xs font-bold inline-block ${project.awardColor}`}>
                    {project.award}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 pt-1">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-sage transition-colors whitespace-nowrap">
                  {project.linkLabel}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
