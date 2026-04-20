import { Github, Mail, Linkedin, File } from "lucide-react";
import zoeImage from "../assets/zoe-pineda-1.png"; // Use a transparent background image for best effect

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="opacity-0 animate-fade-in-delay-1"> Zoe</span>
              <span className="opacity-0 animate-fade-in-delay-2"> Pineda.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-3">
              Software engineer who builds intuitive digital experiences and solves real-world problems through code.
            </p>

            {/* Buttons */}
            <div className="opacity-0 animate-fade-in-delay-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
              <a href="#projects" className="button">
                View my work
              </a>
              <a href="https://drive.google.com/file/d/1m2AWkwp4Y8XLnd5xIgZuPwYSuprhP7Pd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="reverse-button flex items-center gap-2">
                <File className="h-5 w-5" /> View CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-2 pt-6">
              <a href="https://www.linkedin.com/in/zoe-aleczandra-pineda/" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground/60 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/zowowo" target="_blank" rel="noopener noreferrer" title="Check out my GitHub!" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground/60 hover:text-primary transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:zoepineda47@gmail.com" target="_blank" rel="noopener noreferrer" title="Send me an email" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground/60 hover:text-primary transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <img
              src={zoeImage}
              alt="Zoe Pineda"
              className="relative w-64 md:w-80 h-auto object-cover rounded-2xl"
            />
          </div>


          
        </div>
      </div>

    </section>
  );
};
