import PartyMember from "@/app/ui/components/PartyMember";
import { NextFont } from "next/dist/compiled/@next/font";

interface PartyProps {
  fonts: {
    first: NextFont;
    second: NextFont;
  };
}

const Party = ({ fonts }: PartyProps) => {
  const headers = ["hero", "stats"];

  return (
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-15 flex justify-center">
      <PartyMember
        headers={headers}
        name="Anton"
        xp={2360504}
        hp={452}
        level={67}
        strength={95}
        wisdom={43}
        status="confused"
        abilities={[]}
        ultimate="silly face"
        fonts={fonts}
      />
      <PartyMember
        headers={headers}
        name="???"
        xp={NaN}
        hp={9999}
        level={-12450}
        strength={999}
        wisdom={999}
        status="enraged"
        abilities={[]}
        ultimate="sneak attack"
        fonts={fonts}
      />
      <PartyMember
        headers={headers}
        name="Kokos"
        xp={19}
        hp={23}
        level={2}
        strength={2}
        wisdom={10}
        status="sleepy"
        abilities={[]}
        ultimate="Zoomies"
        fonts={fonts}
      />
    </div>
  );
};

export default Party;
