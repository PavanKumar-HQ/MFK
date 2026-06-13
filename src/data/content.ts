// =============================================================
// MFK × TRIBE — Central content store.
// Edit this file to update every section of the experience.
// =============================================================

export type TribeMember = {
  id: string;
  name: string;
  role: string;
  intro: string;
  activity: string;
  reflection: string;
  memorableMoment: string;
  gallery: { src: string; title: string }[];
  accent: "sky" | "lavender" | "coral" | "yellow";
};

export const tribeMembers: TribeMember[] = [
  {
    id: "sameer",
    name: "Sameer",
    role: "Tribe Member",
    intro: "Conducted an impromptu session on practical investing basics.",
    activity: "Practical Investing Basics",
    reflection:
      "They got to read charts, factsheets, and practically understand market and limit orders.",
    memorableMoment:
      "Getting the students to follow along with me on laptop by showing them how to use Nifty Indices, Kite and Coin.",
    gallery: [
      { src: "/photos/sameer actvity/IMG_9837.jpg", title: "Activity Session" },
      { src: "/photos/sameer actvity/IMG_9841.jpg", title: "Explaining Concepts" }
    ],
    accent: "sky",
  },
  {
    id: "kavya",
    name: "Kavya",
    role: "Tribe Member",
    intro:
      "Led a session called Ripple Effect, exploring how one financial event triggers multiple consequences.",
    activity: "Ripple Effect",
    reflection:
      "I really enjoyed facilitating the discussion and brainstorming different possibilities, which made me realise how interconnected financial decisions are.",
    memorableMoment:
      "Realising how much exposure shapes the way we think, and wondering how much potential is still waiting to be unlocked.",
    gallery: [
      { src: "/photos/kavya activity/IMG_9816.jpg", title: "Ripple Effect Session" },
      { src: "/photos/kavya activity/IMG_9831.jpg", title: "Brainstorming" }
    ],
    accent: "lavender",
  },
  {
    id: "pavan",
    name: "Pavan Kumar",
    role: "Tribe Member",
    intro: "Conducted the Business Resurgence activity as part of a peer engagement session.",
    activity: "Business Resurgence",
    reflection:
      "It was rewarding to see participants think critically, collaborate effectively, and approach business challenges with confidence.",
    memorableMoment:
      "Seeing the Mentor For Kids students actively participate, enjoy the experience, and engage confidently throughout the session.",
    gallery: [
      { src: "/photos/pavan activity/IMG_9851.jpg", title: "Business Resurgence" },
      { src: "/photos/pavan activity/IMG_9852.jpg", title: "Team Discussion" },
      { src: "/photos/pavan activity/IMG_9861.jpg", title: "Consulting Roles" }
    ],
    accent: "coral",
  },
  {
    id: "piyush",
    name: "Piyush",
    role: "Tribe Member",
    intro: "Co-hosted a session alongside Vishal Krishna sir, focusing on the art of hosting.",
    activity: "The Art of Hosting",
    reflection:
      "I received valuable advice to 'stay in the session' and be present. This taught me not just about public speaking, but the importance of active listening to foster genuine conversations.",
    memorableMoment:
      "Co-hosting my first session and learning to focus on active listening rather than strictly prepared questions.",
    gallery: [
      { src: "/photos/Piyush activity/IMG_0094.jpg", title: "Activity Start" },
      { src: "/photos/Piyush activity/IMG_0100.jpg", title: "Hosting the Session" },
      { src: "/photos/Piyush activity/IMG_0101.jpg", title: "Group Discussion" },
      { src: "/photos/Piyush activity/IMG_0108.jpg", title: "Explaining Concepts" },
      { src: "/photos/Piyush activity/IMG_0113.jpg", title: "Engaging the Audience" },
      { src: "/photos/Piyush activity/IMG_0115.jpg", title: "Active Listening" }
    ],
    accent: "yellow",
  },
];

export type Activity = {
  id: string;
  name: string;
  objective: string;
  how: string;
  participation: string;
  result: string;
  tribeReflection: string;
  studentReaction: string;
  accent: "sky" | "lavender" | "coral" | "yellow";
};

export const activities: Activity[] = [
  {
    id: "risk-reward",
    name: "The Risk & Reward Simulation",
    objective: "Let students feel the weight of a real investment decision.",
    how: "Teams managed a simulated portfolio through live market shocks.",
    participation: "All 6 teams traded, debated, and rebalanced under pressure.",
    result: "Every team finished green — but the lesson was in the losses they survived.",
    tribeReflection: "They handled drawdowns with more discipline than seasoned investors.",
    studentReaction: "“I finally understand why patience is a strategy.”",
    accent: "sky",
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
    accent: "lavender",
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
    accent: "coral",
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
    accent: "yellow",
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
    accent: "sky",
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
    accent: "lavender",
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
    accent: "coral",
  },
];

export type Feedback = {
  id: string;
  quote: string;
  author: string;
  theme: "Learning" | "Confidence" | "Engagement" | "Finance" | "Technology" | "Activities";
};

