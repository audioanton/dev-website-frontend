import Card from "@/app/ui/components/Card";

const Questlog = () => {
  return (
    <div>
      <h2>Questlog</h2>
      <Card
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

export default Questlog;
