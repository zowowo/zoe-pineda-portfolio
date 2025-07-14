import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";


// Example certifications data
const certifications = [
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "June 2024",
    icon: null,
    category: "Frontend",
    link: "https://www.example.com/react-cert",
  },

  {
    name: "CompTIA IT Fundamentals+ (ITF+)",
    issuer: "CompTIA",
    date: "June 2024",
    icon: null,
    category: "IT Fundamentals",
    link: "https://www.credly.com/badges/9cfa5cfc-cd22-4bcf-8f56-cd480a7fc8d5/linked_in_profile",
  },
  
  {
    name: "AWS Academy Graduate",
    issuer: "AWS Cloud Foundations",
    date: "Nov 2023",
    icon: null,
    category: "Cloud",
    link: "https://www.credly.com/badges/c7ec80c2-40da-4510-9c4f-5b23354f4c83/linked_in_profile",
  },

  {
    name: "Google Cloud Essentials",
    issuer: "Google",
    date: "Nov 2023",
    icon: null,
    category: "Cloud",
    link: "https://www.cloudskillsboost.google/public_profiles/2d12ee51-9b3d-4909-b3a3-7ccf1eeca97b/badges/5014407?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },

  {
    name: "Data Analyst with Python",
    issuer: "Datacamp",
    date: "Jun 2024",
    icon: null,
    category: "Data Science",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/5848df0d423cec13050f86e0b4ec7adce7f576e0?raw=1",
  },

  {
    name: "TOEIC English Proficiency",
    issuer: "Educational Testing Service (ETS)",
    date: "Jan 2025",
    icon: null,
    category: "Language and Communication Skills",
    link: "https://www.example.com/uiux-cert",
  },
];

export const CertificationsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(certifications.length / perPage);
  const startIdx = page * perPage;
  const endIdx = startIdx + perPage;
  const certsToShow = certifications.slice(startIdx, endIdx);

  const handlePageChange = (i) => {
    setPage(i);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary">Certifications</span>{" "}
          <span className="text-foreground">and Achievements</span>
        </h2>

        {/* AnimatePresence for fade between pages */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {certsToShow.map((cert, idx) => (
              <motion.div
                key={cert.name}
                custom={idx}
                variants={cardVariants}
                className={clsx(
                  "bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl shadow-lg p-8 flex flex-col items-center border border-primary/30",
                  "hover:scale-105 hover:shadow-2xl hover:border-primary transition-all duration-300"
                )}
              >
                {cert.icon ? (
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className="w-20 h-20 mb-4 rounded-full shadow"
                  />
                ) : (
                  <div className="w-20 h-20 mb-4 flex items-center justify-center bg-primary/20 rounded-full shadow">
                    <span className="text-primary text-4xl">🏅</span>
                  </div>
                )}
                <span className="mb-3 px-4 py-1 rounded-full bg-primary/20 text-primary font-medium text-xs cursor-default">
                  {cert.category}
                </span>
                <p className="text-2xl font-bold text-foreground mb-2 text-center">{cert.name}</p>
                <p className="text-md text-muted-foreground mb-1 text-center">{cert.issuer}</p>
                <p className="text-xs text-primary-foreground text-center mb-3">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
                  >
                    View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={clsx(
                "w-4 h-4 rounded-full border-2 border-primary transition-all duration-200",
                i === page
                  ? "bg-primary scale-125 shadow-lg"
                  : "bg-card hover:bg-primary/30 hover:scale-110"
              )}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};