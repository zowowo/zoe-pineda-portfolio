import zoeImage from "../assets/zoe-pineda-3.png";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.img
            src={zoeImage}
            alt="Zoe Pineda"
            className="w-48 md:w-56 shrink-0 rounded-2xl"
            whileHover={{ rotate: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-4 max-w-prose">
              I'm Zoe — a software engineer based in the Philippines.
              I like building things that are useful and easy to use, whether
              that's a web app, a data tool, or a game about a duckling.
            </p>
            <p className="text-lg text-muted-foreground mb-4 max-w-prose">
              I studied Computer Science and got into tech because I genuinely
              enjoy figuring out how things work. Most of my experience is in
              frontend and full-stack development, with some data science
              and machine learning on the side.
            </p>
            <p className="text-lg text-muted-foreground max-w-prose">
              Outside of code, I play guitar, do yoga, and spend too much
              time looking at my friends' dogs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
