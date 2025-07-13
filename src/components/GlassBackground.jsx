// GlassBackground.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ import motion

const ORB_COUNT = 20;

export const GlassBackground = () => {
  const [orbs, setOrbs] = useState([]);
  const [noiseId, setNoiseId] = useState(Math.random());

  useEffect(() => {
    generateOrbs();
    const handleResize = () => generateOrbs();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateOrbs = () => {
    const newOrbs = Array.from({ length: ORB_COUNT }).map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40, // 40px to 120px
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.25 + 0.05,
      blur: Math.random() * 20 + 20,
      delay: Math.random() * 5,
    }));
    setOrbs(newOrbs);
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--card))]" />

      {/* Transparent noise overlay */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png?${noiseId}")`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Floating Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-primary"
          style={{
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 4 + orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
