import { cn } from "@/lib/utils";
import { Github, Youtube } from "lucide-react";

export const ProjectCard = ({ title, blackTitle, description, imageSrc, tech, githubLink, youtubeLink, reverse }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center gap-8 py-12 border-b border-border",
        reverse && "lg:flex-row-reverse"
      )}
    >
      {/* Image */}
      <div className="lg:w-1/2 w-full overflow-hidden rounded-xl shadow-md">
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
      </div>

      {/* Details */}
      <div className="lg:w-1/2 w-full space-y-4">
        <h3 className="text-3xl font-bold text-primary">{title}<span className=" text-2xl text-foreground">{blackTitle}</span></h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span key={i} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          {githubLink && (
            <a
          href={githubLink}
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-full hover:scale-105 transition"
        >
              <Github className="w-5 h-5" /> GitHub Repo
            </a>
          )}

          {youtubeLink && (
            <a
              href={youtubeLink}
              target="_blank"
              // className="reverse-button inline-flex items-center gap-2 border-red-500 text-red-500 hover:text-red-600"
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-full hover:scale-105 transition"
              >
              <Youtube className="w-5 h-5" /> Watch Video
            </a>
          )}
        </div>
        {/* Button */}
        
      </div>
    </div>
  );
};
