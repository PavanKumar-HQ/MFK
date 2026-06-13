import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader } from "@/components/tribe/Loader";
import { ScrollProgress } from "@/components/tribe/ScrollProgress";
import { TribeMark } from "@/components/tribe/TribeMark";
import { MfkLogo } from "@/components/tribe/MfkLogo";
import { Hero } from "@/components/sections/Hero";
import { InTheRoom } from "@/components/sections/InTheRoom";
import { Members } from "@/components/sections/Members";
import { Moments } from "@/components/sections/Moments";
import { StudentVoices } from "@/components/sections/StudentVoices";
import { Timeline } from "@/components/sections/Timeline";
import { Impact } from "@/components/sections/Impact";
import { ImpactCreated } from "@/components/sections/ImpactCreated";
import { BehindScenes } from "@/components/sections/BehindScenes";
import { Ripple } from "@/components/sections/Ripple";
import { Recognition } from "@/components/sections/Recognition";
import { FinalChapter } from "@/components/sections/FinalChapter";
import { Introduction } from "@/components/sections/Introduction";
import { OurMission } from "@/components/sections/OurMission";
import { WhyParticipating } from "@/components/sections/WhyParticipating";
import { ProblemsSolving } from "@/components/sections/ProblemsSolving";
import { SetuProgram } from "@/components/sections/SetuProgram";
import { ProgramsRunning } from "@/components/sections/ProgramsRunning";
import { OurExperiences } from "@/components/sections/OurExperiences";
import { Conclusion } from "@/components/sections/Conclusion";
import { MotivateJoin } from "@/components/sections/MotivateJoin";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MFK × Tribe — An Immersive Experience" },
      {
        name: "description",
        content:
          "The story of the day MBA students from MFK met Tribe members. Conversations, activities, reflections and lasting impact — presented at Zerodha.",
      },
    ],
  }),
  component: Index,
});

import { motion } from "motion/react";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-soft-light">
      <motion.div
        className="absolute h-[60vw] w-[60vw] rounded-full bg-sky/60 blur-[100px]"
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ top: "-10%", left: "-10%" }}
      />
      <motion.div
        className="absolute h-[50vw] w-[50vw] rounded-full bg-lavender/60 blur-[100px]"
        animate={{ x: [0, -150, 100, 0], y: [0, 150, -100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ top: "20%", right: "-10%" }}
      />
      <motion.div
        className="absolute h-[55vw] w-[55vw] rounded-full bg-coral/50 blur-[100px]"
        animate={{ x: [0, 150, -150, 0], y: [0, -50, 150, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "-10%", left: "10%" }}
      />
    </div>
  );
}

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative bg-[#fdfbf7] min-h-screen">
      <AnimatedBackground />

      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <ScrollProgress />

      <div className="fixed left-6 top-5 z-[70] flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-navy/10 transition-all hover:shadow-lg">
        <MfkLogo size={26} />
        <span className="font-display text-sm font-semibold tracking-widest text-navy/50">
          ×
        </span>
        <TribeMark size={22} />
        <span className="font-display text-sm font-semibold tracking-[0.2em] text-navy">
          TRIBE
        </span>
      </div>

      <div className="relative z-10">
        <Hero loaded={loaded} />

        {/* Foundation Introduction */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 pb-12 shadow-sm">
          <Introduction />
          <OurMission />
          <WhyParticipating />
          <ProblemsSolving />
        </div>

        {/* The Event Context */}
        <InTheRoom />
        <Members />

        {/* Initiatives & Programs */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12">
          <SetuProgram />
          <ProgramsRunning />
        </div>

        {/* The Experience */}
        <Moments />

        {/* Personal Journeys */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12">
          <OurExperiences />
        </div>

        {/* Impact & Ripple */}
        <StudentVoices />
        <Timeline />
        <Impact />
        <ImpactCreated />
        <BehindScenes />
        <Ripple />
        <Recognition />

        {/* Conclusion & Next Steps */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12">
          <Conclusion />
        </div>

        <MotivateJoin />
        <FinalChapter />
      </div>
    </main>
  );
}
