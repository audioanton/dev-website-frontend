import { NextFont } from "next/dist/compiled/@next/font";
import Quest from "../components/Quest";

interface QuestlogData {
  font: NextFont;
}

const Questlog = ({ font }: QuestlogData) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-20">
      <Quest
        title="Music Website"
        subtitle="I wrote a website for my music"
        description="I used Jekyll - a tool based in Liquid templating language to create static websites from Markdown. It was a really fun project, and it turned out nice. It helped me practise my css and html skills. Thankfully it supports css modules which helped a lot. Check it out for some nice video game music."
        url="https://audioanton.github.io/site"
        image="/music_website.png"
        alt="A screenshot of my music website with a cartoon computer display"
        status="completed"
        xp="9569"
        skills={{
          first: "Jekyll",
          second: "Liquid",
          third: "Web Dev",
        }}
        font={font}
      ></Quest>
      <Quest
        title="Java Backend"
        subtitle="I built a robust engine for handling forms"
        description="I made a REST api using Java and Spring Boot to handle form submissions. Dependencies were handled with Maven and I used basic Spring Boot MVC for code structure. It was deployed on render, and I messed around with docker hub and webhooks, fun! It sharpened my RESTful skills, but what about the REST?"
        url="https://github.com/audioanton/dev-website-backend"
        image="/forms.png"
        alt="my green contact form"
        status="completed"
        xp="12450"
        skills={{
          first: "Java",
          second: "CI/CD",
          third: "REST API",
        }}
        font={font}
      ></Quest>
    </div>
  );
};

export default Questlog;
