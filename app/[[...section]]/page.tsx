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
      name: "Contact",
      jsx: <ContactForm subtitleFont={sairaBold} setStatus={setStatus} />,
    },
  ];

  const policies = [
    {
      name: "Cookies",
      jsx: (
        <Policy
          contents={[
            "I don't save ANY browser cookies",
            "I like eating cookies",
            "I don't really bake cookies",
          ]}
        />
      ),
    },
    {
      name: "Privacy",
      jsx: (
        <Policy
          contents={[
            "When contacting me I save your form input",
            "Contact me to remove your information",
          ]}
        />
      ),
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
        sections={sections.map((section) => section.name)}
        menuFont={notoSans}
        policies={policies.map((policy) => policy.name)}
      />
      <StatusElement
        status={status}
        setStatus={setStatus}
        styles={`p-5  ${fonts.second.className} w-full`}
        divStyles={`absolute z-1 bottom-[23%] right-1/2 md:top-1/2 translate-x-1/2`}
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
        content={policies[0].jsx}
        name={policies[0].name}
        selection={focusedSection}
      />
      <Main
        content={policies[1].jsx}
        name={policies[1].name}
        selection={focusedSection}
      />
    </div>
  );
}
