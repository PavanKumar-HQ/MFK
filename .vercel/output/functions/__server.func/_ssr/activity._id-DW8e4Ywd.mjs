import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as accentText } from "./accent-DT_ioC-G.mjs";
import { R as Route } from "./router-Dz6CT30M.mjs";
import { l as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const gallery1 = "/assets/gallery-1-BC1_I25C.jpg";
const gallery2 = "/assets/gallery-2-Db0jZ16h.jpg";
const gallery3 = "/assets/gallery-3-B0ZQjhOr.jpg";
function ActivityDetail() {
  const activity = Route.useLoaderData();
  const imgMap = {
    "risk-reward": gallery1,
    "story-data": gallery2,
    "bias-lab": gallery3,
    "build-feature": gallery1
  };
  const heroImage = imgMap[activity.id] || gallery1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-6 left-6 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-lg backdrop-blur-md transition-all hover:bg-white hover:pr-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
      " Back to Journey"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: activity.name, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-12 left-0 w-full px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block rounded-full px-3 py-1 text-xs uppercase tracking-widest font-semibold border bg-white/80 backdrop-blur-md shadow-sm ${accentText[activity.accent]}`, children: activity.objective }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-5xl font-bold text-foreground sm:text-7xl", children: activity.name })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "How it worked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xl leading-relaxed text-foreground", children: activity.how })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "Student Participation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-relaxed text-foreground", children: activity.participation })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-relaxed text-foreground", children: activity.result })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-muted/30 p-8 sm:p-12 border border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "Tribe Reflection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 font-display text-2xl font-medium leading-snug text-foreground", children: [
            '"',
            activity.tribeReflection,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "Student Reaction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-6 font-display text-2xl italic ${accentText[activity.accent]}`, children: activity.studentReaction })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ActivityDetail as component
};
