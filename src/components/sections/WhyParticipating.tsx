export function WhyParticipating() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-coral">
              OUR MOTIVATION
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
              Why we are participating
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              At Zerodha Varsity, we believe that real financial education goes beyond textbooks—it requires hands-on experience, critical thinking, and open conversations. We partnered with Mentor For Kids (MFK) because we wanted to bridge the gap between academic theory and market reality. By opening our doors to these bright minds, our goal was to share our practical insights, challenge their assumptions, and ultimately empower the next generation of professionals to approach business and investing with clarity and confidence.
            </p>
          </div>
          <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/photos/General/IMG_9814.jpg" 
              alt="General activity" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/5 mix-blend-multiply rounded-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
