import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  Award,
  BookOpen,
  LineChart,
  FileText,
  Laptop,
  Shield,
  Calculator,
  Star,
} from "lucide-react";

const corePrograms = [
  {
    name: "Financial Literacy",
    desc: "Covering economics, taxation, and management.",
    icon: TrendingUp,
  },
  {
    name: "Young Executives",
    desc: "Building core essentials through real-world exposure in finance, HR, and compliance skills.",
    icon: Users,
  },
  {
    name: "Professional Certifications",
    desc: "Guidance for CA, CFA, CMA, and other professional paths.",
    icon: Award,
  },
  {
    name: "Artha & Saral Series",
    desc: "Focused on business eco, markets, trade principles tailored in simple layman language, alongside personality development.",
    icon: BookOpen,
  },
];

const expertPrograms = [
  { name: "Data Analytics", icon: LineChart },
  { name: "Financial Reporting", icon: FileText },
  { name: "A/c Software (Zoho Books)", icon: Laptop },
  { name: "HR & Labour Laws", icon: Shield },
  { name: "Tally", icon: Calculator },
];

const experts = [
  "SC Sharada (Founder of SC Sharada and Associates)",
  "Vivek Krishna (Rapido VP)",
  "Srikara (WMC Co-founder)",
  "Chetan GMS (Founder of Stellaris Venture Partners)",
];

export function ProgramsRunning() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto bg-lavender/10 rounded-3xl my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
          Current Efforts
        </h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
          Programs MFK is running
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {corePrograms.map((prog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-lavender/20 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-lavender/30 text-navy flex items-center justify-center font-bold mb-4">
              <prog.icon size={20} />
            </div>
            <h4 className="text-lg font-bold text-navy mb-2">{prog.name}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{prog.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hover:-translate-y-1 transition-all duration-300"
        >
          <h4 className="font-display text-2xl font-bold text-navy mb-6">Expert-Led Programs</h4>
          <ul className="space-y-3">
            {expertPrograms.map((prog, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700">
                <prog.icon size={16} className="text-lavender flex-shrink-0" />
                {prog.name}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hover:-translate-y-1 transition-all duration-300"
        >
          <h4 className="font-display text-2xl font-bold text-navy mb-6">Expert Guidance From</h4>
          <ul className="space-y-3">
            {experts.map((expert, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700">
                <Star size={16} className="text-sky flex-shrink-0" />
                {expert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
