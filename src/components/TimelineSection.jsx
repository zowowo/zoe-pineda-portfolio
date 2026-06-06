import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 –",
    role: "Frontend Engineer",
    place: "GoRocky · Healthcare",
    current: true,
  },
  {
    year: "2025",
    role: "Software Engineering Intern",
    place: "STMicroelectronics · 324 hours · Calamba, Laguna",
  },
  {
    year: "2025",
    role: "BS Computer Science",
    place: "Graduate · Best Thesis Awardee",
    certs: "CompTIA ITF+ · AWS Cloud Foundations · Google Cloud Essentials · DataCamp Data Analyst",
  },
];

export const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="py-28 px-4 relative overflow-hidden"
      style={{ background: "oklch(0.11 0.02 155)" }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Decorative number */}
      <div
        className="absolute top-12 right-[8%] text-[10rem] leading-none font-serif select-none pointer-events-none hidden lg:block"
        style={{ color: "oklch(0.16  0.015 155)" }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage mb-3">Experience</p>
          <h2 className="text-2xl md:text-3xl tracking-tight mb-12" style={{ color: "oklch(0.92 0.005 155)" }}>
            Career Timeline
          </h2>
        </motion.div>

        <div>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="py-6 border-t grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-10 items-baseline"
              style={{ borderColor: "oklch(0.20 0.02 155)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-base text-sage flex items-center gap-2">
                {item.year}
                {item.current && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                )}
              </span>
              <div>
                <div className="text-[0.92rem] font-semibold mb-0.5" style={{ color: "oklch(0.88 0.005 155)" }}>{item.role}</div>
                <div className="text-sm" style={{ color: "oklch(0.55 0.01 155)" }}>{item.place}</div>
                {item.certs && (
                  <div className="text-xs mt-3 leading-relaxed" style={{ color: "oklch(0.42 0.01 155)" }}>
                    {item.certs}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: "oklch(0.20 0.02 155)" }} />
        </div>
      </div>
    </section>
  );
};
