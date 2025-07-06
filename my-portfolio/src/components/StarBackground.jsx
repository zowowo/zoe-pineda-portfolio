import {useEffect, useState} from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    
    useEffect(() => {
        generateStars();
        generateMeteors();

        // Handle window resize to regenerate stars and meteors
        // This ensures that the background adapts to different screen sizes
        const handleResize = () => {
            generateStars();
            generateMeteors();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    const generateStars = () => {
    // Calculate the number of stars based on the window size
    const numberOfStars = Math.floor(
        window.innerWidth * window.innerHeight / 10000
    );

    const newStars = []

    for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
            id: i,
            size: Math.random() * 3 + 1, // Random size between 1 and 4 pixels
            x: Math.random() * 100, // Random x position in percentage
            y: Math.random() * 100, // Random y position in percentage
            opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
            animationDuration: Math.random() * 4 + 2, // Random duration between 2 and 6 seconds
            });
        }   
        setStars(newStars);

    };

    const generateMeteors = () => {
    // Calculate the number of stars based on the window size
    const numberOfStars = 4;
    const newMeteors = []

    for (let i = 0; i < numberOfStars; i++) {
        newMeteors.push({
            id: i,
            size: Math.random() * 2 + 1, // Random size between 1 and 4 pixels
            x: Math.random() * 100, // Random x position in percentage
            y: Math.random() * 20, // Random y position in percentage
            delay: Math.random() * 15, // Random opacity between 0.5 and 1
            animationDuration: Math.random() * 3 + 3, // Random duration between 2 and 6 seconds
            });
        }   
        setMeteors(newMeteors);

    };
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`
                }}/>
        ))}

        {/* {meteors.map(meteor => (
                <div 
                key={meteor.id}
                className="meteor animate-meteor" 
                style={{
                    width: `${meteor.size*50}px`,
                    height: `${meteor.size}px`,
                    left: `${meteor.x}%`,
                    top: `${meteor.y}%`,
                    animationDelay: meteor.delay,
                    animationDuration: `${meteor.animationDuration}s`
                }}/>
        ))} */}
    </div>
    );
};