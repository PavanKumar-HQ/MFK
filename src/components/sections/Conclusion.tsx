import { motion } from "motion/react";

const pastEngagements = [
  {
    title: "Hosting Our Students",
    summary:
      "Grateful to Aravind Maiya, Nimmi Sebastian, and Priyanka Birla for hosting our students and sharing valuable insights.",
    link: "https://www.linkedin.com/posts/grateful-to-aravind-maiya-nimmi-sebastian-ugcPost-7467155464401776642-cGFF",
    image: "/images/setu-founders.png",
  },
  {
    title: "Understanding the World of Work",
    summary:
      "Achuth Gowda’s visit to Fidelitus Corp and Suhasini Deshpande for sharing their expertise to help us understand the professional world.",
    link: "https://www.linkedin.com/posts/grateful-to-achuth-gowda-for-making-this-share-7467466367324049408-LAmG",
    image: "/images/setu-day2.jpg",
  },
  {
    title: "BBA Seminar",
    summary:
      "Our founder Pavan Sharma hosting a half-day seminar for BBA students from RR Institute of Management Studies.",
    link: "https://www.linkedin.com/posts/mfk-workshop-ugcPost-7454782203483328512-Q2tm",
    image: "/images/setu-cover.jpg",
  },
];

export function Conclusion() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
            Conclusion
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Gratitude & Past Engagements
          </h3>
          <p className="text-slate-600 mb-8">
            Reflecting on the programs held and showing gratitude towards our supporters.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {pastEngagements.map((eng, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="flex flex-col h-full bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* Custom LinkedIn-style Header */}
            <div className="p-6 pb-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center text-sky font-bold text-xl">
                in
              </div>
              <div>
                <h4 className="text-navy font-bold">{eng.title}</h4>
                <p className="text-sm text-slate-500">Mentors For Kids Foundation</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-6 flex-1">
              <p className="text-slate-600 leading-relaxed">{eng.summary}</p>
            </div>

            {/* Post Image */}
            <div className="mt-6 mx-6 bg-slate-50 rounded-xl overflow-hidden relative group border border-slate-100">
              <img
                src={eng.image}
                alt={eng.title}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              />
              <a
                href={eng.link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-20 bg-navy/0 group-hover:bg-navy/10 transition-colors flex items-center justify-center"
              >
                <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-navy/80 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  View post
                </span>
              </a>
            </div>

            {/* Footer Action */}
            <div className="p-6 mt-4 border-t border-slate-50">
              <a
                href={eng.link}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white rounded-xl font-medium transition-colors"
              >
                Read on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center bg-navy text-white rounded-3xl p-12"
      >
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">How You Can Help?</h3>
        <p className="text-white/80 text-lg italic">To be honest, no idea yet, working on it...</p>
      </motion.div>
    </section>
  );
}
