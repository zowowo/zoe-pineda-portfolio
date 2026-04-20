import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Get in Touch
        </h2>

        <div className="max-w-md mx-auto space-y-6">
          <a
            href="mailto:zoepineda47@gmail.com"
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 min-h-[44px]"
          >
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground">zoepineda47@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+639760321580"
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 min-h-[44px]"
          >
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-foreground">+63 976 032 1580</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 min-h-[44px]">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground">Sta. Rosa, Laguna, PH</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4">
            <Linkedin className="h-5 w-5 text-primary shrink-0" />
            <a
              href="https://www.linkedin.com/in/zoe-aleczandra-pineda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              linkedin.com/in/zoe-aleczandra-pineda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
