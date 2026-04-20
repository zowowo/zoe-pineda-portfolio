import { motion } from "framer-motion";
import { File } from "lucide-react";
import stLogoDark from "../assets/stmicro1.png";
import stLogoLight from "../assets/stmicro.png";
import { useEffect, useState } from "react";

const practicum = {
  company: {
    name: "STMicroelectronics, Inc.",
    overview:
      "STMicroelectronics is a global semiconductor leader. During my internship, I worked in a team focused on digital transformation and agile development.",
    location: "Calamba, Laguna, Philippines",
    dateRange: "April 2025 – June 2025"
  },
  tasks: [
    "Developed and maintained web applications using Flask.",
    "Collaborated with cross-functional teams to deliver new features.",
    "Participated in code reviews and agile ceremonies.",
    "Created technical documentation and user guides."
  ],
  hours: 324,
  conclusion:
    "This internship gave me real exposure to how software and hardware work together in an industrial setting. I got to build and maintain production systems, improve my full-stack skills, and learn how IT teams actually operate day-to-day. It made me a better engineer and a better teammate.",
  report: {
    url: "https://drive.google.com/file/d/1DgG2cFMYt0BgdV2ePIvS0NbX1KKqzf8-/view?usp=sharing",
  }
};

export const PracticumSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark" || document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="practicum" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Internship
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-card rounded-lg p-8 border border-border"
        >
          {/* Company header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="w-24 h-18 flex items-center justify-center shrink-0">
              <img
                src={isDarkMode ? stLogoDark : stLogoLight}
                alt="STMicroelectronics, Inc."
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{practicum.company.name}</h3>
              <p className="text-sm text-muted-foreground">
                {practicum.company.dateRange} &middot; {practicum.company.location} &middot; {practicum.hours} hours
              </p>
              <p className="text-muted-foreground mt-3 max-w-prose">{practicum.company.overview}</p>
            </div>
          </div>

          {/* Tasks */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">What I did</h4>
            <ul className="space-y-2 text-foreground">
              {practicum.tasks.map((task, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary font-medium shrink-0">{idx + 1}.</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">Takeaway</h4>
            <p className="text-foreground max-w-prose">{practicum.conclusion}</p>
          </div>

          {/* Report link */}
          <a
            href={practicum.report.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button inline-flex items-center gap-2"
          >
            <File className="h-4 w-4" />
            View Full Report
          </a>
        </motion.div>
      </div>
    </section>
  );
};
