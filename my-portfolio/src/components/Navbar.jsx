import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { Menu, X } from "lucide-react";


const navItems = [
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Practicum", href: "#practicum"},
    {name: "Let's Chat!", href: "#contact"}   
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);   

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // useEffect(() => {
    //     if (isMenuOpen) {
    //         const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    //         document.body.style.overflow = "hidden";
    //         document.body.style.marginRight = `${scrollBarWidth}px`;
    //     } else {
    //         document.body.style.overflow = "auto";
    //         document.body.style.marginRight = "0px";
    //     }
    //     }, [isMenuOpen]);

    return (
        <nav 
            className={
                cn(
                    "fixed w-full z-40 transition-all duration-300", 
                    isScrolled ? "py-3" : "py-5"
            )}
        >

        <div className="container flex items-center justify-between">
            {/* Logo */}
            <a 
                href="#hero" 
                className="text-xl font-bold text-primary flex items-center"
            >
                <span className="relative z-10">
                    <span className="text-glow text-primary">Zoe</span> Pineda
                </span>
            </a>

            {/* Desktop Navbar */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item,key) => (
                    <a 
                        key={key} 
                        href={item.href} 
                        className ="text-foreground/80 hover:text-primary transition-colors duration-300 "
                        onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                    </a>
                ))}
            </div>
            
            {/* Mobile Navbar */}
            <div className="flex items-center space-x-4 md:space-x-6">
                <ThemeToggle />
                <button onClick={() => setIsMenuOpen((prev)=>!prev)} 
                        className="md:hidden p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                        {" "}
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>} {" "}
                </button>
            </div>
            
            <div className = {cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col items-center space-y-6">
                {navItems.map((item,key) => (
                    <a 
                        key={key}
                        href={item.href} 
                        className ="text-foreground/80 hover:text-primary transition-colors duaration-300"
                        
                        onClick={() => setIsMenuOpen(false)} 
                    >
                        {item.name}
                    </a>
                ))}
                </div>
            </div>

        </div>
    </nav>)
}