export const feedback: Feedback[] = [
  {
    id: "f1",
    author: "Shrivrindha P",
    theme: "Learning",
    quote:
      "The engaging activities, from rapid-fire questions to case analysis, greatly enhanced our analytical thinking and teamwork. A major highlight was the insightful talk on investment concepts, which was simple, practical, and helped us truly understand investing. The group discussion on diversification also encouraged us to think critically.",
  },
  {
    id: "f2",
    author: "Nandhana P",
    theme: "Engagement",
    quote:
      "The event created a dynamic platform to exchange ideas and learn from experienced speakers. The icebreakers encouraged networking, but the most valuable part was the discussion on financial markets and investment concepts. Listening to different perspectives helped broaden our understanding and improved our ability to analyze situations.",
  },
  {
    id: "f3",
    author: "MKF Student",
    theme: "Activities",
    quote:
      "The program was incredibly interactive, with rapid-fire sessions, real-life scenarios, and company case studies that strengthened our decision-making abilities. A key highlight was Sameer's investment session—his practical insights and easy-to-understand explanations made complex topics both interesting and informative.",
  },
  {
    id: "f4",
    author: "MKF Student",
    theme: "Confidence",
    quote:
      "The session included situation-based discussions, creative thinking exercises, and team activities that improved our critical thinking and problem-solving skills. The business case analysis, where we proposed practical solutions for companies facing challenges, provided valuable learning beyond classroom concepts.",
  },
];

export type ReflectionCard = {
  id: string;
  prompt: string;
  quote: string;
  author: string;
  accent: "sky" | "lavender" | "coral" | "yellow";
};

export const reflections: ReflectionCard[] = [
  {
    id: "r1",
    prompt: "PRACTICAL INVESTING",
    quote:
      "During the MFK interaction session, I had the chance to lead an impromptu session on practical investing basics. We covered how to use Nifty Indices, Kite, and Coin, helping them practically understand market orders, reading charts, and asset allocation. It was incredible to see how quickly they caught on to these concepts.",
    author: "Sameer",
    accent: "sky",
  },
  {
    id: "r2",
    prompt: "THE RIPPLE EFFECT",
    quote:
      "I led a 'Ripple Effect' session exploring how a single financial event can trigger multiple consequences. Hearing the students' answers was mind-blowing, but what stuck with me the most is how much exposure shapes the way we think and grow. It made me wonder how much potential is still waiting to be unlocked.",
    author: "Kavya",
    accent: "lavender",
  },
  {
    id: "r3",
    prompt: "BUSINESS RESURGENCE",
    quote:
      "I conducted the Business Resurgence activity, challenging teams to act as consultants and solve unique business scenarios under time constraints. It was incredibly rewarding to see the creativity, teamwork, and diverse perspectives that emerged. Their enthusiasm to analyze problems and confidently defend their strategies made the experience truly meaningful.",
    author: "Pavan Kumar",
    accent: "coral",
  },
  {
    id: "r4",
    prompt: "THE ART OF HOSTING",
    quote:
      "Co-hosting my first session alongside Vishal Krishna sir was a major learning experience. Initially nervous and focused strictly on prepared questions, I received valuable advice to 'stay in the session' and be present. This taught me not just about public speaking, but the importance of active listening to foster genuine conversations.",
    author: "Piyush",
    accent: "yellow",
  },
];

export type TimelineStop = {
  id: string;
  time: string;
  title: string;
  description: string;
};

export const timeline: TimelineStop[] = [
  {
    id: "t1",
    time: "09:00",
    title: "Arrival",
    description: "Coffee, name tags, and the first nervous smiles.",
  },
  {
    id: "t2",
    time: "09:30",
    title: "Introductions",
    description: "Two worlds in one room, finding common ground.",
  },
  {
    id: "t3",
    time: "10:15",
    title: "Activities Begin",
    description: "Simulations, labs and sprints kick off.",
  },
  {
    id: "t4",
    time: "12:00",
    title: "Discussions",
    description: "Debates that blurred the line between mentor and student.",
  },
  {
    id: "t5",
    time: "13:00",
    title: "Break",
    description: "Conversations spilled into the lunch tables.",
  },
  {
    id: "t6",
    time: "14:00",
    title: "Group Moments",
    description: "Teams formed, ideas collided, friendships started.",
  },
  { id: "t7", time: "16:00", title: "Reflections", description: "What we learned, said out loud." },
  { id: "t8", time: "17:00", title: "Closing", description: "A circle no one wanted to break." },
];

export type ImpactStat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export const impactStats: ImpactStat[] = [
  { id: "s1", value: 48, suffix: "", label: "Students Participated" },
  { id: "s2", value: 8, suffix: "", label: "Activities Conducted" },
  { id: "s3", value: 120, suffix: "+", label: "Feedback Collected" },
  { id: "s4", value: 6, suffix: "", label: "Tribe Members Engaged" },
  { id: "s5", value: 9, suffix: "h", label: "Hours Contributed" },
  { id: "s6", value: 300, suffix: "+", label: "Meaningful Conversations" },
];

export const recognition: { group: string; names: string[] }[] = [
  {
    group: "Tribe Members",
    names: ["Aanya Rao", "Vikram Shetty", "Meera Iyer", "Arjun Nair", "Priya Menon", "Rahul Verma"],
  },
  { group: "MFK Participants", names: ["The 48 students who showed up curious"] },
  { group: "Volunteers", names: ["The team behind the scenes"] },
  { group: "Organizers", names: ["Varsity Tribe Core Team"] },
  { group: "Mentors", names: ["Tribe Mentor Network"] },
  { group: "Supporters", names: ["Zerodha · Varsity"] },
];

export const rippleNodes = [
  "Student",
  "Learning",
  "Curiosity",
  "Confidence",
  "Action",
  "Future",
  "Community",
];

export const behindScenes = [
  {
    id: "b1",
    title: "Planning",
    text: "Weeks of mapping every minute so the day could feel effortless.",
  },
  {
    id: "b2",
    title: "Coordination",
    text: "Aligning students, mentors and spaces into one rhythm.",
  },
  {
    id: "b3",
    title: "Execution",
    text: "Running eight parallel activities without missing a beat.",
  },
  { id: "b4", title: "Volunteer Support", text: "The quiet hands that kept everything moving." },
  {
    id: "b5",
    title: "Challenges Solved",
    text: "Last-minute changes met with calm and creativity.",
  },
];
