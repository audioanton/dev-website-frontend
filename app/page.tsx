"use client";

import Header from "@/app/ui/blocks/Header";
import Sidebar from "@/app/ui/blocks/Sidebar";
import Main from "@/app/ui/blocks/Main";
import Questlog from "./ui/sections/Questlog";
import Contact from "./ui/sections/Contact";
import Party from "./ui/sections/Party";
import Policy from "./ui/sections/Policy";
import React, { useState } from "react";

export default function Home() {
  const [focusedSection, setFocusedSection] = useState("Questlog");

  const sections = [
    {
      name: "Questlog",
      jsx: <Questlog />,
    },
    {
      name: "Party",
      jsx: <Party />,
    },
    {
      name: "Cookies",
      jsx: <Policy title="Cookies" />,
    },
    {
      name: "Privacy",
      jsx: <Policy title="Privacy" />,
    },
    {
      name: "Contact",
      jsx: <Contact />,
    },
  ];

  const selectSection = (title: string): void => {
    setFocusedSection(title);
  };

  return (
    <>
      <Header title="ANTON" subtitle={focusedSection} />
      <Sidebar
        select={selectSection}
        content={sections.map((section) => section.name)}
      />
      <Main
        children={sections[0].jsx}
        name={sections[0].name}
        selection={focusedSection}
      />
      <Main
        children={sections[1].jsx}
        name={sections[1].name}
        selection={focusedSection}
      />
      <Main
        children={sections[2].jsx}
        name={sections[2].name}
        selection={focusedSection}
      />
      <Main
        children={sections[3].jsx}
        name={sections[3].name}
        selection={focusedSection}
      />
      <Main
        children={sections[4].jsx}
        name={sections[4].name}
        selection={focusedSection}
      />
    </>
  );
}
