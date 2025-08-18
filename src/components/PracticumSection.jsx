import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, File } from "lucide-react";
import stLogo from "../assets/stmicro1.png"; // Use a transparent background image for best effect
import stLogoDark from "../assets/stmicro1.png";
import stLogoLight from "../assets/stmicro.png";
import { useEffect, useState } from "react";

// Example practicum data
const practicum = {
  company: {
    name: "STMicroelectronics, Inc.",
    logo: stLogo, 
    overview:
      "STMicroelectronics, Inc. is a global semiconductor leader serving customers across the spectrum of electronics applications. During my internship, I was immersed in a dynamic environment focused on digital transformation and agile development.",
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
    "The internship was transformative, blending software and hardware exposure in a real-world industrial setting. The student gained full-stack development experience, improved technical and soft skills, and contributed meaningfully to a production-grade system. The internship fostered adaptability, teamwork, and a deeper understanding of how IT supports operational efficiency. It prepared the student to be a thoughtful and impactful contributor to the tech industry.",
  report: {
    url: "https://drive.google.com/file/d/1DgG2cFMYt0BgdV2ePIvS0NbX1KKqzf8-/view?usp=sharing", // Replace with your actual report path
    name: "Pineda, Zoe Narrative Report.pdf"
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
    <section id="practicum" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary">Internship</span>{" "}
          <span className="text-foreground">Experience</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
          className="bg-card rounded-xl shadow-lg p-8 border border-primary/20"
        >
          {/* Company Overview */}
          <div className="mb-6 flex flex-col items-center">
            {practicum.company.logo && (
              <div className="w-32 h-24 flex items-center justify-center mb-4">
                <img
                  src={isDarkMode ? stLogoDark : stLogoLight}
                  alt="STMicroelectronics, Inc."
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            <h3 className="text-2xl font-bold text-primary mb-3 text-center">{practicum.company.name}</h3>

            {/* Info Row: Date, Location, Hours */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <CalendarDays className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">{practicum.company.dateRange}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">{practicum.company.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary px-5 py-2 rounded-full shadow-lg">
                <Clock className="w-5 h-5 text-primary-foreground" />
                <span className="text-lg text-primary-foreground font-bold tracking-wide">{practicum.hours} hrs</span>
              </div>
            </div>

            <p className="text-md text-muted-foreground text-center max-w-xl mx-auto">{practicum.company.overview}</p>
          </div>

          {/* Nature of Tasks */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-4">Nature of the Tasks</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {practicum.tasks.map((task, idx) => (
                <div key={idx} className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-foreground shadow-sm flex items-center">
                  <span className="text-primary text-xl font-bold mr-3">{idx + 1}.</span>
                  <span className="text-md">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Hours Rendered is now in info row above */}

          {/* Conclusion and Impact */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-2">Conclusion & Impact</h4>
            <p className="text-md text-foreground">{practicum.conclusion}</p>
          </div>

          {/* Practicum Final Report */}
          <div className="mb-2">
            <h4 className="text-lg font-semibold text-primary mb-2">Internship Final Report</h4>
            <a
              href={practicum.report.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 w-fit mx-auto"
            >
              <File className="h-5 w-5" />
              View Report
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
