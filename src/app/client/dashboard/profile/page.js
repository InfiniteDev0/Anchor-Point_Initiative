"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Brain } from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
  // Get user from localStorage
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatarInitials, setAvatarInitials] = useState("AM");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.displayName) {
      const nameParts = user.displayName.split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts[1] || "");
      // Avatar initials
      const initials = nameParts
        .map((n) => n[0])
        .join("")
        .toUpperCase();
      setAvatarInitials(initials);
    }
  }, []);

  return (
    <div className="!px-[5%] flex flex-col  gap-[4rem] !py-[2%]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-cyan-500" />
          <h1 className="text-sm">
            Anchor Point <br /> Initiative
          </h1>
        </div>
        <Link href={"/client/dashboard"}>
          <Button className={"cursor-pointer"}>Go back to dashboard</Button>
        </Link>
      </div>
      <div className="flex gap-[4rem] w-full h-full">
        <div className="flex flex-col  w-[20%]">
          <ul className="flex flex-col gap-5">
            <Button
              className={
                "bg-transparent shadow-none text-black  hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
              }
            >
              Account
            </Button>
            <Button
              className={
                "bg-transparent shadow-none text-black  hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
              }
            >
              Manage Plan
            </Button>
            <Button
              className={
                "bg-transparent shadow-none text-black  hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
              }
            >
              Your Events
            </Button>
            <Button
              className={
                "bg-transparent shadow-none text-black  hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
              }
            >
              Refferal Programs
            </Button>
          </ul>
        </div>
        <div className="flex flex-col gap-5 !px-[3%] !py-[2%] w-[80%] bg-white min-h-[75vh] rounded-2xl overflow-y-scroll">
          <h1 className="text-2xl">Account</h1>
          <div>
            {/* profile */}
            <div className="flex flex-col  gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-lg">Profile</h1>
                <Button>Save</Button>
              </div>
              {/* Avatar */}
              <div className="flex  items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  {avatarInitials}
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="text-sm w-[50%] font-medium"
                  >
                    Upload image
                  </Button>
                  <span className="text-xs text-gray-500">
                    Recommended 160x160px in PNG or JPG format
                  </span>
                </div>
              </div>
              {/* first name and last name */}
              <div className="grid grid-cols-2 gap-[3rem]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm text-gray-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    placeholder=""
                    className="w-full bg-gray-200 rounded-md outline-none !p-[0.6rem] hover:bg-gray-300 transition-all duration-200 placeholder:text-sm !px-5"
                    required
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm text-gray-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    placeholder=""
                    className="w-full bg-gray-200 rounded-md outline-none !p-[0.6rem] hover:bg-gray-300 transition-all duration-200 placeholder:text-sm !px-5"
                    required
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
