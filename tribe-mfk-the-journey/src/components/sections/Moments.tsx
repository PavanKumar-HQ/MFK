import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "motion/react";
import { X } from "lucide-react";
const row1 = [
  { src: "/photos/General/IMG_9814.jpg", ctx: "A question that turned into a 20-minute debate." },
  { src: "/photos/General/IMG_9822.jpg", ctx: "Mapping the first portfolio, together." },
  { src: "/photos/General/IMG_9826.jpg", ctx: "The room, fully alive." },
  { src: "/photos/General/IMG_9829.jpg", ctx: "Eight conversations happening at once." },
  { src: "/photos/General/IMG_9832.jpg", ctx: "Deep focus." },
  { src: "/photos/General/IMG_9834.jpg", ctx: "Mentorship in action." },
  { src: "/photos/group photos/WhatsApp Image 2026-05-12 at 8.04.19 PM.jpeg", ctx: "The Tribe." }
].map((item, i) => ({ ...item, id: i }));

const row2 = [
  { src: "/photos/General/IMG_9836.jpg", ctx: "Collaborative learning." },
  { src: "/photos/General/IMG_9856.jpg", ctx: "Moments of breakthrough." },
  { src: "/photos/General/IMG_9857.jpg", ctx: "Exchanging ideas." },
  { src: "/photos/General/WhatsApp Image 2026-05-12 at 7.50.44 PM.jpeg", ctx: "Engaged participation." },
  { src: "/photos/General/WhatsApp Image 2026-05-12 at 7.57.18 PM.jpeg", ctx: "Sharing perspectives." },
  { src: "/photos/General/WhatsApp Image 2026-05-12 at 8.34.24 PM.jpeg", ctx: "A day to remember." }
].map((item, i) => ({ ...item, id: i + row1.length }));

const row3 = [
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.40 PM.jpeg", ctx: "Tribe Goodies." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (1).jpeg", ctx: "Carefully curated." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (2).jpeg", ctx: "Special memories." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM (1).jpeg", ctx: "Exclusive merch." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM.jpeg", ctx: "Tokens of appreciation." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.43 PM.jpeg", ctx: "Something to remember us by." }
].map((item, i) => ({ ...item, id: i + row1.length + row2.length }));

const items = [...row1, ...row2, ...row3];

function Marquee({
  data,
  baseVelocity = 1,
  onOpen,
}: {
  data: typeof items;
  baseVelocity: number;
  onOpen: (id: number) => void;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isHovered) return;
    let moveBy = baseVelocity * (delta / 1000);
    // Add scroll velocity for parallax
    moveBy += moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Since we duplicate the items once, the container is 200% width of the single set.
  // We wrap between 0 and -50% to seamlessly loop.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div
      className="flex w-full overflow-hidden whitespace-nowrap py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex w-max gap-6 px-3" style={{ x }}>
        {[...data, ...data].map((it, idx) => (
          <motion.div
            key={`${it.id}-${idx}`}
            className="relative h-[220px] w-[320px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-sm sm:h-[280px] sm:w-[400px]"
            whileHover={{ scale: 1.05, zIndex: 10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <button
              onClick={() => onOpen(it.id)}
              className="group h-full w-full"
              aria-label="View photo"
            >
              <img
                src={it.src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/10" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Moments() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="relative z-20 mx-auto mb-16 max-w-7xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 05</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-6xl">
          Moments that mattered
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          No captions. Let the visuals speak — hover to pause, tap to reveal the story.
        </p>
      </div>

      <div
        className="w-full flex flex-col gap-2 py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <Marquee data={row1} baseVelocity={-1.5} onOpen={setOpen} />
        <Marquee data={row2} baseVelocity={1.2} onOpen={setOpen} />
        <Marquee data={row3} baseVelocity={-1.8} onOpen={setOpen} />
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="absolute inset-0 bg-white/60 backdrop-blur-md" />
            <motion.figure
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[88svh] max-w-5xl overflow-hidden rounded-[2rem] border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[open].src}
                alt=""
                className="max-h-[75svh] w-full bg-muted/20 object-contain"
              />
              <figcaption className="p-6 text-center font-display text-xl text-foreground">
                {items[open].ctx}
              </figcaption>
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-foreground shadow-sm transition-colors hover:bg-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
