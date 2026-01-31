import PartyMember from "@/app/ui/components/PartyMember";

const Party = () => {
  return (
    <div className="w-full grid-cols-3 gap-4">
      Party
      <PartyMember
        headers={["stats", "abilities"]}
        name="Anton"
        xp={25432}
        hp={450}
        level={4}
        strength={95}
        wisdom={43}
        status="confused"
        abilities={[]}
        ultimate="Moonwalk"
      />
    </div>
  );
};

export default Party;
