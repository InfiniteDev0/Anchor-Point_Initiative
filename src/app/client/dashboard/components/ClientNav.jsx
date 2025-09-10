import { Button } from "@/components/ui/button";
import {
  Bell,
  BellRing,
  BoltIcon,
  Brain,
  CircleDashed,
  CircleDotDashed,
  CornerDownLeft,
  Flame,
  FlameIcon,
  SparkleIcon,
  Sparkles,
  StarIcon,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { auth } from "@/app/auth/firebase";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const ClientNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  const router = useRouter();

  // Logout function with toast
  const handleLogout = async () => {
    toast.message("Logging out...");
    try {
      await auth.signOut();
      localStorage.removeItem("user");
      toast.success("Logged out successfully!");
      router.replace("/auth");
    } catch (err) {
      toast.error("Logout failed: " + err.message);
    }
  };
  return (
    <div className="flex w-full px-5 py-2 border-b border-b-gray-400 justify-between items-center">
      <div className="flex items-center gap-3">
        <Brain className="w-7 h-7 text-cyan-500" />
        <div className="rounded-full border border-gray-400 !px-3 !py-1">
          <h1 className="text-sm text-gray-500">WELCOME ABDIAZIZ</h1>
        </div>
        <Button
          className={
            "flex text-center items-center bg-orange-700 hover:bg-orange-400 transition-all duration-500 cursor-pointer w-8 h-8 justify-center rounded-full"
          }
        >
          <FlameIcon className="w-4 h-4" />
        </Button>
        <Button
          className={
            "flex text-center items-center bg-green-700 hover:bg-green-400 transition-all duration-500 cursor-pointer w-8 h-8 justify-center rounded-full"
          }
        >
          <CircleDotDashed className="w-4 h-4" />
        </Button>
        <Button
          className={
            "flex text-center items-center bg-purple-700 hover:bg-purple-400 transition-all duration-500 cursor-pointer w-8 h-8 justify-center rounded-full"
          }
        >
          <BoltIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex-1 flex justify-end px-5">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="w-full text- border border-gray-300 text-gray-700 rounded-lg py-2 pl-4 pr-20 placeholder:text-gray-400 placeholder:text-sm outline-none  focus:ring-0 transition"
            style={{ fontSize: "1rem" }}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
            <span className="text-gray-400 px-2 py-1 rounded-md text-xs border border-gray-300">
              Ctrl
            </span>
            <span className="text-gray-400 px-2 py-1 rounded-md text-xs border border-gray-300">
              K
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          className={
            "flex text-center items-center w-10 h-10 justify-center rounded-full"
          }
        >
          <BellRing className="w-5 h-5" />
        </Button>
        <Button
          className={
            "cursor-pointer  bg-white text-black hover:text-white hover:bg-black rounded-sm transition-all duration-500"
          }
        >
          Events
        </Button>
        <Button
          className={
            "cursor-pointer bg-purple-600 rounded-sm hover:bg-black transition-all duration-500"
          }
        >
          <Sparkles />
          Schedule a meeting
        </Button>
        <div className="relative group">
          <button
            className="bg-pink-500 rounded-full !p-2 text-white cursor-pointer text-sm flex items-center gap-2 focus:outline-none"
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span>AM</span>
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-0 top-full !mt-2 min-w-[200px] bg-white text-black rounded-md shadow-xl !py-2 px-2 z-20 border border-gray-300 flex flex-col gap-2"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={"/client/dashboard/profile"}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center hover:bg-gray-200 cursor-pointer !px-3 !py-2 transition-all duration-500 rounded-sm justify-between text-xs"
                >
                  Manage Account {<CornerDownLeft className="w-2 h-2" />}
                </Link>
                <Link
                  href={"/client/dashboard/saved"}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center hover:bg-gray-200 cursor-pointer !px-3 !py-2 transition-all duration-500 rounded-sm justify-between text-xs"
                >
                  Saved {<CornerDownLeft className="w-2 h-2" />}
                </Link>
                <div
                  onClick={() => {
                    setDropdownOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center bg-black text-white hover:bg-red-700 transition-all duration-500 cursor-pointer !px-3 !py-2 rounded-sm justify-between text-xs"
                >
                  Logout {<CornerDownLeft className="w-2 h-2" />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ClientNav;
