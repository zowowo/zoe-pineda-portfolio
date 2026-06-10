import { motion } from "framer-motion";
import zoeImage from "../assets/zoe-pineda-1.png";

/**
 * Fairy lights string with a polaroid photo hanging from a clip.
 * Saved for later experimentation — not currently used in the hero.
 *
 * Usage: <FairyLightsPolaroid style={{ y: photoY, scale: photoScale }} />
 */
export const FairyLightsPolaroid = (props) => {
  return (
    <motion.div
      className="hidden md:flex md:w-2/5 relative flex-col items-center"
      {...props}
    >
      {/* String + lights + vertical drop — all in one SVG */}
      <svg
        className="w-full"
        viewBox="0 0 300 110"
        fill="none"
      >
        {/* The draped string: quadratic bezier */}
        <path
          d="M 10 10 Q 150 80 290 10"
          stroke="oklch(0.40 0.03 155)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Fairy lights — positions calculated on the bezier curve
            B(t) = (1-t)²·P0 + 2(1-t)t·P1 + t²·P2
            P0=(10,10) P1=(150,80) P2=(290,10) */}
        {[
          { cx: 52, cy: 28, delay: 0 },
          { cx: 94, cy: 39, delay: 0.6 },
          { cx: 136, cy: 45, delay: 1.2 },
          { cx: 164, cy: 45, delay: 0.3 },
          { cx: 206, cy: 39, delay: 0.9 },
          { cx: 248, cy: 28, delay: 1.5 },
        ].map((pos, i) => {
          const colors = [
            "oklch(0.85 0.12 90)",
            "oklch(0.80 0.14 155)",
            "oklch(0.88 0.10 60)",
            "oklch(0.82 0.12 155)",
            "oklch(0.85 0.10 90)",
            "oklch(0.80 0.14 155)",
          ];
          return (
            <g key={i}>
              {/* Small wire from string to bulb */}
              <line
                x1={pos.cx} y1={pos.cy - 5}
                x2={pos.cx} y2={pos.cy}
                stroke="oklch(0.40 0.03 155)"
                strokeWidth="0.8"
              />
              {/* Glow */}
              <circle cx={pos.cx} cy={pos.cy + 2} r="6" fill={colors[i]} opacity="0.25">
                <animate
                  attributeName="opacity"
                  values="0.1;0.35;0.1"
                  dur={`${1.8 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Bulb */}
              <circle cx={pos.cx} cy={pos.cy + 2} r="3" fill={colors[i]}>
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur={`${1.8 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
        {/* Vertical string from curve midpoint (150,45) down to bottom */}
        <line x1="150" y1="45" x2="150" y2="110" stroke="oklch(0.40 0.03 155)" strokeWidth="1.2" />
      </svg>

      {/* Clip + Polaroid — flush below the SVG */}
      <motion.div
        className="flex flex-col items-center"
        style={{ transformOrigin: "top center", marginTop: "-1px" }}
        animate={{ rotate: [2, -1, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Clip */}
        <div
          className="w-3.5 h-5 rounded-sm"
          style={{ background: "oklch(0.60 0.02 155)" }}
        />

        {/* Polaroid */}
        <div
          className="w-56 lg:w-64"
          style={{
            background: "oklch(0.96 0.003 90)",
            padding: "12px 12px 48px 12px",
            boxShadow: "0 8px 40px oklch(0.05 0.01 155 / 0.5), 0 2px 8px oklch(0.05 0.01 155 / 0.3)",
          }}
        >
          <div className="aspect-[3/4] overflow-hidden bg-black">
            <img
              src={zoeImage}
              alt="Zoe Pineda"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
