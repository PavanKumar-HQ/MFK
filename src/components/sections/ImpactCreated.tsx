export function ImpactCreated() {
  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/photos/General/IMG_9856.jpg" 
              alt="Impact created" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-sky/5 mix-blend-multiply rounded-3xl pointer-events-none" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky">
              THE RESULTS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
              The impact we created with them
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              Over the course of an intensive 9-hour day, we engaged 6 students across 8 distinct simulations and activities. The results were immediate and inspiring. Students who started the day hesitant were soon actively debating simulated market shocks, identifying cognitive biases, and building rapid product prototypes. Beyond just learning how to read charts or understand the 'ripple effect' of financial decisions, they walked away with stronger analytical skills, improved teamwork, and a profound realization that patience, self-awareness, and active listening are their greatest assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
