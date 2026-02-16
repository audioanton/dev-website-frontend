import PartyMember from "@/app/ui/components/PartyMember";
import { NextFont } from "next/dist/compiled/@next/font";
import Carousel from "../components/Carousel";

interface PartyProps {
  fonts: {
    first: NextFont;
    second: NextFont;
  };
}

const Party = ({ fonts }: PartyProps) => {
  const headers = ["hero", "stats"];

  const members = [
    <PartyMember
      key="member-anton"
      headers={headers}
      name="Anton"
      xp={2360504}
      hp={452}
      level={67}
      strength={95}
      wisdom={43}
      status="confused"
      abilities={{
        first: "Nerd Out",
        second: "DROP DATABASE;",
        third: "Throw Exception",
      }}
      ultimate="silly face"
      fonts={fonts}
      image="/anton_surprise.png"
    />,
    <PartyMember
      key="member-???"
      headers={headers}
      name="???"
      xp={NaN}
      hp={9999}
      level={-12450}
      strength={999}
      wisdom={999}
      status="enraged"
      abilities={{
        first: "Master Plan",
        second: "Meditation",
        third: "Knit Kick",
      }}
      ultimate="sneak attack"
      fonts={fonts}
      image="/mysterio.PNG"
    />,
    <PartyMember
      key="member-kokos"
      headers={headers}
      name="Kokos"
      xp={19}
      hp={23}
      level={2}
      strength={2}
      wisdom={10}
      status="sleepy"
      abilities={{
        first: "Big Stretch",
        second: "Scratch Couch",
        third: "Smelly Poop",
      }}
      ultimate="Zoomies"
      fonts={fonts}
      image="/kokos_miaow.PNG"
    />,
  ];

  return (
    <>
      <div className="hidden lg:grid w-full lg:grid-cols-3 gap-4 xl:gap-x-10 flex justify-center">
        {members}
      </div>
      <div className="lg:hidden">
        <Carousel content={members} />
      </div>
    </>
  );
};

export default Party;
