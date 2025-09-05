"use client";
import React, { Suspense } from "react";
import ClientNav from "./components/ClientNav";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardClient() {
  // ...your existing logic...
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="!px-[3%] bg-[#ebebeb] min-h-screen !py-[1%] ">
        <ClientNav />
        {/* dashboard content here */}
      </div>
    </Suspense>
  );
}