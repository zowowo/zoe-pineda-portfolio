import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

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
        </main>
        
        {/* Footer */}
    </div>
}