import {
  BookOpen,
  Handshake,
  HeartPlus,
  LandPlot,
  Lightbulb,
  Paintbrush,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { five, four, hero1, hero2, one, three, two } from "./images";

export const dropdowns = [
  {
    label: "About",
    items: ["Our Story", "Our Culture", "Our Team", "Our Approach"],
  },
  {
    label: "Solutions",
    items: [
      "Guided Discussions",
      "Peer Support",
      "Hope & Empowerment",
    ],
  },
  {
    label: "Programs",
    items: [
      "Creative Activities",
      "Resilience Building",
      "Awareness & Education",
    ],
  },
  {
    label: "Resources",
    items: ["Blog", "Annual report"],
  },
];

export const teamMembers = [
  {
    name: "Ramla Bashir",
    role: "Executive Director",
    description:
      "Leads API’s community-based mental health programs, ensuring safe, supportive spaces for youth and families.",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/c1.jpg",
    bg: "bg-blue-100",
    color: "#3b82f6",
  },
  {
    name: "Fuad Abdirahman",
    role: "Community Outreach Coordinator",
    description:
      "Guides group discussions and creative activities, helping participants build resilience and break stigma.",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/c2.jpg",
    bg: "bg-red-100",
    color: "#ef4444",
  },
  {
    name: "Siham Tahlil",
    role: "social affairs lead",
    description:
      "Organizes peer support sessions, fostering belonging and hope through shared experiences.",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/c3.jpg",
    bg: "bg-yellow-100",
    color: "#fbbf24",
  },
  {
    name: "Abdiwahab billow",
    role: "Secretary General",
    description:
      "Designs and runs art, music, and writing workshops for emotional well-being and self-expression.",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/c4.jpg",
    bg: "bg-purple-100",
    color: "#a78bfa",
  },
];

export const solutions = [
  {
    title: "Guided Discussions",
    description:
      "Facilitated group talks to share experiences, learn coping strategies, and build resilience.",
    icon: Users,
    color: "#0ea5e9", // cyan
  },
  {
    title: "Creative Activities",
    description:
      "Art, music, and writing sessions to encourage self-expression and emotional healing.",
    icon: Paintbrush,
    color: "#f59e42", // orange
  },
  {
    title: "Peer Support",
    description:
      "Safe spaces for participants to support each other, break stigma, and foster belonging.",
    icon: Handshake,
    color: "#10b981", // green
  },
  {
    title: "Resilience Building",
    description:
      "Workshops and exercises focused on practical tools for emotional well-being.",
    icon: Shield,
    color: "#6366f1", // indigo
  },
  {
    title: "Awareness & Education",
    description:
      "Sessions to raise awareness and provide knowledge about mental health.",
    icon: BookOpen,
    color: "#fbbf24", // yellow
  },
  {
    title: "Hope & Empowerment",
    description:
      "Every session is designed to empower participants and instill hope.",
    icon: Sparkles,
    color: "#ef4444", // red
  },
];

export const problemsData = {
  prevalence: [
    { label: "Any Disorder", value: 14 },
    { label: "Anxiety", value: 5.3 },
    { label: "Depression", value: 3.4 },
    { label: "ADHD", value: 2.2 },
    { label: "Conduct Disorder", value: 1.8 },
    { label: "Eating Disorder", value: 0.4 },
  ],
  suicide: [
    { label: "Suicide (15-29)", value: 3 }, // 3rd leading cause
  ],
  substance: [
    { label: "Alcohol Use (15-19)", value: 22 },
    { label: "Cannabis Use", value: 5.5 },
  ],
  riskFactors: [
    { label: "Violence", value: 8 },
    { label: "Bullying", value: 7 },
    { label: "Poverty", value: 6 },
    { label: "Abuse", value: 5 },
    { label: "Social Exclusion", value: 4 },
    { label: "Stigma", value: 3 },
  ],
};

export const solutionsData = {
  interventions: [
    { label: "School Programs", value: 30 },
    { label: "CBT/Counseling", value: 25 },
    { label: "Medication", value: 15 },
    { label: "Family Support", value: 20 },
    { label: "Community Support", value: 10 },
  ],
  outcomes: [
    { label: "Improved Well-being", value: 40 },
    { label: "Reduced Suicide", value: 20 },
    { label: "Reduced Substance Use", value: 15 },
    { label: "Better School Attendance", value: 25 },
  ],
  prevention: [
    { label: "Early Detection", value: 35 },
    { label: "Non-Pharma Approaches", value: 30 },
    { label: "Suicide Prevention", value: 20 },
    { label: "Digital Programs", value: 15 },
  ],
};


export const AboutImages = [one, two, three, four, five];

export const Ourvalues = [
  {
    title: "Mental Awareness",
    description:
      "We help you achieve mental awareness, and impude it in your life , to make it happier and joyful",
    icon: Lightbulb,
    color: "text-cyan-500", // cyan
  },
  {
    title: "Trust",
    description:
      "Art, music, and writing sessions to encourage self-expression and emotional healing.",
    icon: Handshake,
    color: "text-orange-500", // orange
  },
  {
    title: "Support",
    description:
      "Safe spaces for participants to support each other, break stigma, and foster belonging.",
    icon: HeartPlus,
    color: "text-green-500", // green
  },
  {
    title: "Reliability",
    description:
      "Workshops and exercises focused on practical tools for emotional well-being.",
    icon: LandPlot,
    color: "text-indigo-500", // indigo
  },
];

export const Activities = [
  {
    name: "Art Therapy Workshops",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/art.png",
  },
  {
    name: "Football & Basketball Games",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/bF.jpeg",
  },
  {
    name: "Drama & Storytelling Nights",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/TOP.png",
  },
  {
    name: "Creative Writing or Journaling Groups",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/Cw.png",
  },
  {
    name: "Puzzle Nights",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/PN.png",
  },
  {
    name: "Movie Nights",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/MN.png",
  },
  {
    name: "Adventures and Travel Trips",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/At.jpg",
  },
];
 
export const Resilience = [
  {
    name: "Mindfulness & Meditation Sessions",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/A.png",
  },
  {
    name: "Leadership & Problem-Solving Workshops",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/A1.png",
  },
  {
    name: "Stress Management & Coping Techniques",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/A2.png",
  },
  {
    name: "Support Groups and Peer Mentoring",
    image: "https://emeafihornkyefo7.public.blob.vercel-storage.com/A3.png",
  },
];



export const Awareness = [
  {
    name: "Mental Health Education Workshops (Schools, Community Centers)",
    image: "https://example.com/images/mental-health-education.jpg",
  },
  {
    name: "Guest Speakers and Youth-Led Discussions",
    image: "https://example.com/images/guest-speakers.jpg",
  },
  {
    name: "Campaigns on Social Media & Local Events",
    image: "https://example.com/images/social-campaigns.jpg",
  },
  {
    name: "Community Mental Health Fairs",
    image: "https://example.com/images/community-fair.jpg",
  },
  {
    name: "Training on Recognizing Warning Signs and Supporting Peers",
    image: "https://example.com/images/warning-signs-training.jpg",
  },
];
