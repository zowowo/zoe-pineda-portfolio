import { ProjectCard } from "./ProjectCard.jsx";
import agrikaImage from '../assets/projects/agrika.png';
import hasteurantImage from '../assets/projects/haste-urant.png';
import bibeKalmaImage from '../assets/projects/bibekalma.png';
import loroImage from '../assets/projects/loro.png';


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
                    description="A CNN-LSTM based tool for visualizing and predicting rice yields using satellite imagery."
                    imageSrc={agrikaImage}
                    tech={['Flask', 'Python', 'CNN', 'LSTM', 'TensorFlow', 'SQL']}
                    githubLink="https://github.com/yourusername/agrika"
                    reverse={true}
                />

                <ProjectCard
                    title="Haste-urant"
                    description="A restaurant management system that allows users to manage orders, menu items, and more."
                    imageSrc={hasteurantImage}
                    tech={['HTML', 'CSS', 'Javascript', 'PHP', 'SQL', 'Python']}
                    githubLink="https://github.com/yourusername/haste-urant.png"
                    reverse={false}
                />

                <ProjectCard
                    title="Bibe Kalma"
                    description="A Unity-based platformer game that follows a  young duckling navigating the world and overcoming challenges like campfires and predators."
                    imageSrc={bibeKalmaImage}
                    tech={['Unity', 'C#', 'Game Development', '2D Art']}
                    githubLink="https://github.com/yourusername/agrika"
                    reverse={true}
                />

                <ProjectCard
                    title="LORO"
                    description="A pitch about an AI-powered speech therapy app designed to empower Filipino children with speech disorders."
                    imageSrc={loroImage}
                    tech={['Unity', 'C#', 'Game Development', '2D Art']}
                    youtubeLink="https://www.youtube.com/watch?v=pl7zoGsUxuc&ab_channel=ZoePineda"
                    reverse={false}
                />

            </div>
        </section>
    </div>
}