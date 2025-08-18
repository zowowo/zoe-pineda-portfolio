import { ProjectCard } from "./ProjectCard.jsx";
import agrikaImage from '../assets/projects/agrika.png';
import hasteurantImage from '../assets/projects/haste-urant.png';
import bibeKalmaImage from '../assets/projects/bibekalma.png';
import loroImage from '../assets/projects/loro.png';

const projects = [
  {
    title: "AgriKA",
    description: "A CNN-LSTM based tool for visualizing and predicting rice yields using satellite imagery.",
    imageSrc: agrikaImage,
    tech: ['Flask', 'Python', 'CNN', 'LSTM', 'TensorFlow', 'SQL'],
    githubLink: "https://github.com/lalaperlala/AgriKA",
  },
  {
    title: "Haste-urant",
    description: "A restaurant management system that allows users to manage orders, menu items, and more.",
    imageSrc: hasteurantImage,
    tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'SQL', 'Python'],
    githubLink: "https://github.com/GaWobi/Haste-aurant",
  },
  {
    title: "Bibe Kalma",
    description: "A Unity-based platformer game that follows a young duckling navigating the world and overcoming challenges like campfires and predators.",
    imageSrc: bibeKalmaImage,
    tech: ['Unity', 'C#', 'Game Development', '2D Art'],
    githubLink: "https://github.com/zowowo/Bibe-Kalma",
  },
  {
    title: "LORO",
    description: "A pitch about an AI-powered speech therapy app designed to empower Filipino children with speech disorders.",
    imageSrc: loroImage,
    tech: ['Unity', 'C#', 'Game Development', '2D Art'],
    youtubeLink: "https://www.youtube.com/watch?v=pl7zoGsUxuc&ab_channel=ZoePineda",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative min-h-screen mt-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Notable <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of apps, tools, and games I’ve built with love and lots of debugging.
        </p>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            reverse={index % 2 === 1} // reverse layout for every other card
          />
        ))}
      </div>
    </section>
  );
};
