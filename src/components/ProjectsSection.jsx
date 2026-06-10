import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, ChevronDown } from "lucide-react";
import agrikaImage from "../assets/projects/agrika.png";
import loroImage from "../assets/projects/loro.png";
import hasteurantImage from "../assets/projects/haste-urant.png";
import portfolioImage from "../assets/projects/personal-portfolio.png";
import microsoftWinImageSolo from "../assets/microsoft-hackathon/Microsoft Win - Solo Pic.jpeg";
import microsoftWinImageGroup from "../assets/microsoft-hackathon/Microsoft Win - Group Photo.jpeg";
import microsoftWinImageGroupOrg from "../assets/microsoft-hackathon/Microsoft Win - With Organizers.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

const secondaryProjects = [
  {
    num: "02",
    title: "LORO",
    date: "2024",
    desc: "An AI speech therapy app for Filipino children with speech disorders",
    tech: ["UX Design", "Pitch", "AI/ML"],
    award: "2nd Place — Microsoft Hackathon",
    awardColor: "text-accent-amber",
    link: "https://www.youtube.com/watch?v=pl7zoGsUxuc",
    linkLabel: "Watch pitch",
    images: [loroImage, microsoftWinImageSolo, microsoftWinImageGroup, microsoftWinImageGroupOrg],
  },
  {
    num: "03",
    title: "Haste-urant",
    date: "2023",
    desc: "Full-stack restaurant management system developed for a local unli-wings restaurant",
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/GaWobi/Haste-aurant",
    linkLabel: "GitHub",
    images: [hasteurantImage],
  },
  {
    num: "04",
    title: "This Portfolio",
    date: "2025",
    desc: "The website you're currently on :)",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/zowowo/zoe-pineda-portfolio",
    linkLabel: "GitHub",
    images: [portfolioImage],
  },
];

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (num) => {
    setExpandedProject((prev) => (prev === num ? null : num));
  };

  return (
    <section id="projects" className="py-16 md:py-28 relative">
      {/* Decorative number */}
      <div
        className="absolute top-12 right-[8%] text-[10rem] leading-none font-serif select-none pointer-events-none hidden lg:block text-foreground/[0.04]"
        aria-hidden="true"
      >
        03
      </div>

      <div className="container mx-auto max-w-5xl px-8 md:px-12">
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
        </motion.div>

        {/* Featured project — AgriKA */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-6 relative bg-project-featured-bg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-sage">
                  Thesis Project
                </span>
                <span className="text-xs text-project-featured-muted">2024 – 2025</span>
              </div>
              <h3 className="text-3xl md:text-4xl tracking-tight mb-4 leading-tight text-project-featured-text">
                AgriKA
              </h3>
              <p className="text-[0.9rem] leading-[1.7] max-w-[40ch] mb-5 text-project-featured-body">
                CNN-LSTM rice yield prediction using satellite imagery. From model training to
                full-stack Flask deployment. Our graduating batch&apos;s best thesis — the research earned top
                marks among over 400 graduating students.
              </p>
              <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-md w-fit mb-5 text-accent-amber bg-accent-amber/10">
                Best Thesis — 400+ Graduates
              </span>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {["Python", "TensorFlow", "Flask", "Satellite Imagery"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md font-medium bg-project-tag-bg text-project-tag-text">
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

            <div className="flex items-center justify-center p-4 md:p-8 min-h-[180px] md:min-h-[260px] bg-project-featured-image-bg">
              <motion.img
                src={agrikaImage}
                alt="AgriKA project screenshot"
                className="w-full rounded-lg object-cover flex-1 min-h-0"
                style={{ boxShadow: "0 12px 40px oklch(0.05 0.01 155 / 0.5)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Secondary projects — compact list with expandable drawers */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {secondaryProjects.map((project, idx) => {
            const isExpanded = expandedProject === project.num;

            return (
              <motion.div
                key={project.num}
                className={idx < secondaryProjects.length - 1 ? "border-b border-border" : ""}
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
                {/* Project row */}
                <div
                  role="button"
                  tabIndex={0}
                  className="px-5 md:px-8 py-5 md:py-6 grid grid-cols-[1fr] sm:grid-cols-[auto_1fr_auto] gap-3 md:gap-6 items-start group cursor-pointer hover:bg-muted/40 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]"
                  onClick={() => toggleProject(project.num)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleProject(project.num); } }}
                  aria-expanded={isExpanded}
                >
                  {/* Number */}
                  <span className="text-2xl text-border/60 w-8 hidden sm:block pt-1 group-hover:text-primary/40 transition-colors duration-200">
                    {project.num}
                  </span>

                  {/* Content */}
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3 mb-0.5">
                      <h4 className="text-lg tracking-tight group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h4>
                      <span className="text-xs text-muted-foreground/60">{project.date}</span>
                    </div>
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

                  {/* Right side */}
                  <div className="flex-shrink-0 pt-1 flex flex-col items-end gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-sage transition-colors whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.linkLabel}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    {project.images.length > 0 && (
                      <span className="flex items-center gap-1 text-[0.65rem] text-muted-foreground/50">
                        Screenshots
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </span>
                    )}
                  </div>
                </div>

                {/* Expandable drawer — always in DOM for preloading */}
                {project.images.length > 0 && (
                  <div
                    className="grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${project.title} screenshot ${i + 1}`}
                              className="w-full rounded-lg object-cover border border-border"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
