import { motion } from "motion/react";
import { MfkLogo } from "@/components/tribe/MfkLogo";

export function Introduction() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
            Introduction
          </h2>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight flex flex-wrap items-center gap-x-3">
            What is
            <span className="inline-flex items-center gap-3 text-gradient-sky whitespace-nowrap">
              <MfkLogo size={64} className="w-10 h-10 md:w-16 md:h-16" />
              MFK
            </span>?
          </h3>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
            <p>
              Founded in 2021 by Pavan Sharma, MFK is an educational nonprofit focused on improving
              employability and career readiness for commerce students, particularly those in Tier
              2, Tier 3, and Tier 4 towns across Karnataka.
            </p>
            <p>
              MFK's core premise is that commerce students often receive theoretical education but
              limited exposure to practical skills, industry mentorship, and career pathways. The
              organization aims to bridge the gap between academic learning and employment by
              providing free resources and industry connections.
            </p>
            <p className="font-medium text-navy">
              In short, MFK Foundation is essentially building a "commerce-to-career"
              ecosystem—using mentorship, practical learning, and industry exposure to help students
              from smaller towns become more employable and career-ready with our partners
              Rainmatter Foundation and WMG.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
            <span className="text-navy/40 font-display text-2xl">Visual / Image Placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
