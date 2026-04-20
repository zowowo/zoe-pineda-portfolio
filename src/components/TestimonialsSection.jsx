import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Zoe was able to deliver her assigned tasks efficiently. She also demonstrated the ability to pick up and correctly interpret the activities given to her.",
    author: "Rowell Bilog",
    role: "Senior Test Product Engineer, STMicroelectronics, Inc.",
    avatar: "https://media.licdn.com/dms/image/v2/C5103AQERICB8PO-unA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516633235028?e=1758153600&v=beta&t=NGKnBaye8INS9b4Nyv1uyK0Ep6EA_y34jOnyvRtOsI0",
    linkedin: "https://www.linkedin.com/in/rowell-bilog-837a4652"
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {testimonials.map((testimonial, idx) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <p className="text-lg text-foreground italic mb-4 max-w-prose">
                "{testimonial.quote}"
              </p>
              <footer className="flex items-center gap-3">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {testimonial.author}
                  </a>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
