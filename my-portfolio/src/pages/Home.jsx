import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection"
import { PracticumSection } from "../components/PracticumSection.jsx"


export const Home = () => {
    return <div className="container bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        {/* <ThemeToggle/> */}

        {/* Background Effects */}
        {/* <StarBackground/> */}

        {/* Navbar */}
        <Navbar/>
        
        {/* Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <PracticumSection/>
        </main>
        
        {/* Footer */}
        <footer>
            <div className="container mx-auto text-center py-6">
                <p className="text-sm text-muted-foreground">© 2025 Zoe Pineda. All rights reserved.</p>
                <p className="text-sm text-muted-foreground">Built with love and React.</p>
            </div>

        </footer>
    </div>
}