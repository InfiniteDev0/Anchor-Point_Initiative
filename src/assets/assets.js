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
import { client1, client2, client3, client4, five, four, hero1, hero2, one, three, two } from "./images";

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
    name: "Dr. Amina Yusuf",
    role: "Program Director",
    description:
      "Leads API’s community-based mental health programs, ensuring safe, supportive spaces for youth and families.",
    image: client1,
    bg: "bg-blue-100",
    color: "#3b82f6",
  },
  {
    name: "Samuel Okoro",
    role: "Lead Facilitator",
    description:
      "Guides group discussions and creative activities, helping participants build resilience and break stigma.",
    image: client2,
    bg: "bg-red-100",
    color: "#ef4444",
  },
  {
    name: "Fatima Bello",
    role: "Peer Support Coordinator",
    description:
      "Organizes peer support sessions, fostering belonging and hope through shared experiences.",
    image: client3,
    bg: "bg-yellow-100",
    color: "#fbbf24",
  },
  {
    name: "David Mensah",
    role: "Creative Programs Lead",
    description:
      "Designs and runs art, music, and writing workshops for emotional well-being and self-expression.",
    image: client4,
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