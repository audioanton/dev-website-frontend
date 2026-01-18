"use client";

import Header from "@/app/ui/blocks/Header";
import Sidebar from "@/app/ui/blocks/Sidebar";
import Content from "@/app/ui/blocks/Content";

export default function Home() {
  return (
    <>
      <Header title="Anton" subtitle="Software Developer" />
      <Sidebar />
      <Content />
    </>
  );
}
