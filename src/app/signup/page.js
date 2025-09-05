"use client";
import React, { useState, useContext } from "react";
import { Toaster, toast } from "sonner";
import { auth } from "../login/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";
import { Brain } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setToken } = useContext(AppContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        setLoading(false);
        return;
      }
      if (!agree) {
        toast.error("You must agree with the terms and conditions");
        setLoading(false);
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      setToken(userCredential.user.uid || true);
      router.replace("/client/dashboard");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    toast.message("Signing up...");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      setToken(result.user.uid || true);
      toast.success(
        `Welcome, ${
          result.user.displayName || "user"
        }! You are now part of Anchor Point Initiative.`
      );
      toast.success("Signed up successfully!");
      router.replace("/client/dashboard");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Logout function with toast
  const handleLogout = async () => {
    toast.message("Logging out...");
    try {
      await auth.signOut();
      localStorage.removeItem("user");
      toast.success("Logged out successfully!");
      router.replace("/login");
    } catch (err) {
      toast.error("Logout failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-[3rem] items-center justify-center bg-[#e8e8e8]">
      <Link href={"/"} className="flex flex-col items-center justify-center text-center gap-3">
        <Brain className="w-8 h-8 text-cyan-500" />
        <p className="leading-5 font-semibold text-black">
          ANCHOR POINT <br /> INITIATIVE
        </p>
      </Link>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-0 md:gap-8">
        {/* Left: Signup Card */}
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="bg-white flex flex-col gap-[1rem] max-w-6xl w-[35vw] h-[72vh] rounded-2xl !py-8 !px-8"
          >
            <h1 className="text-xl">Sign up</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-500">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="user@email.com"
                className="w-full bg-gray-200 rounded-md outline-none !p-[0.6rem] hover:bg-gray-300 transition-all duration-200 placeholder:text-sm !px-5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white !py-[0.6rem] cursor-pointer rounded-lg hover:bg-gray-900 transition !mb-4"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Continue with email"}
            </button>
            <div className="flex items-center">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-2 text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border !py-3 rounded-lg mb-2 text-sm hover:bg-gray-100 transition"
              onClick={handleGoogle}
            >
              <FcGoogle className="w-5 h-5" /> Continue with Google
            </button>
            <p className="text-xs text-gray-500">
              By clicking "Create account" above, you acknowledge that you will
              receive updates from the Relume team and that you have read,
              understood, and agreed to Relume Library's Terms & Conditions,
              Licensing Agreement and Privacy Policy.
            </p>
            <div className="flex items-center justify-between mt-6">
              <span className="">Already have an account?</span>
              <a
                href="/login"
                className="ml-2 px-4 py-2 border rounded-lg text-black hover:bg-gray-100 text-sm"
              >
                Log in
              </a>
            </div>
          </form>
        </div>
        {/* Right: Testimonial and Brands */}
        <div className="hidden md:flex flex-col justify-center items-center w-full max-w-md px-8">
          <div className="flex flex-col items-center mb-4">
            <span className="text-lg text-gray-700 mb-4 text-center">
              Nothing short of groundbreaking for mental health. It immediately
              changes how I work and makes me 10x more productive as a community
              leader.
            </span>
            <span className="font-semibold">@jordanphughes</span>
            <span className="text-xs text-gray-500">
              Co-founder, Anchor Point Initiative
            </span>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <span className="font-bold text-pink-600">700,000+</span>{" "}
            individuals have joined Anchor Point Initiative programs to improve
            mental health and well-being.
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
            <span className="text-gray-400 font-bold text-lg">NAMI</span>
            <span className="text-gray-400 font-bold text-lg">Mind</span>
            <span className="text-gray-400 font-bold text-lg">APA</span>
            <span className="text-gray-400 font-bold text-lg">
              Mental Health America
            </span>
            <span className="text-gray-400 font-bold text-lg">Headspace</span>
            <span className="text-gray-400 font-bold text-lg">BetterHelp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
