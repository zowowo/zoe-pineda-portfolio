import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const timeline = [
  {
    period: "Oct 2025 – Present",
    role: "Software Engineer",
    place: "GoRocky · Healthcare",
    link: "https://gorocky.ph",
    desc: "356 merged PRs across 8+ repositories at a health-tech startup, spanning frontend, backend, and fullstack work.",
    current: true,
    highlights: [
      "Led full migration of marketing site from Webflow to Next.js 15 (~300k lines and lots of tears)",
      "Owned the development of the GoFuller (hair loss) product vertical end-to-end — assessment forms, catalog, checkout, and marketing pages",
      "Built a flexible coupon & promotions engine supporting per-category discounts and multi-event campaign scheduling",
      "Designed hybrid subscription + one-time add-on payment flows with Xendit and Shopify integrations",
      "Extracted a standalone design system app with 24 component pages, interactive playgrounds, and icon browser",
    ],
  },
  {
    period: "Apr – Jul 2025",
    role: "Software Engineering Intern",
    place: "STMicroelectronics · Calamba, Laguna",
    link: "https://www.st.com/content/st_com/en.html",
    desc: "Built a Flask web app that streamlined inventory workflows, helping staff spend less time on manual tracking and more on the work that matters. Delivered production-ready features in an agile team through sprint planning and code reviews.",
  },
  {
    period: "Aug 2022 – Jul 2025",
    role: "Bachelor of Science in Computer Science",
    place: "Mapúa Malayan Colleges Laguna · Magna Cum Laude · Best Thesis Awardee · JPCS Director of Membership",
    link: "https://mcl.edu.ph",
    certs: "CompTIA ITF+ · AWS Cloud Foundations · Google Cloud Essentials · DataCamp Data Analyst",
  },
  {
    period: "Jul – Nov 2022",
    role: "Virtual Assistant",
    place: "Viewo",
    link: "https://www.linkedin.com/company/viewo-company/",
    desc: "Assisted with teaching mobile development using Flutter. Learned Flutter development hands-on and supported curriculum delivery for students.",
  },
];

export const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="py-16 md:py-28 relative overflow-hidden bg-hero-bg"
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
        className="absolute top-12 right-[8%] text-[10rem] leading-none font-serif select-none pointer-events-none hidden lg:block text-hero-decorative"
        aria-hidden="true"
      >
        04
      </div>

      <div className="container mx-auto max-w-5xl px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage mb-3">Experience</p>
          <h2 className="text-2xl md:text-3xl tracking-tight mb-12 text-timeline-role">
            Career Timeline
          </h2>
        </motion.div>

        <div>
          {timeline.map((item, idx) => (
            <motion.article
              key={idx}
              className="group py-6 border-t border-timeline-border grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-10 items-baseline hover:bg-timeline-hover -mx-4 px-4 rounded-lg transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-sm text-sage flex items-center gap-2 whitespace-nowrap">
                {item.period}
                {item.current && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                )}
              </span>
              <div>
                <div className="text-[0.92rem] font-semibold mb-0.5 group-hover:text-sage transition-colors duration-200 text-timeline-role">{item.role}</div>
                <div className="text-sm mb-1 text-timeline-place">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-sage transition-colors duration-200"
                    >
                      {item.place}
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    item.place
                  )}
                </div>
                {item.desc && (
                  <p className="text-sm leading-relaxed mt-1.5 text-timeline-body">
                    {item.desc}
                  </p>
                )}
                {item.highlights && (
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-sm leading-relaxed flex items-start gap-2 text-timeline-body">
                        <span className="text-sage flex-shrink-0 leading-relaxed">&#8250;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                {item.certs && (
                  <div className="text-xs mt-3 leading-relaxed text-timeline-certs">
                    {item.certs}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
          {/* Bottom border */}
          <div className="border-t border-timeline-border" />
        </div>
      </div>
    </section>
  );
};
