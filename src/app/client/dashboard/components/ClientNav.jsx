import { Button } from "@/components/ui/button";
import {
  Brain,
  CornerDownLeft,
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
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Brain className="w-8 h-8 text-cyan-500" />
        <h1 className="text-sm">
          Anchor Point <br /> Initiative
        </h1>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-zinc-200 outline-none rounded-md !p-2 w-[700px] placeholder:text-sm !px-5"
      />
      <div className="flex items-center gap-3">
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
