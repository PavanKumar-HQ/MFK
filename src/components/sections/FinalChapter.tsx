import { motion } from "motion/react";
import { TribeMark } from "@/components/tribe/TribeMark";
import { MfkLogo } from "@/components/tribe/MfkLogo";
import hero from "@/assets/hero-montage.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const montage = [
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.40 PM.jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (1).jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (2).jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM (1).jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM.jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.43 PM.jpeg",
];

export function FinalChapter() {
  return (
    <section className="relative overflow-hidden bg-darkbg py-32 sm:py-48">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {[
          { t: "We came together for a day.", d: 0 },
          { t: "We left with ideas that will last much longer.", d: 0.3 },
        ].map((line) => (
          <motion.h2
            key={line.t}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, delay: line.d, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-3xl leading-snug text-navy sm:text-5xl"
          >
            {line.t}
          </motion.h2>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 border-t border-border pt-8 text-center flex flex-col items-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 font-display text-xl sm:text-2xl font-bold tracking-widest text-navy">
            <TribeMark size={64} />
            <span className="flex items-center gap-2 whitespace-nowrap">
              TRIBE <span className="text-sky">×</span> MENTORS FOR KIDS
            </span>
            <MfkLogo size={64} className="ml-2" />
          </div>
          <p className="mt-6 text-lg text-navy">Building Communities Through Learning</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-24 grid grid-cols-2 gap-2 px-2 sm:grid-cols-6"
      >
        {montage.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="group relative aspect-square w-full overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
            />
          </motion.div>
        ))}
      </motion.div>

      <footer className="mt-20 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Presented at Zerodha · June 14
      </footer>
    </section>
  );
}
