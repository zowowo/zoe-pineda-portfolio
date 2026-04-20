import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import htmlIcon from '../assets/skills/html.svg';
import cssIcon from '../assets/skills/css.svg';
import jsIcon from '../assets/skills/javascript.svg';
import reactIcon from '../assets/skills/react.svg';
import tailwindIcon from '../assets/skills/tailwind.svg';
import bootstrapIcon from '../assets/skills/bootstrap.svg';
import pythonIcon from '../assets/skills/python.svg';
import postmanIcon from '../assets/skills/postman.svg';
import flutterIcon from '../assets/skills/flutter.svg';
import vscodeIcon from '../assets/skills/vscode.svg';
import figmaIcon from '../assets/skills/figma.svg';
import { Database, Github, GitMerge } from "lucide-react";
import clsx from "clsx";

const skills = [
  { name: "HTML", category: "Frontend", icon: htmlIcon },
  { name: "CSS", category: "Frontend", icon: cssIcon },
  { name: "JavaScript", category: "Frontend", icon: jsIcon },
  { name: "React", category: "Frontend", icon: reactIcon },
  { name: "Tailwind CSS", category: "Frontend", icon: tailwindIcon },
  { name: "Bootstrap", category: "Frontend", icon: bootstrapIcon },
  { name: "Python", category: "Backend", icon: pythonIcon },
  { name: "Postman", category: "Tools", icon: postmanIcon },
  { name: "Github", category: "Tools", icon: Github },
  { name: "Git", category: "Tools", icon: GitMerge },
  { name: "Flutter", category: "Mobile Development", icon: flutterIcon },
  { name: "MySQL", category: "Backend", icon: Database },
  { name: "VSCode", category: "Tools", icon: vscodeIcon },
  { name: "Figma", category: "Tools", icon: figmaIcon },
];

const categories = ["All", "Frontend", "Backend", "Mobile Development", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Skills &amp; Technologies
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "px-3 py-1.5 rounded-md transition-colors duration-200 text-sm font-medium",
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
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-card rounded-lg p-5 flex flex-col items-center justify-center border border-border transition-colors duration-200 hover:border-primary/30"
              >
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 mb-3"
                  />
                ) : (
                  <skill.icon className="w-10 h-10 mb-3 text-foreground" />
                )}
                <p className="text-sm text-muted-foreground">{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
