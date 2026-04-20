import { Github, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ProjectCard = ({
  title,
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
        "group flex flex-col lg:flex-row items-start gap-8 py-12 border-b border-border",
        reverse && "lg:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="lg:w-1/2 w-full overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Details */}
      <div className="lg:w-1/2 w-full space-y-4">
        <h3 className="text-2xl font-bold text-foreground">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-md hover:bg-foreground/15 transition-colors duration-200 text-sm"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          )}

          {youtubeLink && (
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-md hover:bg-foreground/15 transition-colors duration-200 text-sm"
            >
              <Youtube className="w-4 h-4" /> Video
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
