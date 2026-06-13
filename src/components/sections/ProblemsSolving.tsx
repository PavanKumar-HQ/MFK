import { motion } from "motion/react";
import { Lightbulb, GraduationCap, UserX, Briefcase, Globe, BrainCircuit } from "lucide-react";

import { SpotlightCard } from "@/components/tribe/SpotlightCard";

const problems = [
  {
    title: "Advanced Skills Needed",
    desc: "Entrepreneurship now demands advanced skills and financial literacy to thrive in highly competitive and fast-paced environment.",
    icon: Lightbulb,
  },
  {
    title: "Curriculum Gap",
    desc: "The present curriculums are not up to the industry level. We bridge academia and industry by aligning theoretical knowledge with practical real-world demands.",
    icon: GraduationCap,
  },
  {
    title: "Cost of Unemployment",
    desc: "The UNSEEN cost of being UNEMPLOYED. We fix the education-industry gaps that leave graduates underprepared.",
    icon: UserX,
  },
  {
    title: "Slow Career Progression",
    desc: "Entry-level roles no longer guarantee leadership opportunities due to skill gaps. We provide students continuous skill development for their career growth.",
    icon: Briefcase,
  },
  {
    title: "Intense Competition",
    desc: "We provide industry-relevant skills to help them compete in the intense competition in the Job market even internationally.",
    icon: Globe,
  },
  {
    title: "Automation & AI",
    desc: "Since Automation and AI are reducing entry-level roles, we teach specialized skills for them to remain employable.",
    icon: BrainCircuit,
  },
];

export function ProblemsSolving() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
          The Challenge
        </h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
          What problems are we solving?
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-sky/10 rounded-2xl flex items-center justify-center mb-6 text-sky group-hover:scale-110 group-hover:bg-sky group-hover:text-white transition-all duration-300">
                <problem.icon size={24} />
              </div>
              <h4 className="font-display text-xl font-bold text-navy mb-3">
                {problem.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {problem.desc}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
