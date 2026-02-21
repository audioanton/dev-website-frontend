import { NextFont } from "next/dist/compiled/@next/font";
import Quest from "../components/Quest";
import Carousel from "../components/Carousel";

interface QuestlogData {
  font: NextFont;
}

const Questlog = ({ font }: QuestlogData) => {
  const quests = [
    <Quest
      title="Music Website"
      subtitle="I wrote a website for my music"
      description="I used Jekyll - a tool based in Liquid templating language to create static websites from Markdown. It was a really fun project, and it turned out nice. Check it out for some nice video game music."
      url="https://audioanton.github.io/site"
      image="/ghost-256.png"
      alt="A screenshot of my music website with a cartoon computer display"
      status="completed"
      xp="9569"
      skills={{
        first: "Jekyll",
        second: "Liquid",
        third: "Web Dev",
      }}
      font={font}
    />,
    <Quest
      title="Java Backend"
      subtitle="I built an engine for handling forms"
      description="I made a REST api using Java and Spring Boot to handle form submissions. Spring Boot/Maven. It sharpened my RESTful skills, but what about the REST?"
      url="https://github.com/audioanton/dev-website-backend"
      image="/heart-256.png"
      alt="a pixel art heart"
      status="completed"
      xp="12450"
      skills={{
        first: "Java",
        second: "CI/CD",
        third: "REST API",
      }}
      font={font}
    />,
    <Quest
      title="React Website"
      subtitle="A game-inspired dev portfolio"
      description="I built this website inspired by two childhood favorites, final fantasy VII and VII. Couldn't finish those games back then, but they sure were cool."
      url=""
      image="/cherry-256.png"
      alt="a pixel art cherry"
      status="in progress"
      xp="14322"
      skills={{
        first: "Typescript",
        second: "React",
        third: "Tailwind Css",
      }}
      font={font}
    />,
  ];

  return (
    <>
      <Carousel content={quests} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-20">
        {/* {quests} */}
      </div>
    </>
  );
};

export default Questlog;
