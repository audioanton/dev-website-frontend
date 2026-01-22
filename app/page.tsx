"use client";

import Header from "@/app/ui/blocks/Header";
import Sidebar from "@/app/ui/blocks/Sidebar";
import Main from "@/app/ui/blocks/Main";
import Questlog from "./ui/sections/Questlog";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Home");

  const setHeaderTitle = (title: string): void => {
    setTitle(title);
  };

  return (
    <>
      <Header title={title} subtitle="Software Developer" />
      <Sidebar setPageName={setHeaderTitle} />
      <Main children=<Questlog /> />
    </>
  );
}
