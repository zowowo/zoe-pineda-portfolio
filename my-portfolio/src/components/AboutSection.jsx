import {Github, Mail, Linkedin, Download} from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me </span>
                </h2>
            </div>

            <div className="container mx-auto max-w-5xl px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
                    
                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <img 
                            src="src/assets/zoe-pineda.jpg" 
                            alt="Zoe Pineda" 
                            className="w-50 md:w-60 rounded object-cover shadow-lg"
                            // class names for making it gray by default and color on hover
                            // filter grayscale hover:grayscale-0 transition duration-300
                        />
                    </div>

                    {/* Text Section */}
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-xl text-muted-foreground text-foreground/90 mb-4">
                            I'm <span className="font-bold text-primary">Zoe</span>, a passionate software engineer with a knack for creating intuitive digital experiences. 
                            I love solving real-world problems through code and am always eager to learn new technologies.
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground text-foreground/90">
                            My journey in tech has been fueled by curiosity and a desire to make a positive impact through my work. 
                            I thrive in collaborative environments and enjoy tackling challenges head-on.
                        </p>

                        {/* Contact Buttons */}
                    
                        <div className="py-5 flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
                            <a href="https://github.com/zowowo" target="_blank" title="Check out my Github!">
                                <Github className="h-6 w-6 text-primary transform transition-transform duration-1200 " />
                            </a>
                            <a href="mailto:zoepineda47@gmail.com" target="_blank" title="Send me an email :)">
                                <Mail className="h-6 w-6 text-primary transform transition-transform duration-1200"/>
                            </a>
                            <a href="https://www.linkedin.com/in/zoe-aleczandra-pineda/" target="_blank" title="Lets connect!">
                                <Linkedin className="h-6 w-6 text-primary transform transition-transform duration-1200" />
                            </a>
                        </div>
                    </div>

                    

                </div>
                </div>
            
        </section>
    )
}