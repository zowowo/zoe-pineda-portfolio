import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Example testimonials data
const testimonials = [
  {
    quote: "Zoe was able to deliver her assigned tasks efficiently. She also demonstrated the ability to pick up and correctly interpret the activities given to her.",
    author: "Rowell Bilog",
    role: "Senior Test Product Engineer, STMicroelectronics, Inc.",
    avatar: "https://media.licdn.com/dms/image/v2/C5103AQERICB8PO-unA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516633235028?e=1758153600&v=beta&t=NGKnBaye8INS9b4Nyv1uyK0Ep6EA_y34jOnyvRtOsI0",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/in/rowell-bilog-837a4652"
  },
  
  
];

export const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const startIdx = page * perPage;
  const endIdx = startIdx + perPage;
  const testimonialsToShow = testimonials.slice(startIdx, endIdx);

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
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary">Testimonials</span>{" "}
          <span className="text-foreground">and Feedback</span>
        </h2>

        {/* AnimatePresence for fade between pages */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className={clsx(
              "mb-8 gap-4",
              testimonialsToShow.length === 1
                ? "grid grid-cols-1 justify-items-center"
                : testimonialsToShow.length === 2
                ? "grid grid-cols-1 sm:grid-cols-2 justify-items-center"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {testimonialsToShow.map((testimonial, idx) => (
              <motion.div
                key={testimonial.author + testimonial.date}
                custom={idx}
                variants={cardVariants}
                className={clsx(
                  "bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl shadow-lg p-8 flex flex-col items-center border border-primary/30",
                  "hover:scale-105 hover:shadow-2xl hover:border-primary transition-all duration-300"
                )}
              >
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-30 h-30 mb-4 rounded-full shadow"
                  />
                ) : (
                  <div className="w-30 h-30 mb-4 flex items-center justify-center bg-primary/20 rounded-full shadow">
                    <span className="text-primary text-4xl">👤</span>
                  </div>
                )}
                <blockquote className="italic text-lg text-center text-foreground mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <div className="text-center">
                  <p className="text-md font-bold text-primary"><a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">{testimonial.author}</a></p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs mt-1">{testimonial.date}</p>
                </div>
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