import { ArrowDown, Github, Mail, Linkedin, Download} from "lucide-react";

export const HeroSection = () => {
    return(
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground/90 tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi! I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Zoe</span>
                    <span className="text-foreground ml-2 opacity-0 animate-fade-in-delay-2">{""}Pineda.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"> 
                    A <span className="text-primary">software engineer </span>with a love for building intuitive digital experiences and solving real-world problems through code.
                </p>

                <div className="opacity-0 animate-fade-in-delay-4 flex flex-col md:flex-row items-center items-center justify-center gap-2">
                    <a href="#projects"className="button">
                        View my work
                    </a>
                    <a className="reverse-button flex items-center gap-2">
                        <Download className="h-6 w-6" /> Download CV
                    </a>
                </div>

                {/* Contact Buttons */}
                    
                <div className="py-5 flex flex-row md:flex-row items-center items-center justify-center gap-8">
                    
                    <a href="https://www.linkedin.com/in/zoe-aleczandra-pineda/" target="_blank" title="Lets connect!">
                        <Linkedin className="h-6 w-6 text-primary transform transition-transform duration-300 transform hover:scale-125" />
                    </a>
                    <a href="https://github.com/zowowo" target="_blank" title="Check out my Github!">
                        <Github className="h-6 w-6 text-primary transform transition-transform duration-300 transform hover:scale-125" />
                    </a>
                    <a href="mailto:zoepineda47@gmail.com" target="_blank" title="Send me an email :)">
                        <Mail className="h-6 w-6 text-primary transform transition-transform duration-300 transform hover:scale-125"/>
                    </a>
                    
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            {/* <span className="text-sm text-muted-foreground mb-2">Scroll</span> */}
            <ArrowDown className="h-10 w-5 text-primary"/>
        </div>
    </section>
    );
    
}