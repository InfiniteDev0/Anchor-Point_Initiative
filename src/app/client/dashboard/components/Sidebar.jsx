import React, { useState } from "react";
import {
  User,
  Calendar,
  Video,
  BookOpen,
  Music,
  Trophy,
  MessageCircle,
  Sparkles,
  Group,
  Star,
  ClipboardList,
  Gift,
  HelpCircle,
} from "lucide-react";

const sidebarItems = [
  { icon: User, label: "Profile" },
  { icon: Calendar, label: "Meetings" },
  { icon: Group, label: "Group Meetings" },
  { icon: Video, label: "Videos" },
  { icon: Music, label: "Music & Audiobooks" },
  { icon: BookOpen, label: "Books" },
  { icon: Trophy, label: "Achievements" },
  { icon: Star, label: "Leaderboard" },
  { icon: ClipboardList, label: "Survey" },
  { icon: Gift, label: "Collectibles" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Sparkles, label: "AI Assistant" },
  { icon: HelpCircle, label: "Help Guide" },
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <aside
      className="z-40 flex flex-col gap-7 items-center overflow-x-scroll h-[92vh] border-r border-r-gray-400 py-8 px-2 bg-[#18181b]"
      style={{ width: "56px" }}
    >
      {sidebarItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="relative flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-150 cursor-pointer group hover:bg-[#232329]"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-150" />
            {hovered === index && (
              <span
                className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#232329] text-white text-xs font-medium px-3 py-1 rounded-md shadow-lg z-50 animate-fade-in"
                style={{ pointerEvents: "none" }}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
