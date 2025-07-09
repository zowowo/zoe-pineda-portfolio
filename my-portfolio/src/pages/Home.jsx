import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx"
import { PracticumSection } from "../components/PracticumSection.jsx"
import { GlassBackground } from "../components/GlassBackground.jsx";


export const Home = () => {
    return <div className="container bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        {/* <ThemeToggle/> */}

        {/* Background Effects */}
        {/* <StarBackground/> */}
        <GlassBackground/>

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