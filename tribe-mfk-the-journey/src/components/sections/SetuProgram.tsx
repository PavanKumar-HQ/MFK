import { motion } from "motion/react";

export function SetuProgram() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background soft glowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-coral/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-navy/60 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Flagship Initiative
          </h2>
          <h3 className="font-display text-5xl md:text-7xl font-bold text-navy mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-orange-400">
              SETU 2.0
            </span>{" "}
            Program
          </h3>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            A transformative 4-day immersion bridging the gap between classroom theory and corporate
            reality.
          </p>
        </motion.div>

        {/* Main Content: Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative mt-16">
          {/* Photos Section (Left Column) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="col-span-2 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group bg-white"
              >
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src="/images/setu-cover.jpg"
                  alt="SETU 2.0 Cover"
                  className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-1 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group bg-white self-start"
              >
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src="/images/setu-day2.jpg"
                  alt="Finance & Governance"
                  className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-1 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group bg-white self-start"
              >
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src="/images/setu-founders.png"
                  alt="Founders & Leaders"
                  className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Section (Right Column) */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display text-navy mb-16 leading-snug font-medium"
            >
              Through interactions with founders, leaders, investors, and technologists, our
              students gained first-hand exposure to how businesses are built, scaled, governed, and
              transformed.
            </motion.p>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div>
                  <h4 className="text-navy font-display text-2xl font-bold flex items-center gap-3">
                    Finance & Tech
                  </h4>
                  <div className="h-[2px] w-12 bg-coral mt-3" />
                </div>
                <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                  <p>
                    From understanding AI-driven accounting with <strong>Harsha Shastry</strong>{" "}
                    (Cadel.ai) and <strong>Sanjay Hegde</strong>, to corporate governance with{" "}
                    <strong>Sharada SC</strong> and <strong>Tarun SatyaVageeshwar</strong>, students
                    experienced commerce beyond textbooks.
                  </p>
                  <p>
                    A special visit to <strong>Zerodha Varsity</strong> was made possible by{" "}
                    <strong>Karthik Rangappa</strong>, <strong>Komal Sharma</strong>, and the
                    Varsity Tribe members, creating an incredibly engaging environment around
                    finance and markets.
                  </p>
                </div>
              </motion.div>

              <div className="w-full h-[1px] bg-slate-100" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div>
                  <h4 className="text-navy font-display text-2xl font-bold flex items-center gap-3">
                    VC & Leadership
                  </h4>
                  <div className="h-[2px] w-12 bg-sky mt-3" />
                </div>
                <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                  <p>
                    Interactions with <strong>Naganand Doraswamy</strong> (Ideaspring Capital),
                    Standard Chartered teams, and <strong>Achuth Gowda</strong> (Fidelitus Corp)
                    opened doors to venture capital and entrepreneurship.
                  </p>
                  <p>
                    At Embark Group, <strong>Aravind Maiya</strong> and{" "}
                    <strong>Nimmi Sebastian</strong> conducted powerful sessions on leadership and
                    resilience.
                  </p>
                </div>
              </motion.div>

              <div className="w-full h-[1px] bg-slate-100" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div>
                  <h4 className="text-navy font-display text-2xl font-bold flex items-center gap-3">
                    Innovation
                  </h4>
                  <div className="h-[2px] w-12 bg-lavender mt-3" />
                </div>
                <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                  <p>
                    Students explored the future of agritech with <strong>Krishikan</strong>,
                    followed by a deep dive into incubation at IISc’s FSID with{" "}
                    <strong>L Tulasi Gandikota</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-sky/5 p-12 rounded-3xl"
        >
          <p className="font-display text-3xl text-navy font-bold mb-6">
            Proud of our students for their curiosity and willingness to learn.
          </p>
          <p className="text-coral font-medium tracking-widest uppercase text-sm mb-8">
            Shrivrinda P. • Nayana • Nandhana P. • Srijanya Poojary • Shwetha . • Shifa Banu
          </p>
          <p className="text-slate-500 italic max-w-2xl mx-auto">
            A special thank you to Pavan Sharma, Vishal Krishna, Ranjani G, Abhilash Kumble, Shreyas
            Mishra, Heena Jain, and Guruprasad Rao for their insightful sessions at BCL India.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
