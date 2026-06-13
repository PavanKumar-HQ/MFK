import { motion } from "motion/react";

// Tribe-inspired geometric asterisk mark.
export function TribeMark({
  size = 64,
  className = "",
  animate = false,
}: {
  size?: number;
  className?: string;
  animate?: boolean;
}) {
  const bars = [
    { rotate: 0, color: "var(--lavender)" },
    { rotate: 45, color: "var(--coral)" },
    { rotate: 90, color: "var(--yellow)" },
    { rotate: 135, color: "var(--sky)" },
  ];
  return (
    <div
      className={className}
      style={{ width: size, height: size, position: "relative" }}
      aria-hidden
    >
      {bars.map((b, i) => (
        <motion.span
          key={i}
          initial={animate ? { scaleY: 0, opacity: 0, rotate: b.rotate } : { rotate: b.rotate }}
          animate={animate ? { scaleY: 1, opacity: 1, rotate: b.rotate } : { rotate: b.rotate }}
          transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size * 0.16,
            height: size,
            marginLeft: -(size * 0.08),
            marginTop: -(size / 2),
            borderRadius: size * 0.08,
            background: b.color,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}
