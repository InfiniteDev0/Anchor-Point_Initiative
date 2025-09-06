"use client";
import React, { useState } from "react";
import { Brain, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { auth } from "@/app/auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import { hero4 } from "@/assets/images";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
import { Button } from "@/components/ui/button";

const passwordPolicy = {
  minLength: 8,
  maxLength: 10,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  special: /[^A-Za-z0-9]/,
};

function validatePassword(password) {
  if (
    password.length < passwordPolicy.minLength ||
    password.length > passwordPolicy.maxLength
  ) {
    return "Password must be 8-10 characters.";
  }
  if (!passwordPolicy.uppercase.test(password)) {
    return "Password must contain an uppercase letter.";
  }
  if (!passwordPolicy.lowercase.test(password)) {
    return "Password must contain a lowercase letter.";
  }
  if (!passwordPolicy.number.test(password)) {
    return "Password must contain a number.";
  }
  if (!passwordPolicy.special.test(password)) {
    return "Password must contain a special character.";
  }
  return null;
}

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auth handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password required");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      window.location.replace("/client/dashboard");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast.error("All fields required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const policyError = validatePassword(password);
    if (policyError) {
      toast.error(policyError);
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created!");
      window.location.replace("/client/dashboard");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Google auth successful!");
      window.location.replace("/client/dashboard");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // UI
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#f8f8f8]">
      {/* Left image and company text */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-screen relative overflow-hidden">
        <Image
          src={hero4}
          alt="Anchor Point Initiative Hero"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 w-full h-full rounded-l-2xl"
        />
        <div className="relative z-10 flex flex-col items-start justify-between h-full px-12 py-10 ">
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-cyan-500" />
            <p className="leading-5 font-semibold text-black">
              ANCHOR POINT <br /> INITIATIVE
            </p>
          </div>
          <div className="w-[90%] flex flex-col  !p-5 gap-3">
            <motion.p
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              FEEL STRONGER
            </motion.p>
            <motion.h1
              className="text-4xl md:text-black font-extrabold one"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              BUILDING OUR COMMUNITY BY HELPING THE YOUTH
            </motion.h1>
            <motion.p
              className="text-gray-900 md:text-gray-900 text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              Anchor Point Initiative (API) runs community-based mental health
              group programs that provide a safe and supportive space for
              individuals to share, learn, and grow together.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row  gap-5 w-full mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariants}
            >
              <Button
                className={
                  "bg-cyan-500 active:bg-cyan-400 text-sm hover:bg-cyan-500 md:hover:bg-cyan-400 w-full md:w-fit !px-[2rem]  rounded-full transition-all duration-500 cursor-pointer !py-[1.5rem]  "
                }
              >
                {" "}
                Join Our Community
              </Button>
              <Button
                className={
                  "bg-white text-black w-full text-sm md:w-fit !px-[2rem]  rounded-full active:bg-cyan-400 hover:bg-white md:hover:bg-cyan-500 transition-all duration-500 cursor-pointer !py-[1.5rem]  "
                }
              >
                Upcoming Events
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Right form card */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.div
              key="login"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-md p-8"
            >
              <div className="flex flex-col items-center mb-6">
                <Brain className="w-8 h-8 text-cyan-500 mb-2" />
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  Welcome back!
                </h2>
                <p className="text-gray-500 text-sm text-center">
                  Enter your credentials to jump back in.
                </p>
              </div>
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-gray-100 rounded-md outline-none p-3 placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-sm text-gray-600">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full bg-gray-100 rounded-md outline-none p-3 pr-10 placeholder:text-sm"
                      minLength={8}
                      maxLength={10}
                      required
                    />
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                      onClick={() => setShowPassword((prev) => !prev)}
                      tabIndex={0}
                      role="button"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition text-sm
                  "
                  disabled={loading}
                >
                  {loading ? "Please wait..." : "Sign In"}
                </button>
                <div className="flex items-center my-2">
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="mx-2 text-gray-400 text-sm">or</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg text-sm hover:bg-gray-100 transition"
                  onClick={handleGoogle}
                  disabled={loading}
                >
                  <FcGoogle className="w-5 h-5" /> Continue with Google
                </button>
              </form>
              <div className="flex items-center justify-between mt-6 text-sm">
                <span>Don&apos;t have an account?</span>
                <button
                  className="ml-2 px-4 py-2 border rounded-lg text-black hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setMode("signup");
                    setPassword("");
                    setConfirmPassword("");
                  }}
                >
                  Create Account
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-md p-8"
            >
              <div className="flex flex-col items-center mb-6">
                <Brain className="w-8 h-8 text-cyan-500 mb-2" />
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  Create your account
                </h2>
                <p className="text-gray-500 text-sm text-center">
                  Sign up to join Anchor Point Initiative.
                </p>
              </div>
              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-gray-100 rounded-md outline-none p-3 placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-sm text-gray-600">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full bg-gray-100 rounded-md outline-none p-3 pr-10 placeholder:text-sm"
                      minLength={8}
                      maxLength={10}
                      required
                    />
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                      onClick={() => setShowPassword((prev) => !prev)}
                      tabIndex={0}
                      role="button"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm text-gray-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="w-full bg-gray-100 rounded-md outline-none p-3 placeholder:text-sm"
                    minLength={8}
                    maxLength={10}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-3 text-sm rounded-lg hover:bg-cyan-700 transition"
                  disabled={loading}
                >
                  {loading ? "Please wait..." : "Sign Up"}
                </button>
                <div className="flex items-center my-2">
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="mx-2 text-gray-400 text-sm">or</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg text-sm hover:bg-gray-100 transition"
                  onClick={handleGoogle}
                  disabled={loading}
                >
                  <FcGoogle className="w-5 h-5" /> Continue with Google
                </button>
              </form>
              <div className="flex items-center justify-between mt-6 text-sm">
                <span>Already have an account?</span>
                <button
                  className="ml-2 px-4 py-2 border rounded-lg text-black hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setMode("login");
                    setPassword("");
                    setConfirmPassword("");
                  }}
                >
                  Log In
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
