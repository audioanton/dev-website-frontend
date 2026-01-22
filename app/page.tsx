"use client";

import Header from "@/app/ui/blocks/Header";
import Sidebar from "@/app/ui/blocks/Sidebar";
import Main from "@/app/ui/blocks/Main";
import Questlog from "./ui/sections/Questlog";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Home");
  const [sectionClasses, setSectionClasses] = useState([
    "",
    "hidden",
    "hidden",
    "hidden",
    "hidden",
  ]);

  const sections = {
    questlog: <Questlog />,
    party: <></>,
    cookies: <></>,
    privacy: <></>,
    contact: <></>,
  };

  const setHeaderTitle = (title: string): void => {
    setTitle(title);
  };

  const toggleSection = (section: string) => {
    const mutated = sectionClasses;
    mutated[0] = mutated[0] === "hidden" ? "" : "hidden";
    console.log(mutated);
    setSectionClasses(mutated);
    console.log(sectionClasses);
  };

  return (
    <>
      <Header title={title} subtitle="Software Developer" />
      <Sidebar setPageName={setHeaderTitle} loadContent={toggleSection} />
      <Main children={sections.questlog} hidden={sectionClasses[0]} />
      <Main children={sections.party} />
      <Main children={sections.contact} />
      <Main children={sections.cookies} />
      <Main children={sections.privacy} />
    </>
  );
}
