import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DZl6v7Uj.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MFK × Tribe — A Varsity Tribe Experience at Zerodha" },
      {
        name: "description",
        content: "An immersive story of the day MBA students from MFK met Tribe members — conversations, activities, reflections and the impact that followed."
      },
      { name: "author", content: "Tribe × Varsity Tribe" },
      { property: "og:title", content: "MFK × Tribe — An Immersive Experience" },
      {
        property: "og:description",
        content: "Conversations. Perspectives. Learning. Impact. The MFK × Tribe story, presented at Zerodha."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@zerodhaonline" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$2 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./index-CIpWNzl1.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "MFK × Tribe — An Immersive Experience"
    }, {
      name: "description",
      content: "The story of the day MBA students from MFK met Tribe members. Conversations, activities, reflections and lasting impact — presented at Zerodha."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const tribeMembers = [
  {
    id: "sameer",
    name: "Sameer",
    role: "Tribe Member",
    intro: "Conducted an impromptu session on practical investing basics.",
    activity: "Practical Investing Basics",
    reflection: "They got to read charts, factsheets, and practically understand market and limit orders.",
    memorableMoment: "Getting the students to follow along with me on laptop by showing them how to use Nifty Indices, Kite and Coin.",
    gallery: [
      { src: "/photos/sameer actvity/IMG_9837.jpg", title: "Activity Session" },
      { src: "/photos/sameer actvity/IMG_9841.jpg", title: "Explaining Concepts" }
    ],
    accent: "sky"
  },
  {
    id: "kavya",
    name: "Kavya",
    role: "Tribe Member",
    intro: "Led a session called Ripple Effect, exploring how one financial event triggers multiple consequences.",
    activity: "Ripple Effect",
    reflection: "I really enjoyed facilitating the discussion and brainstorming different possibilities, which made me realise how interconnected financial decisions are.",
    memorableMoment: "Realising how much exposure shapes the way we think, and wondering how much potential is still waiting to be unlocked.",
    gallery: [
      { src: "/photos/kavya activity/IMG_9816.jpg", title: "Ripple Effect Session" },
      { src: "/photos/kavya activity/IMG_9831.jpg", title: "Brainstorming" }
    ],
    accent: "lavender"
  },
  {
    id: "pavan",
    name: "Pavan Kumar",
    role: "Tribe Member",
    intro: "Conducted the Business Resurgence activity as part of a peer engagement session.",
    activity: "Business Resurgence",
    reflection: "It was rewarding to see participants think critically, collaborate effectively, and approach business challenges with confidence.",
    memorableMoment: "Seeing the Mentor For Kids students actively participate, enjoy the experience, and engage confidently throughout the session.",
    gallery: [
      { src: "/photos/pavan activity/IMG_9851.jpg", title: "Business Resurgence" },
      { src: "/photos/pavan activity/IMG_9852.jpg", title: "Team Discussion" },
      { src: "/photos/pavan activity/IMG_9861.jpg", title: "Consulting Roles" }
    ],
    accent: "coral"
  }
];
const activities = [
  {
    id: "risk-reward",
    name: "The Risk & Reward Simulation",
    objective: "Let students feel the weight of a real investment decision.",
    how: "Teams managed a simulated portfolio through live market shocks.",
    participation: "All 6 teams traded, debated, and rebalanced under pressure.",
    result: "Every team finished green — but the lesson was in the losses they survived.",
    tribeReflection: "They handled drawdowns with more discipline than seasoned investors.",
    studentReaction: "“I finally understand why patience is a strategy.”",
    accent: "sky"
  },
  {
    id: "story-data",
    name: "Storytelling with Data",
    objective: "Turn raw numbers into a narrative that moves people.",
    how: "Each team built a 3-minute story from a single dataset.",
    participation: "Designers, analysts and skeptics found a shared language.",
    result: "Six wildly different stories from the same set of numbers.",
    tribeReflection: "The disagreements were where the real insight lived.",
    studentReaction: "“Data isn't cold. It's the most honest story you can tell.”",
    accent: "lavender"
  },
  {
    id: "bias-lab",
    name: "The Bias Lab",
    objective: "Expose the hidden biases behind everyday choices.",
    how: "A series of live experiments revealed anchoring and loss aversion.",
    participation: "Students predicted, then watched themselves fall for the trap.",
    result: "A room full of people humbled — and hooked.",
    tribeReflection: "Self-awareness is the first edge any investor can build.",
    studentReaction: "“I'll never look at a discount the same way again.”",
    accent: "coral"
  },
  {
    id: "build-feature",
    name: "Build-a-Feature Sprint",
    objective: "Ship a tiny product idea in under an hour.",
    how: "From problem statement to paper prototype to pitch.",
    participation: "Rapid teamwork, sharper trade-offs, zero ego.",
    result: "Four prototypes the mentors genuinely wanted to use.",
    tribeReflection: "Their constraint-thinking was world-class.",
    studentReaction: "“We did in an hour what we'd usually overthink for a week.”",
    accent: "yellow"
  },
  {
    id: "curiosity-map",
    name: "The Curiosity Map",
    objective: "Transform overwhelming questions into actionable learning paths.",
    how: "Students mapped their biggest uncertainties onto a shared visual space.",
    participation: "Everyone contributed sticky notes, finding patterns together.",
    result: "A massive, interconnected web of shared curiosity.",
    tribeReflection: "They proved that vulnerability in learning is a superpower.",
    studentReaction: "“I realised I wasn't the only one confused about this.”",
    accent: "sky"
  },
  {
    id: "open-floor",
    name: "The Open Floor",
    objective: "Create space for the questions that don't fit in a syllabus.",
    how: "No slides, no agenda. Just a circle of chairs and honest answers.",
    participation: "Every single person in the room shared a thought or asked a question.",
    result: "Deep, unscripted conversations that ran way over time.",
    tribeReflection: "The best insights always come from the unscripted moments.",
    studentReaction: "“It felt like a real conversation, not a lecture.”",
    accent: "lavender"
  },
  {
    id: "business-resurgence",
    name: "Business Resurgence",
    objective: "Solve unique business scenarios involving well-known brands within time and budget constraints.",
    how: "Teams acted as consultants to analyze problems, develop strategies, and present practical solutions.",
    participation: "Students actively participated and engaged confidently throughout the session.",
    result: "Creative teamwork and diverse perspectives emerged, leading to excellent strategies.",
    tribeReflection: "It was incredibly rewarding to see participants think critically and approach challenges with enthusiasm.",
    studentReaction: "“We learned to collaborate effectively and defend our ideas confidently.”",
    accent: "coral"
  }
];
const feedback = [
  {
    id: "f1",
    author: "Shrivrindha P",
    theme: "Learning",
    quote: "The engaging activities, from rapid-fire questions to case analysis, greatly enhanced our analytical thinking and teamwork. A major highlight was the insightful talk on investment concepts, which was simple, practical, and helped us truly understand investing. The group discussion on diversification also encouraged us to think critically."
  },
  {
    id: "f2",
    author: "Nandhana P",
    theme: "Engagement",
    quote: "The event created a dynamic platform to exchange ideas and learn from experienced speakers. The icebreakers encouraged networking, but the most valuable part was the discussion on financial markets and investment concepts. Listening to different perspectives helped broaden our understanding and improved our ability to analyze situations."
  },
  {
    id: "f3",
    author: "MKF Student",
    theme: "Activities",
    quote: "The program was incredibly interactive, with rapid-fire sessions, real-life scenarios, and company case studies that strengthened our decision-making abilities. A key highlight was Sameer's investment session—his practical insights and easy-to-understand explanations made complex topics both interesting and informative."
  },
  {
    id: "f4",
    author: "MKF Student",
    theme: "Confidence",
    quote: "The session included situation-based discussions, creative thinking exercises, and team activities that improved our critical thinking and problem-solving skills. The business case analysis, where we proposed practical solutions for companies facing challenges, provided valuable learning beyond classroom concepts."
  }
];
const reflections = [
  {
    id: "r1",
    prompt: "PRACTICAL INVESTING",
    quote: "During the MFK interaction session, I had the chance to lead an impromptu session on practical investing basics. We covered how to use Nifty Indices, Kite, and Coin, helping them practically understand market orders, reading charts, and asset allocation. It was incredible to see how quickly they caught on to these concepts.",
    author: "Sameer",
    accent: "sky"
  },
  {
    id: "r2",
    prompt: "THE RIPPLE EFFECT",
    quote: "I led a 'Ripple Effect' session exploring how a single financial event can trigger multiple consequences. Hearing the students' answers was mind-blowing, but what stuck with me the most is how much exposure shapes the way we think and grow. It made me wonder how much potential is still waiting to be unlocked.",
    author: "Kavya",
    accent: "lavender"
  },
  {
    id: "r3",
    prompt: "BUSINESS RESURGENCE",
    quote: "I conducted the Business Resurgence activity, challenging teams to act as consultants and solve unique business scenarios under time constraints. It was incredibly rewarding to see the creativity, teamwork, and diverse perspectives that emerged. Their enthusiasm to analyze problems and confidently defend their strategies made the experience truly meaningful.",
    author: "Pavan Kumar",
    accent: "coral"
  },
  {
    id: "r4",
    prompt: "THE ART OF HOSTING",
    quote: "Co-hosting my first session alongside Vishal Krishna sir was a major learning experience. Initially nervous and focused strictly on prepared questions, I received valuable advice to 'stay in the session' and be present. This taught me not just about public speaking, but the importance of active listening to foster genuine conversations.",
    author: "Piyush",
    accent: "yellow"
  }
];
const timeline = [
  {
    id: "t1",
    time: "09:00",
    title: "Arrival",
    description: "Coffee, name tags, and the first nervous smiles."
  },
  {
    id: "t2",
    time: "09:30",
    title: "Introductions",
    description: "Two worlds in one room, finding common ground."
  },
  {
    id: "t3",
    time: "10:15",
    title: "Activities Begin",
    description: "Simulations, labs and sprints kick off."
  },
  {
    id: "t4",
    time: "12:00",
    title: "Discussions",
    description: "Debates that blurred the line between mentor and student."
  },
  {
    id: "t5",
    time: "13:00",
    title: "Break",
    description: "Conversations spilled into the lunch tables."
  },
  {
    id: "t6",
    time: "14:00",
    title: "Group Moments",
    description: "Teams formed, ideas collided, friendships started."
  },
  { id: "t7", time: "16:00", title: "Reflections", description: "What we learned, said out loud." },
  { id: "t8", time: "17:00", title: "Closing", description: "A circle no one wanted to break." }
];
const impactStats = [
  { id: "s1", value: 48, suffix: "", label: "Students Participated" },
  { id: "s2", value: 8, suffix: "", label: "Activities Conducted" },
  { id: "s3", value: 120, suffix: "+", label: "Feedback Collected" },
  { id: "s4", value: 6, suffix: "", label: "Tribe Members Engaged" },
  { id: "s5", value: 9, suffix: "h", label: "Hours Contributed" },
  { id: "s6", value: 300, suffix: "+", label: "Meaningful Conversations" }
];
const recognition = [
  {
    group: "Tribe Members",
    names: ["Aanya Rao", "Vikram Shetty", "Meera Iyer", "Arjun Nair", "Priya Menon", "Rahul Verma"]
  },
  { group: "MFK Participants", names: ["The 48 students who showed up curious"] },
  { group: "Volunteers", names: ["The team behind the scenes"] },
  { group: "Organizers", names: ["Varsity Tribe Core Team"] },
  { group: "Mentors", names: ["Tribe Mentor Network"] },
  { group: "Supporters", names: ["Zerodha · Varsity"] }
];
const rippleNodes = [
  "Student",
  "Learning",
  "Curiosity",
  "Confidence",
  "Action",
  "Future",
  "Community"
];
const behindScenes = [
  {
    id: "b1",
    title: "Planning",
    text: "Weeks of mapping every minute so the day could feel effortless."
  },
  {
    id: "b2",
    title: "Coordination",
    text: "Aligning students, mentors and spaces into one rhythm."
  },
  {
    id: "b3",
    title: "Execution",
    text: "Running eight parallel activities without missing a beat."
  },
  { id: "b4", title: "Volunteer Support", text: "The quiet hands that kept everything moving." },
  {
    id: "b5",
    title: "Challenges Solved",
    text: "Last-minute changes met with calm and creativity."
  }
];
const $$splitComponentImporter = () => import("./activity._id-DW8e4Ywd.mjs");
const Route = createFileRoute("/activity/$id")({
  loader: ({
    params
  }) => {
    const activity = activities.find((a) => a.id === params.id);
    if (!activity) {
      throw notFound();
    }
    return activity;
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.name} — MFK × Tribe`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$2.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$3
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const ActivityIdRoute = Route.update({
  id: "/activity/$id",
  path: "/activity/$id",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute,
  ActivityIdRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  activities as a,
  timeline as b,
  behindScenes as c,
  rippleNodes as d,
  recognition as e,
  feedback as f,
  router as g,
  impactStats as i,
  reflections as r,
  tribeMembers as t
};
