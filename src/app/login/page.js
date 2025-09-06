"use client";
import { logo } from "@/assets/images";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Brain, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { toast } from "sonner";
import { auth } from "../auth/firebase";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

import Auth from "@/app/components/Auth";

export default function LoginPage() {
  return <Auth />;
}
const router = useRouter();
