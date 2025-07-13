import { Github, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ProjectCard = ({
  title,
  blackTitle,
  description,
  imageSrc,
  tech,
  githubLink,
  youtubeLink,
  reverse,
}) => {
  return (
    <motion.div
      className={cn(
        "group flex flex-col lg:flex-row items-center gap-8 py-12 border-b border-border transition-transform",
        reverse && "lg:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="lg:w-1/2 w-full overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 group-hover:shadow-xl">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="lg:w-1/2 w-full space-y-4">
        <h3 className="text-3xl font-bold text-primary">
          {title}
          <span className="text-2xl text-foreground">{blackTitle}</span>
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-neutral-600 text-white rounded-full hover:scale-105 hover:bg-neutral-700 transition-all duration-300"
            >
              <Github className="w-5 h-5" /> GitHub Repo
            </a>
          )}

          {youtubeLink && (
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-red-700 text-white rounded-full hover:scale-105 hover:bg-red-600 transition-all duration-300"
            >
              <Youtube className="w-5 h-5" /> Watch Video
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
