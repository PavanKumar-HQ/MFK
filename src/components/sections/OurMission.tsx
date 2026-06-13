import { motion } from "motion/react";
import { Target, Globe } from "lucide-react";

export function OurMission() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex items-center bg-sky/5 rounded-3xl my-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
            MFK's Mission
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
            MFK's mission is to change the 50% unemployability gap and make students job-ready.
          </h3>
          <div className="text-lg text-slate-700 leading-relaxed mb-10 font-light text-left space-y-6">
            <div className="flex items-start gap-4">
              <Target className="text-sky flex-shrink-0 mt-1" size={28} />
              <p>
                Driven by real-world needs, and delivered at zero cost to students and colleges,
                this initiative ensures students are not just employable, but indispensable.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="text-sky flex-shrink-0 mt-1" size={28} />
              <p>
                MFK is backed by global partners like{" "}
                <strong>AICPA-CIMA, Zerodha, BCL, Infosys Foundation</strong>. Mentors for Kids
                bridges the gap between education and industry. These partnerships equip students
                with future-ready skills, global exposure, and the confidence to succeed beyond
                borders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
