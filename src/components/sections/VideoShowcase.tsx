import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/tribe/Reveal";

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const main = videoRef.current;
    const bg = bgVideoRef.current;
    if (main && bg) {
      if (isPlaying) {
        main.pause();
        bg.pause();
      } else {
        main.play().catch((err) => console.log("Video play interrupted:", err));
        bg.play().catch((err) => console.log("Video play interrupted:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && bgVideoRef.current) {
      const diff = Math.abs(videoRef.current.currentTime - bgVideoRef.current.currentTime);
      if (diff > 0.3) {
        bgVideoRef.current.currentTime = videoRef.current.currentTime;
      }
    }
  };

  return (
    <section className="relative py-28 sm:py-40 bg-navy/5 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky font-semibold">Section 06</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground">
            The Highlight Reel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-lg">
            Experience the energy, collaboration, and learning of the MFK × Tribe day in motion.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-navy/10 bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] group cursor-pointer aspect-[16/9] w-full max-w-4xl" onClick={togglePlay}>
            {/* Blurred Background Video */}
            <video
              ref={bgVideoRef}
              src="/photos/General/capcut edit mfk reel.mp4"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-105 pointer-events-none"
              loop
              muted
              playsInline
            />

            {/* Sharp Foreground Video */}
            <video
              ref={videoRef}
              src="/photos/General/capcut edit mfk reel.mp4"
              className="relative h-full mx-auto object-contain z-10"
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
            />

            {/* Custom overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/35 opacity-60 transition-opacity group-hover:opacity-80 z-20" />

            {/* Central Play/Pause Button overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: isPlaying ? 0.8 : 1, opacity: isPlaying ? 0 : 1 }}
                whileHover={{ scale: 1.1 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-navy shadow-2xl transition-all duration-300 backdrop-blur-sm"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </motion.div>
            </div>

            {/* Bottom Controls panel */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-semibold tracking-wider bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                {isPlaying ? "Playing Reel" : "Paused"}
              </span>

              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors backdrop-blur-md"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
