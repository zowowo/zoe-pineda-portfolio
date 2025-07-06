
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

                        
                    </div>

                    

                </div>
                </div>
            
        </section>
    )
}