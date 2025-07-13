import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-10 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Coffee? <span className="text-primary"> Code?</span> Chat?
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

      <div className="flex flex-col items-center justify-center">
        <div className="space-y-8 text-center items-center flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Let's build something together :)
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:zoepineda47@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    zoepineda47@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+639760321580"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +63 976 032 1580
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Sta. Rosa, Laguna, PH
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> I'd love to hear from you! </h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="hover:text-primary hover:scale-110 transition-transform duration-200" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-primary hover:scale-110 transition-transform duration-200" target="_blank">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-primary hover:scale-110 transition-transform duration-200" target="_blank">
                  <Instagram />
                </a>
                {/* <a href="#" target="_blank">
                  <Twitch />
                </a> */}
              </div>
            </div>
          </div>

          {/* <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};
