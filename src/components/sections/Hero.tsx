import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImg from "@/assets/hero-montage.jpg";
import { MfkLogo } from "@/components/tribe/MfkLogo";
import { TribeMark } from "@/components/tribe/TribeMark";
import { VarsityLogo } from "@/components/tribe/VarsityLogo";

const words = ["Conversations.", "Perspectives.", "Learning.", "Impact."];

export function Hero({ loaded = true }: { loaded?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="MBA students and Tribe members in conversation"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#faf5ed]" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display text-2xl text-white/90 sm:text-4xl drop-shadow-md"
        >
          An event was planned.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-3 font-display text-xl text-sky sm:text-3xl drop-shadow-md"
        >
          But what happened was far greater.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={loaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 24, filter: "blur(8px)" }}
              transition={{ duration: 0.7, delay: 2.4 + i * 0.4 }}
              className="font-display text-3xl font-semibold text-white sm:text-5xl drop-shadow-lg"
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 4.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-display text-5xl font-bold tracking-tight sm:text-8xl drop-shadow-xl"
        >
          <div className="flex items-center gap-3 sm:gap-6">
            <MfkLogo size={80} className="w-12 h-12 sm:w-20 sm:h-20" />
            <span className="text-white">MFK</span>
          </div>
          <span className="text-gradient-sky">×</span>{" "}
          <div className="flex items-center gap-3 sm:gap-6">
            <TribeMark size={80} className="w-12 h-12 sm:w-20 sm:h-20" animate={loaded} />
            <span className="text-white">TRIBE</span>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.9, delay: 5.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-white/50 tracking-[0.2em] uppercase"
        >
          <span className="normal-case text-white/70 font-normal">A Zerodha</span>
          <VarsityLogo size={16} className="mx-0.5 opacity-90 shadow-md" />
          <span className="text-white font-bold tracking-widest">Varsity</span>
          <span className="normal-case text-white/70 font-normal">initiative</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 5.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-navy/60"
      >
        Scroll to begin
      </motion.div>
    </section>
  );
}
