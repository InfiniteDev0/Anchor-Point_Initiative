"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import ClientNav from "./components/ClientNav";
import { supabase } from "@/lib/supabaseClient";

function DashboardPage() {
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("uid", user.uid)
        .single();
      if (!error) setProfile(data);
      // handle error if needed
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Successfully logged in!");
    }
  }, [searchParams]);
  return (
    <div className="!px-[3%] bg-[#ebebeb] min-h-screen !py-[1%] ">
      <ClientNav />
      {/* dashboard content here */}
    </div>
  );
}

export default DashboardPage;
