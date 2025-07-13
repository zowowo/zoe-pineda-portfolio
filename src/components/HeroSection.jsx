import { ArrowDown, Github, Mail, Linkedin, Download } from "lucide-react";
import zoeImage from "../assets/zoe-pineda-1.png"; // Use a transparent background image for best effect

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground/90 tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi! I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Zoe</span>
              <span className="text-foreground ml-2 opacity-0 animate-fade-in-delay-2">Pineda.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
              A <span className="text-primary">software engineer</span> with a love for building intuitive digital experiences and solving real-world problems through code.
            </p>

            {/* Buttons */}
            <div className="opacity-0 animate-fade-in-delay-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
              <a href="#projects" className="button">
                View my work
              </a>
              <a className="reverse-button flex items-center gap-2">
                <Download className="h-5 w-5" /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 pt-6">
              <a href="https://www.linkedin.com/in/zoe-aleczandra-pineda/" target="_blank" title="Connect on LinkedIn">
                <Linkedin className="h-6 w-6 text-primary hover:scale-125 transition-transform duration-300" />
              </a>
              <a href="https://github.com/zowowo" target="_blank" title="Check out my GitHub!">
                <Github className="h-6 w-6 text-primary hover:scale-125 transition-transform duration-300" />
              </a>
              <a href="mailto:zoepineda47@gmail.com" target="_blank" title="Send me an email">
                <Mail className="h-6 w-6 text-primary hover:scale-125 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-100 h-110 bg-primary/80 animate-[morph_10s_ease-in-out_infinite] z-0" />
            <img
              src={zoeImage}
              alt="Zoe Pineda"
              className="relative z-10 w-110 h-120 object-cover rounded-full border-primary shadow-lg"
            />
          </div>


          
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-10 w-5 text-primary" />
      </div>
    </section>
  );
};
