import { ArrowRight } from "lucide-react";

export function MotivateJoin() {
  return (
    <section className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 bg-gradient-to-tr from-sky/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl md:text-6xl">
              Ready to make a difference?
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              The energy, curiosity, and rapid growth we witnessed in just one day prove how much untapped potential is waiting to be unlocked. But we can't do it alone. If you are passionate about financial literacy, enjoy solving complex problems, and want to help shape the minds of future leaders, we need you. Step out of your everyday routine, share your unique expertise, and experience the unparalleled reward of giving back.
            </p>
            <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-navy/90 hover:shadow-lg">
              Join the Tribe <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/photos/General/IMG_9826.jpg" 
              alt="Join the Tribe" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
