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
  {
    id: "azeem",
    name: "Azeem",
    role: "Tribe Member",
    intro: "Facilitated and moderated a structured group discussion.",
    activity: "Structured Group Discussion",
    reflection:
      "Interacting with students taught me how to simplify ideas and communicate in a way that is clear and relatable.",
    memorableMoment:
      "Guiding participants through topic selection and encouraging them to substantiate their points with logic and personal experience.",
    gallery: [
      { src: "/photos/azeem actvity/IMG_9845.jpg", title: "Group Discussion" },
      { src: "/photos/azeem actvity/IMG_9847.jpg", title: "Structured Reasoning" }
    ],
    accent: "sky",
  },
  {
    id: "patel-afan",
    name: "Patel Afan",
    role: "Tribe Member",
    intro: "Led the Collaborative Business & Investment Analysis session.",
    activity: "Collaborative Business & Investment Analysis",
    reflection:
      "Gained valuable insights into diverse investment philosophies, business thinking patterns, and practical approaches to risk assessment. Improved communication, teamwork, critical thinking, and financial analysis skills through active participation.",
    memorableMoment:
      "Exchanging contrasting viewpoints on sector selection and portfolio diversification helped me appreciate how multiple perspectives can lead to stronger investment and business decisions.",
    gallery: [],
    accent: "lavender",
  },
  {
    id: "chirag",
    name: "Chirag",
    role: "Tribe Member",
    intro: "Facilitated the Icebreaker session to kickstart conversations.",
    activity: "Icebreaker",
    reflection:
      "Being kind and open-minded can make you learn and understand a person or a situation better! With MFK, it was a great exposure to students who come with different perspectives around finance.",
    memorableMoment:
      "Overall, it was a great experience to talk to students with similar finance backgrounds, and I have great appreciation for our tribe members who came up with great activities and energy!",
    gallery: [],
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
  {
    id: "practical-investing",
    name: "Practical Investing Basics",
    objective: "Demystify investing fundamentals and live trade dynamics.",
    how: "Guided students through live trading terminals, reading charts, analyzing factsheets, and order placing.",
    participation: "Every student followed along on laptops using actual platforms like Nifty Indices, Kite and Coin.",
    result: "Students understood market vs limit orders and felt confident reading stock charts.",
    tribeReflection: "They got to read charts, factsheets, and practically understand market and limit orders.",
    studentReaction: "“I can actually read stock charts now. It feels less like magic and more like a logic game.”",
    accent: "sky",
  },
  {
    id: "ripple-effect",
    name: "Ripple Effect",
    objective: "Trace how a single financial event triggers cascading consequences.",
    how: "Facilitated a cause-and-effect mapping exercise around financial choices and market shocks.",
    participation: "Students brainstormed and debated various outcomes, mapping the connections on a board.",
    result: "Realized how interconnected financial decisions are and developed systemic thinking.",
    tribeReflection: "I really enjoyed facilitating the discussion and brainstorming different possibilities.",
    studentReaction: "“It's amazing how a change in interest rates affects so many parts of my daily life.”",
    accent: "lavender",
  },
  {
    id: "art-of-hosting",
    name: "The Art of Hosting",
    objective: "Learn active listening and adaptive communication in group facilitation.",
    how: "Co-hosted a dynamic discussion using real-time listener feedback and open-ended inquiry.",
    participation: "Engaged the entire audience in shared stories and spontaneous reflections.",
    result: "Fostered deep, genuine conversation instead of rigid Q&As.",
    tribeReflection: "Stay in the session and be present—active listening is the key to genuine conversations.",
    studentReaction: "“It felt less like an interview and more like a real, flowing conversation.”",
    accent: "yellow",
  },
  {
    id: "group-discussion",
    name: "Structured Group Discussion",
    objective: "Articulate opinions clearly and defend viewpoints with structured reasoning.",
    how: "Moderated debates on complex prompts, focusing on logic, structure, and evidence.",
    participation: "Each student selected a topic, prepared arguments, and presented their case with active peer critique.",
    result: "Students learned how to simplify complex ideas and speak with structure and clarity.",
    tribeReflection: "Interacting with students taught me how to simplify ideas and communicate clearly.",
    studentReaction: "“Supporting my ideas with evidence rather than just emotion completely changed my approach.”",
    accent: "sky",
  },
  {
    id: "business-analysis",
    name: "Collaborative Business & Investment Analysis",
    objective: "To understand different approaches to business decision-making, stock market investing, sector analysis, and risk management through teamwork and interactive discussions.",
    how: "Engaged with MBA students and Varsity Tribe members through debates, discussions, and collaborative activities. Analyzed various sectors, investment opportunities, diversification strategies, and risk factors while understanding how different individuals evaluate businesses and financial markets.",
    participation: "MBA students and Tribe members worked together in teams to debate sector performance and critique investment models.",
    result: "Developed a deeper understanding of market analysis, investment diversification, risk management, and collaborative problem-solving while building confidence in discussing business and financial concepts with peers from different backgrounds.",
    tribeReflection: "Gained valuable insights into diverse investment philosophies, business thinking patterns, and practical approaches to risk assessment.",
    studentReaction: "“Exchanging contrasting viewpoints on sector selection and portfolio diversification helped me appreciate how multiple perspectives can lead to stronger investment and business decisions.”",
    accent: "lavender",
  },
  {
    id: "icebreaker",
    name: "Icebreaker",
    objective: "Dissolve initial nervousness and establish open lines of communication.",
    how: "Interactive introduction rounds and connection-building team games.",
    participation: "Every MBA student and Tribe member in the room engaged and shared.",
    result: "Established a warm, high-energy, and collaborative atmosphere for the rest of the day.",
    tribeReflection: "Being kind and open-minded makes it easier to learn and understand a person or a situation better.",
    studentReaction: "“The icebreakers broke down all barriers, making it feel natural to talk about finance and learn together.”",
    accent: "yellow",
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
    author: "MFK Student",
    theme: "Activities",
    quote:
      "The program was incredibly interactive, with rapid-fire sessions, real-life scenarios, and company case studies that strengthened our decision-making abilities. A key highlight was Sameer's investment session—his practical insights and easy-to-understand explanations made complex topics both interesting and informative.",
  },
  {
    id: "f4",
    author: "MFK Student",
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
  {
    id: "r5",
    prompt: "STRUCTURED DISCUSSION",
    quote:
      "My experience at Mentor for Kids Foundation was very meaningful. I took responsibility for facilitating and moderating a structured group discussion, encouraging participants to support their point of views with clear reasoning. This experience strengthened my facilitation, communication, and moderation skills.",
    author: "Azeem",
    accent: "sky",
  },
  {
    id: "r6",
    prompt: "COLLABORATIVE ANALYSIS",
    quote:
      "Gained valuable insights into diverse investment philosophies, business thinking patterns, and practical approaches to risk assessment. Exchanging contrasting viewpoints on sector selection helped us appreciate how multiple perspectives lead to stronger decisions.",
    author: "Patel Afan",
    accent: "lavender",
  },
  {
    id: "r7",
    prompt: "OPEN-MINDED LEARNING",
    quote:
      "Being kind and open minded can make you learn and understand a person or a situation better! With MFK, it was a great exposure to students who come with different perspectives around finance.",
    author: "Chirag",
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
  { id: "s1", value: 6, suffix: "", label: "Students Participated" },
  { id: "s2", value: 8, suffix: "", label: "Activities Conducted" },
  { id: "s3", value: 120, suffix: "+", label: "Feedback Collected" },
  { id: "s4", value: 8, suffix: "", label: "Tribe Members Engaged" },
  { id: "s5", value: 9, suffix: "h", label: "Hours Contributed" },
  { id: "s6", value: 300, suffix: "+", label: "Meaningful Conversations" },
];

export const recognition: { group: string; names: string[] }[] = [
  {
    group: "Tribe Members",
    names: ["Sameer", "Kavya", "Pavan Kumar", "Piyush", "Azeem", "Patel Afan", "Chirag"],
  },
  { group: "MFK Participants", names: ["The 6 students who showed up curious"] },
  { group: "Volunteers", names: ["Sriram", "Patel Afan", "The team behind the scenes"] },
  { group: "Organizers", names: ["Komal Sharma", "Varsity Tribe Core Team"] },
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
