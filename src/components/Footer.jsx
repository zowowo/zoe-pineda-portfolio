import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4" style={{ background: "oklch(0.10 0.018 155)" }}>
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
        <p className="text-xs" style={{ color: "oklch(0.38 0.01 155)" }}>
          &copy; {new Date().getFullYear()} Zoe Pineda
        </p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5 text-xs" style={{ color: "oklch(0.38 0.01 155)" }}>
            {[
              { name: "LinkedIn", href: "https://www.linkedin.com/in/zoe-aleczandra-pineda/" },
              { name: "GitHub", href: "https://github.com/zowowo" },
              { name: "Email", href: "mailto:zoepineda47@gmail.com" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="hover:text-sage transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#hero"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-sage transition-colors duration-200"
            style={{ color: "oklch(0.38 0.01 155)" }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
