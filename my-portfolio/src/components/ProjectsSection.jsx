import { ProjectCard } from "./ProjectCard.jsx";

export const ProjectsSection = () => {
    return <div>
        <section id="projects" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-12">
                    <span className="text-primary"> <span className="text-foreground">Notable </span>Projects</span>
                </h2>

                <ProjectCard
                    title="AgriKA"
                    blackTitle=": Rice Yield Predictor"
                    description="A CNN-LSTM based tool for visualizing and predicting rice yields using satellite imagery."
                    imageSrc="src/assets/projects/agrika.JPG"
                    tech={['Flask', 'Python', 'CNN', 'LSTM', 'TensorFlow', 'SQL']}
                    githubLink="https://github.com/yourusername/agrika"
                    reverse={true}
                />

                <ProjectCard
                    title="Haste-urant"
                    description="A CNN-LSTM based tool for visualizing and predicting rice yields using satellite imagery."
                    imageSrc="src/assets/projects/agrika.JPG"
                    tech={['HTML', 'CSS', 'Javascript', 'PHP', 'SQL', 'Python']}
                    githubLink="https://github.com/yourusername/agrika"
                    reverse={false}
                />

                <ProjectCard
                    title="Bibe Kalma"
                    description="A Unity-based platformer game that follows a  young duckling navigating the world and overcoming challenges like campfires and predators."
                    imageSrc="src/assets/projects/agrika.JPG"
                    tech={['Unity', 'C#', 'Game Development', '2D Art']}
                    githubLink="https://github.com/yourusername/agrika"
                    reverse={true}
                />

                <ProjectCard
                    title="LORO"
                    blackTitle=": Learn, Observe, Respond, Overcome"
                    description="A pitch about an AI-powered speech therapy app designed to empower Filipino children with speech disorders."
                    imageSrc="src/assets/projects/agrika.JPG"
                    tech={['Unity', 'C#', 'Game Development', '2D Art']}
                    githubLink="https://github.com/yourusername/agrika"
                    reverse={false}
                />

            </div>
        </section>
    </div>
}