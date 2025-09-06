"use client";
import React, { useState } from "react";
import { Brain, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { auth } from "@/app/login/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#f8f8f8]">
      {/* Left illustration */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full bg-white rounded-l-2xl p-12">
        <div className="flex flex-col gap-6 items-center">
          <Brain className="w-10 h-10 text-cyan-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Automate Your Workflow
          </h2>
          <p className="text-gray-500 text-center">
            Empower teams to streamline tasks and automate processes
          </p>
          {/* Simple flow illustration */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 text-center text-sm">
              New account
              <br />
              <span className="text-xs text-gray-400">Action</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center text-sm">
              Send verification email
              <br />
              <span className="text-xs text-gray-400">Trigger</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center text-sm">
              Successfully Verified
              <br />
              <span className="text-xs text-gray-400">Action</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center text-sm">
              Resend
              <br />
              <span className="text-xs text-gray-400">Action</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right form card */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
          <div className="flex flex-col items-center mb-6">
            <Brain className="w-8 h-8 text-cyan-500 mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {mode === "login" ? "Welcome back!" : "Create your account"}
            </h2>
            <p className="text-gray-500 text-sm text-center">
              {mode === "login"
                ? "Enter your credentials to jump back in."
                : "Sign up to join Anchor Point Initiative."}
            </p>
          </div>
          <form
            onSubmit={mode === "login" ? handleLogin : handleSignup}
            className="flex flex-col gap-4"
          >
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
            {mode === "signup" && (
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
            )}
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition font-semibold"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Sign In"
                : "Sign Up"}
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
            {mode === "login" ? (
              <>
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
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          {mode === "signup" && (
            <div className="mt-4 text-xs text-gray-500">
              Password must be 8-10 characters, include uppercase, lowercase,
              number, and special character.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
