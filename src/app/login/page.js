"use client";
import { logo } from "@/assets/images";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Brain, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { toast } from "sonner";
import { auth } from "./firebase";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // If user exists in localStorage, redirect to dashboard
    const user = localStorage.getItem("user");
    if (user) {
      router.replace("/client/dashboard");
    }
    // If user is signing in with email link
    if (
      typeof window !== "undefined" &&
      isSignInWithEmailLink(auth, window.location.href)
    ) {
      const storedEmail = window.localStorage.getItem("emailForSignIn");
      if (storedEmail) {
        signInWithEmailLink(auth, storedEmail, window.location.href)
          .then((result) => {
            localStorage.setItem("user", JSON.stringify(result.user));
            router.replace("/client/dashboard");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    }
  }, [router]);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 8 || password.length > 10) {
      toast.error("Password must be 8-10 characters");
      return;
    }
    setLoading(true);
    try {
      await sendSignInLinkToEmail(auth, email, {
        url: window.location.origin + "/login",
        handleCodeInApp: true,
      });
      window.localStorage.setItem("emailForSignIn", email);
      toast.success("Sign-in link sent! Check your email.");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Enter your email to reset password");
      return;
    }
    try {
      await auth.sendPasswordResetEmail(email);
      toast.success("Password reset email sent!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    toast.message("Logging in...");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      toast.success(
        `Welcome, ${
          result.user.displayName || "user"
        }! You are now part of Anchor Point Initiative.`
      );
      toast.success("Logged in successfully!");
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
    <div className="flex flex-col !p-[3%] gap-[3rem] items-center bg-[#e8e8e8] min-h-screen animate-fadein">
      <Link href={"/"} className="flex flex-col items-center justify-center text-center gap-3">
          <Brain className="w-8 h-8 text-cyan-500" />
          <p className="leading-5 font-semibold text-black">
            ANCHOR POINT <br /> INITIATIVE
          </p>
      </Link>
      <form
        onSubmit={handleEmailSignIn}
        className="bg-white flex flex-col gap-[1rem] max-w-6xl w-[35vw] h-[72vh] rounded-2xl !py-8 !px-8"
      >
        <h1 className="text-2xl">Log in</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-gray-500">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@email.com"
            className="w-full bg-gray-200 rounded-md outline-none !p-[0.6rem] hover:bg-gray-300 transition-all duration-200 placeholder:text-sm !px-5"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-sm">
            <label htmlFor="password" className="text-sm text-gray-500">
              Password
            </label>
            <button
              type="button"
              className="text-gray-500 underline cursor-pointer bg-transparent border-none p-0"
              onClick={handleResetPassword}
            >
              Forgot password
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-gray-200 rounded-md outline-none !p-[0.6rem] hover:bg-gray-300 transition-all duration-200 placeholder:text-sm !px-5 pr-10"
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
          className="w-full bg-black text-white !py-[0.6rem] cursor-pointer rounded-lg hover:bg-gray-900 transition !mb-4"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Send sign-in link"}
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
        <div className="flex items-center justify-between mt-6">
          <span>Don't have an account?</span>
          <Link
            href="/signup"
            className="ml-2 px-4 py-2 border rounded-lg text-black hover:bg-gray-100 text-sm"
          >
            Sign Up for Free
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
