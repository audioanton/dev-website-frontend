"use client";

import Header from "@/app/ui/blocks/Header";
import Sidebar from "@/app/ui/blocks/Sidebar";
import Main from "@/app/ui/blocks/Main";
import Questlog from "./ui/sections/Questlog";
import Contact from "./ui/sections/Contact";
import Party from "./ui/sections/Party";
import Policy from "./ui/sections/Policy";
import React, { useState } from "react";
import { Noto_Sans, Saira_Condensed } from "next/font/google";

const notoSans = Noto_Sans({
  weight: "variable",
  subsets: ["latin"],
});

const sairaBold = Saira_Condensed({
  weight: "700",
  subsets: ["latin"],
});

const fonts = {
  first: notoSans,
  second: sairaBold,
};

export default function Home() {
  const [focusedSection, setFocusedSection] = useState("Party");

  const sections = [
    {
      name: "Questlog",
      jsx: <Questlog font={sairaBold} />,
    },
    {
      name: "Party",
      jsx: <Party fonts={fonts} />,
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
    <div className="w-screen h-screen">
      <Header
        title="ANTON Dev VII"
        subtitle={focusedSection}
        titleFont={notoSans}
      />
      <Sidebar
        active={focusedSection}
        select={selectSection}
        content={sections.map((section) => section.name)}
        menuFont={notoSans}
      />
      <Main
        content={sections[0].jsx}
        name={sections[0].name}
        selection={focusedSection}
      />
      <Main
        content={sections[1].jsx}
        name={sections[1].name}
        selection={focusedSection}
      />
      <Main
        content={sections[2].jsx}
        name={sections[2].name}
        selection={focusedSection}
      />
      <Main
        content={sections[3].jsx}
        name={sections[3].name}
        selection={focusedSection}
      />
      <Main
        content={sections[4].jsx}
        name={sections[4].name}
        selection={focusedSection}
      />
    </div>
  );
}
