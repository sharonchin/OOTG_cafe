"use client";
import Dashboard from "@/components/Dashboard";
import { Button, ButtonGroup } from "@mui/material";
import Image from "next/image";
import React from "react";
import Profile from "@/components/Profile";
import Setting from "@/components/Setting";
import Order from "@/components/Order";
import Management from "@/components/Management";
import useSession from "@/lib/useSession";

export default function Home() {
  const cafe = useSession();

  return (
    <div className="flex flex-col items-center justify-between">
      <Dashboard />
    </div>
  );
}
