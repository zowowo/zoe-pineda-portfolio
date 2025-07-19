import { motion } from "framer-motion";

// Example practicum data
const practicum = {
  company: {
    name: "STMicroelectronics, Inc.",
    logo: "/src/assets/stmicro2.png", // Replace with your logo path
    overview:
      "Tech Solutions Inc. is a leading provider of innovative software solutions for businesses worldwide. During my practicum, I was immersed in a dynamic environment focused on digital transformation and agile development.",
  },
  tasks: [
    "Developed and maintained web applications using React and Node.js.",
    "Collaborated with cross-functional teams to deliver new features.",
    "Participated in code reviews and agile ceremonies.",
    "Created technical documentation and user guides."
  ],
  hours: 240,
  conclusion:
    "My practicum experience at Tech Solutions Inc. was transformative. I gained hands-on experience in modern web development, improved my teamwork and communication skills, and contributed to real-world projects that made a positive impact on the company.",
  report: {
    url: "/src/assets/practicum-final-report.pdf", // Replace with your actual report path
    name: "Practicum Final Report.pdf"
  }
};

export const Practicum = () => {
  return (
    <section id="practicum" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary">Practicum</span>{" "}
          <span className="text-foreground">Experience</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
          className="bg-card rounded-xl shadow-lg p-8 border border-primary/20"
        >
          {/* Company Overview */}
          <div className="flex items-center gap-6 mb-6">
            {practicum.company.logo && (
              <img src={practicum.company.logo} alt={practicum.company.name} className="w-20 h-20 object-cover rounded-lg shadow" />
            )}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">{practicum.company.name}</h3>
              <p className="text-md text-muted-foreground">{practicum.company.overview}</p>
            </div>
          </div>

          {/* Nature of Tasks */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-2">Nature of the Tasks</h4>
            <ul className="list-disc pl-6 text-foreground">
              {practicum.tasks.map((task, idx) => (
                <li key={idx} className="mb-1">{task}</li>
              ))}
            </ul>
          </div>

          {/* Total Hours Rendered */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-2">Total Hours Rendered</h4>
            <p className="text-md text-foreground font-bold">{practicum.hours} hours</p>
          </div>

          {/* Conclusion and Impact */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-2">Conclusion & Impact</h4>
            <p className="text-md text-foreground">{practicum.conclusion}</p>
          </div>

          {/* Practicum Final Report */}
          <div className="mb-2">
            <h4 className="text-lg font-semibold text-primary mb-2">Practicum Final Report</h4>
            <a
              href={practicum.report.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
              download={practicum.report.name}
            >
              Download/View Report
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
