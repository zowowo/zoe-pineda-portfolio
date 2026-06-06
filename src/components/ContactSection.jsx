import { motion } from "framer-motion";
import { File, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "zoepineda47@gmail.com",
    href: "mailto:zoepineda47@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/zoe-aleczandra-pineda",
    href: "https://www.linkedin.com/in/zoe-aleczandra-pineda/",
    external: true,
  },
  {
    label: "GitHub",
    value: "/zoepineda",
    href: "https://github.com/zoepineda",
    external: true,
  },
  {
    label: "Location",
    value: "Biñan, Laguna, PH",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-4 bg-surface-green-light relative overflow-hidden">
      {/* Decorative number */}
      <div
        className="absolute top-12 right-[8%] text-[10rem] leading-none font-serif select-none pointer-events-none hidden lg:block"
        style={{ color: "oklch(0.89 0.015 155)" }}
        aria-hidden="true"
      >
        05
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Left — invitation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-5">
              Let&apos;s work{" "}
              <em className="text-primary italic">together</em>
            </h2>
            <p className="text-[0.92rem] text-muted-foreground leading-relaxed max-w-[32ch] mb-8">
              Open to opportunities and always happy to chat over some coffee:)
            </p>
            <a
              href="https://drive.google.com/file/d/1m2AWkwp4Y8XLnd5xIgZuPwYSuprhP7Pd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 button"
            >
              <File className="w-4 h-4" />
              View my CV
            </a>
          </div>

          {/* Right — contact list */}
          <div>
            {contactLinks.map((link) => {
              const inner = (
                <div className="py-4 border-t border-border flex justify-between items-baseline">
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    {link.value}
                    {link.href && (
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary" />
                    )}
                  </span>
                </div>
              );

              if (link.href) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group block hover:bg-primary/5 transition-colors duration-200 -mx-3 px-3 rounded-lg"
                  >
                    {inner}
                  </a>
                );
              }
              return <div key={link.label}>{inner}</div>;
            })}
            <div className="border-t border-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
