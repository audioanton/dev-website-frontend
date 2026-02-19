"use client";

import Header from "@/app/ui/blocks/Header";
import Sidebar from "@/app/ui/blocks/Sidebar";
import Main from "@/app/ui/blocks/Main";
import Questlog from "../ui/sections/Questlog";
import Party from "../ui/sections/Party";
import Policy from "../ui/sections/Policy";
import React, { useState } from "react";
import { Noto_Sans, Saira_Condensed } from "next/font/google";
import { useParams, notFound } from "next/navigation";
import ContactForm from "../ui/components/ContactForm";
import type { Status } from "../ui/components/StatusElement";
import StatusElement from "../ui/components/StatusElement";

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
  const [status, setStatus] = useState<Status>("idle");
  const params = useParams();

  const routeSection = params.section?.[0] || "";

  const validSections: Record<string, string> = {
    "": "Party",
    questlog: "Questlog",
    party: "Party",
    cookies: "Cookies",
    contact: "Contact",
    privacy: "Privacy",
  };

  if (routeSection !== "" && !validSections[routeSection.toLowerCase()]) {
    notFound();
  }

  const focusedSection = validSections[routeSection.toLowerCase()] || "Party";

  const sections = [
    {
      name: "Party",
      jsx: <Party fonts={fonts} />,
    },
    {
      name: "Questlog",
      jsx: <Questlog font={sairaBold} />,
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
      jsx: <ContactForm subtitleFont={sairaBold} setStatus={setStatus} />,
    },
  ];

  return (
    <div className="w-screen h-screen">
      <Header
        title="ANTON Dev VII"
        subtitle={focusedSection}
        titleFont={notoSans}
      />
      <Sidebar
        active={focusedSection}
        content={sections.map((section) => section.name)}
        menuFont={notoSans}
      />
      <StatusElement
        status={status}
        styles={`absolute z-1 bottom-1/4 right-1/2 md:top-1/2 p-5 translate-x-1/2 ${fonts.second.className} text-shadow-lg`}
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
