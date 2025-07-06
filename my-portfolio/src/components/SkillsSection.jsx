import { useState } from "react";
import { Github, GitMerge } from "lucide-react";
import clsx from "clsx";

const skills = [
  { name: "HTML", category: "Frontend", icon: "src/assets/skills/html.svg" },
  { name: "CSS", category: "Frontend", icon: "src/assets/skills/css.svg" },
  { name: "JavaScript", category: "Frontend", icon: "src/assets/skills/javascript.svg" },
  { name: "React", category: "Frontend", icon: "src/assets/skills/react.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "src/assets/skills/tailwind.svg" },
  { name: "Python", category: "Backend", icon: "src/assets/skills/python.svg" },
  { name: "Postman", category: "Tools", icon: "src/assets/skills/postman.svg" },
  { name: "Github", category: "Tools", icon: Github },
  { name: "Git", category: "Tools", icon: GitMerge },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-primary">Skills</span>{" "}
          <span className="text-foreground">and Technologies</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg shadow-md p-5 flex flex-col items-center justify-center hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              {typeof skill.icon === "string" ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-3"
                />
              ) : (
                <skill.icon className="w-16 h-16 mb-3 text-foreground" />
              )}
              <p className="text-sm text-muted-foreground">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
