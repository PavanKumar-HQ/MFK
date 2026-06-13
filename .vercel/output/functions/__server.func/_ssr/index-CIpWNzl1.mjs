import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as activities, t as tribeMembers, r as reflections, f as feedback, b as timeline, i as impactStats, c as behindScenes, d as rippleNodes, e as recognition } from "./router-Dz6CT30M.mjs";
import { a as accentVar, b as accentText, c as accentBg } from "./accent-DT_ioC-G.mjs";
import { m as motion, A as AnimatePresence, u as useScroll, a as useSpring, b as useTransform, c as useMotionValue, d as useVelocity, e as useAnimationFrame, f as useInView } from "../_libs/framer-motion.mjs";
import { T as Target, G as Globe, L as Lightbulb, a as GraduationCap, U as UserX, B as Briefcase, b as BrainCircuit, X, C as ChevronLeft, c as ChevronRight, d as TrendingUp, e as Users, A as Award, f as BookOpen, g as ChartLine, F as FileText, h as Laptop, S as Shield, i as Calculator, j as Star, k as Search, Q as Quote } from "../_libs/lucide-react.mjs";
import { w as wrap } from "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
const bars = [
  { rotate: 0, color: "#02284A" },
  { rotate: 45, color: "#C6C4FF" },
  { rotate: 90, color: "#77B5F7" },
  { rotate: 135, color: "#F49BB5" }
];
function Loader({ onComplete }) {
  const [stage, setStage] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1400),
      setTimeout(() => setStage(2), 2600),
      setTimeout(() => setStage(3), 3800),
      setTimeout(() => onComplete(), 4600)
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: stage < 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-darkbg bg-grain",
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-32 w-32", children: bars.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { scaleY: 0, opacity: 0, rotate: b.rotate - 90 },
            animate: { scaleY: 1, opacity: 1, rotate: b.rotate },
            transition: { delay: 0.18 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 18,
              height: 128,
              marginLeft: -9,
              marginTop: -64,
              borderRadius: 9,
              background: b.color,
              transformOrigin: "center"
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 h-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
          stage >= 1 && stage < 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.8 },
              className: "font-display text-2xl font-semibold tracking-[0.3em] text-navy sm:text-4xl",
              children: [
                "TRIBE ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky", children: "×" }),
                " VARSITY TRIBE"
              ]
            },
            "title"
          ),
          stage >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "font-display text-xl tracking-[0.4em] text-sky sm:text-2xl",
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: "MFK EXPERIENCE"
            },
            "sub"
          )
        ] }) })
      ]
    }
  ) });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX },
      className: "fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-sky via-lavender to-coral"
    }
  );
}
function TribeMark({
  size = 64,
  className = "",
  animate = false
}) {
  const bars2 = [
    { rotate: 0, color: "var(--lavender)" },
    { rotate: 45, color: "var(--coral)" },
    { rotate: 90, color: "var(--yellow)" },
    { rotate: 135, color: "var(--sky)" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className,
      style: { width: size, height: size, position: "relative" },
      "aria-hidden": true,
      children: bars2.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: animate ? { scaleY: 0, opacity: 0, rotate: b.rotate } : { rotate: b.rotate },
          animate: animate ? { scaleY: 1, opacity: 1, rotate: b.rotate } : { rotate: b.rotate },
          transition: { delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size * 0.16,
            height: size,
            marginLeft: -(size * 0.08),
            marginTop: -(size / 2),
            borderRadius: size * 0.08,
            background: b.color,
            transformOrigin: "center"
          }
        },
        i
      ))
    }
  );
}
function MfkLogo({ size = 32, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "15", r: "8", fill: "#4a406e" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M20 70 L50 35 L80 70",
            stroke: "#4a406e",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "45", r: "4", fill: "#fbb040" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M35 75 L50 55 L65 75",
            stroke: "#fbb040",
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
const heroImg = "/assets/hero-montage-DqjDygRa.jpg";
const words = ["Conversations.", "Perspectives.", "Learning.", "Impact."];
function Hero({ loaded = true }) {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative h-[100svh] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { scale }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroImg,
          alt: "MBA students and Tribe members in conversation",
          width: 1920,
          height: 1080,
          className: "h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#faf5ed]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grain opacity-40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        style: { y, opacity },
        className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
              transition: { duration: 0.9, delay: 0.2 },
              className: "font-display text-2xl text-white/90 sm:text-4xl drop-shadow-md",
              children: "An event was planned."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
              transition: { duration: 0.9, delay: 1.4 },
              className: "mt-3 font-display text-xl text-sky sm:text-3xl drop-shadow-md",
              children: "But what happened was far greater."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1", children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { opacity: 0, y: 24, filter: "blur(8px)" },
              animate: loaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 24, filter: "blur(8px)" },
              transition: { duration: 0.7, delay: 2.4 + i * 0.4 },
              className: "font-display text-3xl font-semibold text-white sm:text-5xl drop-shadow-lg",
              children: w
            },
            w
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
              transition: { duration: 1, delay: 4.4, ease: [0.22, 1, 0.36, 1] },
              className: "mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-display text-5xl font-bold tracking-tight sm:text-8xl drop-shadow-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MfkLogo, { size: 80, className: "w-12 h-12 sm:w-20 sm:h-20" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "MFK" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-sky", children: "×" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TribeMark, { size: 80, className: "w-12 h-12 sm:w-20 sm:h-20", animate: loaded }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "TRIBE" })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: loaded ? { opacity: 1 } : { opacity: 0 },
        transition: { delay: 5.4 },
        className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-navy/60",
        children: "Scroll to begin"
      }
    )
  ] });
}
function Reveal({
  children,
  delay = 0,
  className = "",
  y = 40
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
      variants: { hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } },
      children
    }
  );
}
const center = ["Ideas", "Experiences", "Conversations", "Growth"];
function InTheRoom() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 02" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl", children: "Who was in the room" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold text-sky", children: "48" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-2xl", children: "MBA Students" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "From MFK, hungry to learn." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-3", children: [
        center.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.7 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.15, duration: 0.6 },
            className: "rounded-full border border-border bg-card/60 px-6 py-2 font-display text-lg text-navy",
            children: c
          },
          c
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "pointer-events-none absolute inset-0 -z-10 h-full w-full", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.line,
          {
            x1: "0%",
            y1: "50%",
            x2: "50%",
            y2: "50%",
            stroke: "var(--sky)",
            strokeWidth: "1",
            strokeDasharray: "4 4",
            initial: { pathLength: 0 },
            whileInView: { pathLength: 1 },
            viewport: { once: true },
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold text-coral", children: "6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-2xl", children: "Tribe Members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Mentors, ready to share." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, className: "mt-16 text-center text-lg text-muted-foreground", children: "Two worlds met in the middle — and connections began to form." })
  ] }) });
}
function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(14, 165, 233, 0.15)"
  // Default sky blue glow
}) {
  const divRef = reactExports.useRef(null);
  const [position, setPosition] = reactExports.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = reactExports.useState(0);
  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: divRef,
      onMouseMove: handleMouseMove,
      onMouseEnter: () => setOpacity(1),
      onMouseLeave: () => setOpacity(0),
      className: `relative overflow-hidden ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px transition-opacity duration-300 z-0",
            style: {
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full h-full", children })
      ]
    }
  );
}
function initials(name) {
  return name.split(" ").map((n) => n[0]).join("");
}
function Members() {
  const [active, setActive] = reactExports.useState(null);
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const fullActivity = active ? activities.find((a) => a.name === active.activity) : null;
  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null && active?.gallery) {
      setLightboxIndex((lightboxIndex - 1 + active.gallery.length) % active.gallery.length);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 sm:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 03" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground", children: "Meet the Tribe & Activities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground text-lg", children: "Three mentors. Three perspectives. Tap any card to open their story and see the activity they conducted." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: tribeMembers.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          onClick: () => setActive(m),
          whileHover: { y: -8 },
          className: "group relative w-full h-full",
          style: { outline: "none" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SpotlightCard, { className: "h-full w-full overflow-hidden rounded-3xl border border-border bg-card p-8 text-left transition-colors hover:shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex h-20 w-20 items-center justify-center rounded-2xl font-display text-2xl font-bold text-navy shadow-sm",
                style: { background: accentVar[m.accent] },
                children: initials(m.name)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-semibold text-foreground", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-sm font-semibold ${accentText[m.accent]}`, children: m.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-navy/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Activity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/80", children: m.activity })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground line-clamp-2", children: m.intro }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 inline-block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground transition-colors group-hover:text-foreground", children: "View Experience & Photos →" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30",
                style: { background: accentVar[m.accent] }
              }
            )
          ] })
        }
      ) }, m.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "fixed inset-0 z-[90] flex items-center justify-center bg-white/70 backdrop-blur-2xl",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "relative w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide",
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 20, opacity: 0 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-16 sm:py-24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  initial: { scale: 0, opacity: 0, rotate: -90 },
                  animate: { scale: 1, opacity: 1, rotate: 0 },
                  exit: { scale: 0, opacity: 0, rotate: 90 },
                  transition: { delay: 0.3, type: "spring", stiffness: 200, damping: 20 },
                  onClick: () => setActive(null),
                  className: "fixed right-6 top-6 sm:right-10 sm:top-10 rounded-full bg-white shadow-xl hover:bg-gray-50 p-3 text-navy transition-colors z-20",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mb-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { scale: 0.5, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        transition: { delay: 0.1, type: "spring", stiffness: 200, damping: 20 },
                        className: "flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl font-display text-4xl font-bold text-navy shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]",
                        style: { background: accentVar[active.accent] },
                        children: initials(active.name)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.h3,
                        {
                          initial: { x: -20, opacity: 0 },
                          animate: { x: 0, opacity: 1 },
                          transition: { delay: 0.2 },
                          className: "font-display text-4xl sm:text-5xl font-bold text-foreground",
                          children: active.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.p,
                        {
                          initial: { x: -20, opacity: 0 },
                          animate: { x: 0, opacity: 1 },
                          transition: { delay: 0.3 },
                          className: `mt-2 text-lg font-semibold tracking-wide uppercase ${accentText[active.accent]}`,
                          children: active.role
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.4 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Introduction", value: active.intro })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.5 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Personal Reflection", value: active.reflection })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.6 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Memorable Moment", value: active.memorableMoment })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { y: 40, opacity: 0, scale: 0.95 },
                    animate: { y: 0, opacity: 1, scale: 1 },
                    transition: { delay: 0.4, type: "spring", stiffness: 100, damping: 20 },
                    className: "relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 h-fit overflow-hidden group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-30 transition-transform duration-1000 group-hover:scale-150",
                          style: { background: accentVar[active.accent] }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-1.5 mb-6 rounded-full bg-navy/5 text-navy text-sm font-bold uppercase tracking-widest backdrop-blur-sm", children: "Activity Conducted" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-3xl font-bold text-foreground mb-8", children: active.activity }),
                        fullActivity ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Objective", value: fullActivity.objective }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "How it worked", value: fullActivity.how }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "The Result", value: fullActivity.result })
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground italic", children: "Activity details not found." })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { y: 30, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { delay: 0.7 },
                  className: "mt-20 pt-16 border-t border-navy/10",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold uppercase tracking-widest text-navy mb-8", children: "Activity Gallery" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: active.gallery && active.gallery.length > 0 ? active.gallery.map((image, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.button,
                      {
                        initial: { scale: 0.9, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        transition: { delay: 0.8 + idx * 0.1 },
                        onClick: () => setLightboxIndex(idx),
                        className: "aspect-[4/3] rounded-3xl overflow-hidden bg-navy/5 group relative block w-full outline-none focus-visible:ring-2 focus-visible:ring-navy",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: image.src,
                              alt: image.title,
                              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-navy px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-opacity translate-y-2 group-hover:translate-y-0 duration-300", children: "VIEW FULLSCREEN" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 text-white font-semibold text-sm tracking-wide transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 delay-75", children: image.title })
                          ] })
                        ]
                      },
                      idx
                    )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground italic col-span-full", children: "No photos available." }) })
                  ]
                }
              )
            ] })
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setLightboxIndex(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setLightboxIndex(null),
              className: "absolute right-6 top-6 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors z-20",
              "aria-label": "Close Gallery",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: prevImage,
              className: "absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-4 text-white transition-colors z-20",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 32 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              src: active?.gallery[lightboxIndex]?.src,
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
              transition: { duration: 0.3 },
              className: "max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl",
              alt: active?.gallery[lightboxIndex]?.title || "Gallery image",
              onClick: (e) => e.stopPropagation()
            },
            lightboxIndex
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                if (lightboxIndex !== null && active?.gallery) {
                  setLightboxIndex((lightboxIndex + 1) % active.gallery.length);
                }
              },
              className: "absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-4 text-white transition-colors z-20",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 32 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-display font-semibold tracking-wide", children: active?.gallery[lightboxIndex]?.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/50 text-xs tracking-widest font-semibold uppercase", children: [
              lightboxIndex + 1,
              " / ",
              active?.gallery.length
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
function Field({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg text-foreground/90 leading-relaxed", children: value })
  ] });
}
const row1 = [
  { src: "/photos/General/IMG_9814.jpg", ctx: "A question that turned into a 20-minute debate." },
  { src: "/photos/General/IMG_9822.jpg", ctx: "Mapping the first portfolio, together." },
  { src: "/photos/General/IMG_9826.jpg", ctx: "The room, fully alive." },
  { src: "/photos/General/IMG_9829.jpg", ctx: "Eight conversations happening at once." },
  { src: "/photos/General/IMG_9832.jpg", ctx: "Deep focus." },
  { src: "/photos/General/IMG_9834.jpg", ctx: "Mentorship in action." },
  { src: "/photos/group photos/WhatsApp Image 2026-05-12 at 8.04.19 PM.jpeg", ctx: "The Tribe." }
].map((item, i) => ({ ...item, id: i }));
const row2 = [
  { src: "/photos/General/IMG_9836.jpg", ctx: "Collaborative learning." },
  { src: "/photos/General/IMG_9856.jpg", ctx: "Moments of breakthrough." },
  { src: "/photos/General/IMG_9857.jpg", ctx: "Exchanging ideas." },
  { src: "/photos/General/WhatsApp Image 2026-05-12 at 7.50.44 PM.jpeg", ctx: "Engaged participation." },
  { src: "/photos/General/WhatsApp Image 2026-05-12 at 7.57.18 PM.jpeg", ctx: "Sharing perspectives." },
  { src: "/photos/General/WhatsApp Image 2026-05-12 at 8.34.24 PM.jpeg", ctx: "A day to remember." }
].map((item, i) => ({ ...item, id: i + row1.length }));
const row3 = [
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.40 PM.jpeg", ctx: "Tribe Goodies." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (1).jpeg", ctx: "Carefully curated." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (2).jpeg", ctx: "Special memories." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM (1).jpeg", ctx: "Exclusive merch." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM.jpeg", ctx: "Tokens of appreciation." },
  { src: "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.43 PM.jpeg", ctx: "Something to remember us by." }
].map((item, i) => ({ ...item, id: i + row1.length + row2.length }));
const items = [...row1, ...row2, ...row3];
function Marquee({
  data,
  baseVelocity = 1,
  onOpen
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1e3], [0, 5], { clamp: false });
  const [isHovered, setIsHovered] = reactExports.useState(false);
  useAnimationFrame((t, delta) => {
    if (isHovered) return;
    let moveBy = baseVelocity * (delta / 1e3);
    moveBy += moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex w-full overflow-hidden whitespace-nowrap py-4",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "flex w-max gap-6 px-3", style: { x }, children: [...data, ...data].map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "relative h-[220px] w-[320px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-sm sm:h-[280px] sm:w-[400px]",
          whileHover: { scale: 1.05, zIndex: 10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" },
          transition: { type: "spring", stiffness: 300, damping: 20 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => onOpen(it.id),
              className: "group h-full w-full",
              "aria-label": "View photo",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: it.src,
                    alt: "",
                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/10" })
              ]
            }
          )
        },
        `${it.id}-${idx}`
      )) })
    }
  );
}
function Moments() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 mx-auto mb-16 max-w-7xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 05" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold text-foreground sm:text-6xl", children: "Moments that mattered" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-lg text-muted-foreground", children: "No captions. Let the visuals speak — hover to pause, tap to reveal the story." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "w-full flex flex-col gap-2 py-4",
        style: {
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { data: row1, baseVelocity: -1.5, onOpen: setOpen }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { data: row2, baseVelocity: 1.2, onOpen: setOpen }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { data: row3, baseVelocity: -1.8, onOpen: setOpen })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/60 backdrop-blur-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.figure,
            {
              initial: { scale: 0.95, opacity: 0, y: 20 },
              animate: { scale: 1, opacity: 1, y: 0 },
              exit: { scale: 0.98, opacity: 0, y: -20 },
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              className: "relative z-10 max-h-[88svh] max-w-5xl overflow-hidden rounded-[2rem] border bg-card shadow-2xl",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: items[open].src,
                    alt: "",
                    className: "max-h-[75svh] w-full bg-muted/20 object-contain"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "p-6 text-center font-display text-xl text-foreground", children: items[open].ctx }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen(null),
                    className: "absolute right-4 top-4 rounded-full bg-white/80 p-2 text-foreground shadow-sm transition-colors hover:bg-white",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
                  }
                )
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function FloatCard({ r, i }) {
  const ref = reactExports.useRef(null);
  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-8px)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }
  const initials2 = r.author.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay: i % 3 * 0.1 },
      className: "animate-float-slow group",
      style: { animationDelay: `${i * 0.6}s` },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onMouseMove: onMove,
          onMouseLeave: reset,
          className: "h-full w-full will-change-transform transition-transform duration-300 ease-out",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SpotlightCard, { className: "relative h-full overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/80 p-8 md:p-10 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:border-slate-300 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-30",
                style: { background: accentVar[r.accent] }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Quote,
              {
                className: "absolute right-6 top-8 w-24 h-24 opacity-5 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-10",
                strokeWidth: 1,
                style: { color: accentVar[r.accent] }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm mb-6 relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${accentBg[r.accent]}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative inline-flex rounded-full h-2.5 w-2.5 ${accentBg[r.accent]}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[0.65rem] font-black tracking-widest uppercase ${accentText[r.accent]}`, children: r.prompt })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[1.05rem] leading-loose text-slate-700 relative z-10 font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl leading-none mr-1 ${accentText[r.accent]}`, children: '"' }),
                r.quote,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl leading-none ml-1 ${accentText[r.accent]}`, children: '"' })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4 relative z-10 border-t border-slate-100 pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center text-white font-bold tracking-wider shadow-md ${accentBg[r.accent]}`, children: initials2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-navy", children: r.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5", children: "Tribe Member" })
              ] })
            ] })
          ] })
        }
      )
    }
  );
}
function TribeReflections() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 06" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl", children: "What the Tribe experienced" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2", children: reflections.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FloatCard, { r, i }, r.id)) })
  ] }) });
}
const themes = [
  "All",
  "Learning",
  "Confidence",
  "Engagement",
  "Finance",
  "Technology",
  "Activities"
];
function StudentVoices() {
  const [theme, setTheme] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const filtered = reactExports.useMemo(
    () => feedback.filter(
      (f) => (theme === "All" || f.theme === theme) && f.quote.toLowerCase().includes(query.toLowerCase())
    ),
    [theme, query]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 07" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl", children: "What students said" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 18,
            className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: "Search the voices…",
            className: "w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none focus:border-sky"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: themes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setTheme(t),
          className: `rounded-full px-4 py-1.5 text-sm transition-colors ${theme === t ? "bg-sky text-navy" : "border border-border text-muted-foreground hover:text-foreground"}`,
          children: t
        },
        t
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        layout: true,
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.4 },
        whileHover: { y: -8 },
        className: "rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-sky/30 transition-all duration-300 flex flex-col justify-between",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-700 leading-relaxed text-[1.05rem] italic relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-4 -left-4 text-6xl text-sky/20 font-serif leading-none", children: '"' }),
            f.quote
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6 border-t border-slate-100 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-navy text-lg", children: f.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: "MKF Student" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-navy", children: f.theme })
          ] })
        ]
      },
      f.id
    )) }) }),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-12 text-center text-muted-foreground", children: "No voices match that search." })
  ] }) });
}
function Timeline() {
  const [active, setActive] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-28 sm:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-navy/60 font-semibold", children: "Section 08" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground", children: "The day, hour by hour" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-hide mt-16 overflow-x-auto px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex min-w-max gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-navy/0 via-navy/20 to-coral/0" }),
      timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          onClick: () => setActive(i),
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06 },
          className: "relative w-64 text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `h-4 w-4 rounded-full border-2 transition-colors ${active === i ? "border-coral bg-coral" : "border-navy/40 bg-transparent"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-sm font-semibold transition-colors ${active === i ? "text-coral" : "text-navy/70"}`,
                  children: t.time
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `mt-4 rounded-2xl border p-5 transition-colors ${active === i ? "border-coral/50 bg-card shadow-sm" : "border-border bg-card/40"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: t.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      animate: { opacity: active === i ? 1 : 0.5, height: "auto" },
                      className: "mt-2 text-sm text-muted-foreground",
                      children: t.description
                    }
                  )
                ]
              }
            )
          ]
        },
        t.id
      ))
    ] }) })
  ] });
}
function Counter({ value, suffix }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function Impact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-28 sm:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-yellow/5 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-yellow", children: "Section 09" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground", children: [
          "The ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow", children: "impact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-6 md:grid-cols-3", children: impactStats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i % 3 * 0.1 },
          className: "glass rounded-[2rem] p-8 text-center border-t border-l border-white/60 shadow-[0_8px_32px_rgba(234,179,8,0.1)] transition-transform hover:scale-[1.02]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold text-yellow sm:text-7xl drop-shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: s.value, suffix: s.suffix }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy", children: s.label })
          ]
        },
        s.id
      )) })
    ] })
  ] });
}
function BehindScenes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl", children: "Behind the scenes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "The day felt effortless because of everything that happened before it." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex flex-col gap-6", children: behindScenes.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "group flex flex-col sm:flex-row items-baseline gap-6 glass rounded-[2rem] p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 hover:shadow-2xl hover:border-white/80",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-bold text-navy/20 transition-colors duration-300 group-hover:text-sky shrink-0", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-foreground", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: b.text })
          ] })
        ]
      },
      b.id
    )) })
  ] }) });
}
function Ripple() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 11" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl", children: "The ripple effect" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "How a single day keeps moving, long after everyone goes home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 w-full overflow-x-auto no-scrollbar py-16 -my-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row flex-nowrap items-center w-max mx-auto", children: rippleNodes.map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.6 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.12, type: "spring", stiffness: 200, damping: 18 },
          className: "relative rounded-full border border-sky/40 bg-card px-8 py-3 font-display text-lg whitespace-nowrap",
          style: { boxShadow: `0 0 ${20 + i * 6}px -8px var(--sky)` },
          children: [
            node,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -z-10 rounded-full bg-sky/10 blur-md" })
          ]
        }
      ),
      i < rippleNodes.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { scaleY: 0 },
            whileInView: { scaleY: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.12 + 0.1, duration: 0.4 },
            className: "md:hidden my-2 h-8 w-px origin-top bg-gradient-to-b from-sky to-lavender"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.12 + 0.1, duration: 0.4 },
            className: "hidden md:block mx-3 h-px w-12 origin-left bg-gradient-to-r from-sky to-lavender"
          }
        )
      ] })
    ] }, node)) }) })
  ] }) });
}
function Recognition() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-sky", children: "Section 12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold sm:text-6xl", children: "Special recognition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "None of this happens alone. Thank you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: recognition.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i % 3 * 0.1 },
        whileHover: { y: -6 },
        className: "rounded-3xl border border-border bg-card p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-lavender", children: r.group }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: r.names.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: n }, n)) })
        ]
      },
      r.group
    )) })
  ] }) });
}
const montage = [
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.40 PM.jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (1).jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.41 PM (2).jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM (1).jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.42 PM.jpeg",
  "/photos/goodies/WhatsApp Image 2026-05-12 at 7.50.43 PM.jpeg"
];
function FinalChapter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-darkbg py-32 sm:py-48", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      [
        { t: "We came together for a day.", d: 0 },
        { t: "We left with ideas that will last much longer.", d: 0.3 }
      ].map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 30, filter: "blur(8px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, margin: "-120px" },
          transition: { duration: 1.1, delay: line.d, ease: [0.22, 1, 0.36, 1] },
          className: "mt-6 font-display text-3xl leading-snug text-navy sm:text-5xl",
          children: line.t
        },
        line.t
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 1, delay: 0.6 },
          className: "mt-20 border-t border-border pt-8 text-center flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 font-display text-xl sm:text-2xl font-bold tracking-widest text-navy", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TribeMark, { size: 64 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                "TRIBE ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky", children: "×" }),
                " VARSITY TRIBE"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky", children: "×" }),
                " MENTORS FOR KIDS"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MfkLogo, { size: 64, className: "ml-2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-navy", children: "Building Communities Through Learning" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 1.2, delay: 0.8 },
        className: "mt-24 grid grid-cols-2 gap-2 px-2 sm:grid-cols-6",
        children: montage.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 1.1 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 1, delay: i * 0.1 },
            className: "group relative aspect-square w-full overflow-hidden rounded-lg",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src,
                alt: "",
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
              }
            )
          },
          i
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-20 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Presented at Zerodha · June 14" })
  ] });
}
function Introduction() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-navy text-sm font-semibold tracking-widest uppercase mb-3", children: "Introduction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight flex flex-wrap items-center gap-x-3", children: [
            "What is",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-3 text-gradient-sky whitespace-nowrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MfkLogo, { size: 64, className: "w-10 h-10 md:w-16 md:h-16" }),
              "MFK"
            ] }),
            "?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-slate-700 leading-relaxed mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Founded in 2021 by Pavan Sharma, MFK is an educational nonprofit focused on improving employability and career readiness for commerce students, particularly those in Tier 2, Tier 3, and Tier 4 towns across Karnataka." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "MFK's core premise is that commerce students often receive theoretical education but limited exposure to practical skills, industry mentorship, and career pathways. The organization aims to bridge the gap between academic learning and employment by providing free resources and industry connections." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-navy", children: 'In short, MFK Foundation is essentially building a "commerce-to-career" ecosystem—using mentorship, practical learning, and industry exposure to help students from smaller towns become more employable and career-ready with our partners Rainmatter Foundation and WMG.' })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.2 },
        className: "relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy/40 font-display text-2xl", children: "Visual / Image Placeholder" }) })
      }
    )
  ] }) });
}
function OurMission() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex items-center bg-sky/5 rounded-3xl my-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-navy text-sm font-semibold tracking-widest uppercase mb-3", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight", children: "Our mission is to change the 50% unemployability gap and make you job-ready." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-slate-700 leading-relaxed mb-10 font-light text-left space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "text-sky flex-shrink-0 mt-1", size: 28 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Driven by real-world needs, and delivered at zero cost to students and colleges, this initiative ensures you are not just employable, but indispensable." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "text-sky flex-shrink-0 mt-1", size: 28 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "We are backed by global partners like",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AICPA-CIMA, Zerodha, BCL, Infosys Foundation" }),
              ". Mentors for Kids bridges the gap between education and industry. These partnerships equip students with future-ready skills, global exposure, and the confidence to succeed beyond borders."
            ] })
          ] })
        ] })
      ]
    }
  ) }) });
}
const problems = [
  {
    title: "Advanced Skills Needed",
    desc: "Entrepreneurship now demands advanced skills and financial literacy to thrive in highly competitive and fast-paced environment.",
    icon: Lightbulb
  },
  {
    title: "Curriculum Gap",
    desc: "The present curriculums are not up to the industry level. We bridge academia and industry by aligning theoretical knowledge with practical real-world demands.",
    icon: GraduationCap
  },
  {
    title: "Cost of Unemployment",
    desc: "The UNSEEN cost of being UNEMPLOYED. We fix the education-industry gaps that leave graduates underprepared.",
    icon: UserX
  },
  {
    title: "Slow Career Progression",
    desc: "Entry-level roles no longer guarantee leadership opportunities due to skill gaps. We provide students continuous skill development for their career growth.",
    icon: Briefcase
  },
  {
    title: "Intense Competition",
    desc: "We provide industry-relevant skills to help them compete in the intense competition in the Job market even internationally.",
    icon: Globe
  },
  {
    title: "Automation & AI",
    desc: "Since Automation and AI are reducing entry-level roles, we teach specialized skills for them to remain employable.",
    icon: BrainCircuit
  }
];
function ProblemsSolving() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-6 md:px-12 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-navy text-sm font-semibold tracking-widest uppercase mb-3", children: "The Challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl font-bold text-navy mb-4", children: "What problems are we solving?" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: problems.map((problem, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: idx * 0.1 },
        className: "h-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SpotlightCard, { className: "h-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-sky/10 rounded-2xl flex items-center justify-center mb-6 text-sky group-hover:scale-110 group-hover:bg-sky group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(problem.icon, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl font-bold text-navy mb-3", children: problem.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed", children: problem.desc })
        ] })
      },
      idx
    )) })
  ] });
}
function SetuProgram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 bg-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-coral/5 blur-[120px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky/5 blur-[150px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-navy/60 text-sm font-semibold tracking-[0.2em] uppercase mb-4", children: "Our Flagship Initiative" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-5xl md:text-7xl font-bold text-navy mb-6", children: [
              "The",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-coral to-orange-400", children: "SETU 2.0" }),
              " ",
              "Program"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-600 font-light max-w-2xl mx-auto", children: "A transformative 4-day immersion bridging the gap between classroom theory and corporate reality." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6 sticky top-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              whileHover: { scale: 1.02 },
              transition: { type: "spring", stiffness: 300, damping: 20 },
              className: "col-span-2 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group bg-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/images/setu-cover.jpg",
                    alt: "SETU 2.0 Cover",
                    className: "w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              whileHover: { scale: 1.02 },
              className: "col-span-1 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group bg-white self-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/images/setu-day2.jpg",
                    alt: "Finance & Governance",
                    className: "w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              whileHover: { scale: 1.02 },
              className: "col-span-1 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group bg-white self-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/images/setu-founders.png",
                    alt: "Founders & Leaders",
                    className: "w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                  }
                )
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-2xl md:text-3xl font-display text-navy mb-16 leading-snug font-medium",
              children: "Through interactions with founders, leaders, investors, and technologists, our students gained first-hand exposure to how businesses are built, scaled, governed, and transformed."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "flex flex-col gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-navy font-display text-2xl font-bold flex items-center gap-3", children: "Finance & Tech" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-12 bg-coral mt-3" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-slate-600 leading-relaxed space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      "From understanding AI-driven accounting with ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Harsha Shastry" }),
                      " ",
                      "(Cadel.ai) and ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sanjay Hegde" }),
                      ", to corporate governance with",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sharada SC" }),
                      " and ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tarun SatyaVageeshwar" }),
                      ", students experienced commerce beyond textbooks."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      "A special visit to ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Zerodha Varsity" }),
                      " was made possible by",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Karthik Rangappa" }),
                      ", ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Komal Sharma" }),
                      ", and the Varsity Tribe members, creating an incredibly engaging environment around finance and markets."
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-[1px] bg-slate-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "flex flex-col gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-navy font-display text-2xl font-bold flex items-center gap-3", children: "VC & Leadership" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-12 bg-sky mt-3" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-slate-600 leading-relaxed space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      "Interactions with ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Naganand Doraswamy" }),
                      " (Ideaspring Capital), Standard Chartered teams, and ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Achuth Gowda" }),
                      " (Fidelitus Corp) opened doors to venture capital and entrepreneurship."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      "At Embark Group, ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Aravind Maiya" }),
                      " and",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nimmi Sebastian" }),
                      " conducted powerful sessions on leadership and resilience."
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-[1px] bg-slate-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "flex flex-col gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-navy font-display text-2xl font-bold flex items-center gap-3", children: "Innovation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-12 bg-lavender mt-3" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg text-slate-600 leading-relaxed space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "Students explored the future of agritech with ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Krishikan" }),
                    ", followed by a deep dive into incubation at IISc’s FSID with",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "L Tulasi Gandikota" }),
                    "."
                  ] }) })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mt-24 text-center bg-sky/5 p-12 rounded-3xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-navy font-bold mb-6", children: "Proud of our students for their curiosity and willingness to learn." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-coral font-medium tracking-widest uppercase text-sm mb-8", children: "Shrivrinda P. • Nayana • Nandhana P. • Srijanya Poojary • Shwetha . • Shifa Banu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 italic max-w-2xl mx-auto", children: "A special thank you to Pavan Sharma, Vishal Krishna, Ranjani G, Abhilash Kumble, Shreyas Mishra, Heena Jain, and Guruprasad Rao for their insightful sessions at BCL India." })
          ]
        }
      )
    ] })
  ] });
}
const corePrograms = [
  {
    name: "Financial Literacy",
    desc: "Covering economics, taxation, and management.",
    icon: TrendingUp
  },
  {
    name: "Young Executives",
    desc: "Building core essentials through real-world exposure in finance, HR, and compliance skills.",
    icon: Users
  },
  {
    name: "Professional Certifications",
    desc: "Guidance for CA, CFA, CMA, and other professional paths.",
    icon: Award
  },
  {
    name: "Artha & Saral Series",
    desc: "Focused on business eco, markets, trade principles tailored in simple layman language, alongside personality development.",
    icon: BookOpen
  }
];
const expertPrograms = [
  { name: "Data Analytics", icon: ChartLine },
  { name: "Financial Reporting", icon: FileText },
  { name: "A/c Software (Zoho Books)", icon: Laptop },
  { name: "HR & Labour Laws", icon: Shield },
  { name: "Tally", icon: Calculator }
];
const experts = [
  "SC Sharada (Founder of SC Sharada and Associates)",
  "Vivek Krishna (Rapido VP)",
  "Srikara (WMC Co-founder)",
  "Chetan GMS (Founder of Stellaris Venture Partners)"
];
function ProgramsRunning() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-6 md:px-12 max-w-7xl mx-auto bg-lavender/10 rounded-3xl my-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mb-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-navy text-sm font-semibold tracking-widest uppercase mb-3", children: "Current Efforts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl font-bold text-navy mb-4", children: "Programs we are running" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: corePrograms.map((prog, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.1 * idx },
        className: "p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-lavender/20 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-lavender/30 text-navy flex items-center justify-center font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(prog.icon, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-navy mb-2", children: prog.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: prog.desc })
        ]
      },
      idx
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "hover:-translate-y-1 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl font-bold text-navy mb-6", children: "Expert-Led Programs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: expertPrograms.map((prog, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(prog.icon, { size: 16, className: "text-lavender flex-shrink-0" }),
              prog.name
            ] }, idx)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "hover:-translate-y-1 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl font-bold text-navy mb-6", children: "Expert Guidance From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: experts.map((expert, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, className: "text-sky flex-shrink-0" }),
              expert
            ] }, idx)) })
          ]
        }
      )
    ] })
  ] });
}
function OurExperiences() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mb-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-navy text-sm font-semibold tracking-widest uppercase mb-3", children: "Reflections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-6xl font-bold text-navy mb-4", children: "How we from Zerodha Varsity Tribe have contributed so far" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto mb-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-medium text-navy italic", children: '"You might ask, how did we get here?"' }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20", children: [1, 2, 3, 4].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.1 * idx },
        className: "flex flex-col sm:flex-row gap-6 items-start",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 shrink-0 rounded-full bg-sky/20 flex items-center justify-center font-display font-bold text-sky text-2xl", children: '"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-700 italic mb-4 leading-relaxed", children: '"Individual experience from Zerodha Varsity Tribe member detailing their contribution and journey."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-navy", children: [
              "— Tribe Member ",
              item
            ] })
          ] })
        ]
      },
      idx
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "flex flex-col md:flex-row bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-5/12 h-64 md:h-auto relative group bg-slate-50 border-r border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/images/setu-cover.jpg",
                alt: "Pavan's Journey",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.linkedin.com/posts/when-pavan-sharma-embarked-on-his-journey-share-7417818410014806016-EBsY",
                target: "_blank",
                rel: "noreferrer",
                className: "absolute inset-0 z-20 bg-navy/0 group-hover:bg-navy/10 transition-colors flex items-center justify-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 text-white font-medium bg-navy/80 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg", children: "View post gallery" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-7/12 flex flex-col justify-between p-8 md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6 flex items-center gap-4 border-b border-slate-50 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] font-bold text-xl shrink-0", children: "in" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-navy font-bold text-lg", children: "The Catalyst: Pavan's Journey" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Mentors For Kids Foundation" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-lg mb-8", children: "The foundation of this entire movement was built on overcoming real-world challenges. Discover the problems Pavan Sharma faced when he embarked on his journey." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://www.linkedin.com/posts/when-pavan-sharma-embarked-on-his-journey-share-7417818410014806016-EBsY",
                target: "_blank",
                rel: "noreferrer",
                className: "w-full md:w-max flex items-center justify-center gap-2 py-3 px-8 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white rounded-xl font-medium transition-colors",
                children: [
                  "Read full story on LinkedIn ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "↗" })
                ]
              }
            ) })
          ] })
        ]
      }
    ) })
  ] });
}
const pastEngagements = [
  {
    title: "Hosting Our Students",
    summary: "Grateful to Aravind Maiya, Nimmi Sebastian, and Priyanka Birla for hosting our students and sharing valuable insights.",
    link: "https://www.linkedin.com/posts/grateful-to-aravind-maiya-nimmi-sebastian-ugcPost-7467155464401776642-cGFF",
    image: "/images/setu-founders.png"
  },
  {
    title: "Understanding the World of Work",
    summary: "Achuth Gowda’s visit to Fidelitus Corp and Suhasini Deshpande for sharing their expertise to help us understand the professional world.",
    link: "https://www.linkedin.com/posts/grateful-to-achuth-gowda-for-making-this-share-7467466367324049408-LAmG",
    image: "/images/setu-day2.jpg"
  },
  {
    title: "BBA Seminar",
    summary: "Our founder Pavan Sharma hosting a half-day seminar for BBA students from RR Institute of Management Studies.",
    link: "https://www.linkedin.com/posts/mfk-workshop-ugcPost-7454782203483328512-Q2tm",
    image: "/images/setu-cover.jpg"
  }
];
function Conclusion() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-navy text-sm font-semibold tracking-widest uppercase mb-3", children: "Conclusion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl font-bold text-navy mb-4", children: "Gratitude & Past Engagements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mb-8", children: "Reflecting on the programs held and showing gratitude towards our supporters." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-24", children: pastEngagements.map((eng, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: idx * 0.1 },
        className: "flex flex-col h-full bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 pb-4 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center text-sky font-bold text-xl", children: "in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-navy font-bold", children: eng.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Mentors For Kids Foundation" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed", children: eng.summary }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 mx-6 bg-slate-50 rounded-xl overflow-hidden relative group border border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: eng.image,
                alt: eng.title,
                className: "w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: eng.link,
                target: "_blank",
                rel: "noreferrer",
                className: "absolute inset-0 z-20 bg-navy/0 group-hover:bg-navy/10 transition-colors flex items-center justify-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 text-white font-medium bg-navy/80 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg", children: "View post" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 mt-4 border-t border-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: eng.link,
              target: "_blank",
              rel: "noreferrer",
              className: "w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white rounded-xl font-medium transition-colors",
              children: [
                "Read on LinkedIn ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "↗" })
              ]
            }
          ) })
        ]
      },
      idx
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-3xl mx-auto text-center bg-navy text-white rounded-3xl p-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl font-bold mb-6", children: "How You Can Help?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-lg italic", children: "To be honest, no idea yet, working on it..." })
        ]
      }
    )
  ] });
}
function AnimatedBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-soft-light", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute h-[60vw] w-[60vw] rounded-full bg-sky/60 blur-[100px]", animate: {
      x: [0, 100, -100, 0],
      y: [0, -100, 100, 0]
    }, transition: {
      duration: 25,
      repeat: Infinity,
      ease: "linear"
    }, style: {
      top: "-10%",
      left: "-10%"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute h-[50vw] w-[50vw] rounded-full bg-lavender/60 blur-[100px]", animate: {
      x: [0, -150, 100, 0],
      y: [0, 150, -100, 0]
    }, transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }, style: {
      top: "20%",
      right: "-10%"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute h-[55vw] w-[55vw] rounded-full bg-coral/50 blur-[100px]", animate: {
      x: [0, 150, -150, 0],
      y: [0, -50, 150, 0]
    }, transition: {
      duration: 28,
      repeat: Infinity,
      ease: "linear"
    }, style: {
      bottom: "-10%",
      left: "10%"
    } })
  ] });
}
function Index() {
  const [loaded, setLoaded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative bg-[#fdfbf7] min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
    !loaded && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { onComplete: () => setLoaded(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed left-6 top-5 z-[70] flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-navy/10 transition-all hover:shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MfkLogo, { size: 26 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold tracking-widest text-navy/50", children: "×" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TribeMark, { size: 22 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold tracking-[0.2em] text-navy", children: "TRIBE" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { loaded }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 pb-12 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Introduction, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OurMission, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemsSolving, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InTheRoom, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Members, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SetuProgram, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramsRunning, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Moments, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TribeReflections, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OurExperiences, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StudentVoices, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BehindScenes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ripple, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Recognition, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Conclusion, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalChapter, {})
    ] })
  ] });
}
export {
  Index as component
};
