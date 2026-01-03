"use client";

import ProjectCard from "./ui/components/ProjectCard";
import { ProjectData } from "./ui/components/ProjectCard";
import FormContainer from "./ui/components/FormContainer";

export default function Home() {
  const project: ProjectData = {
    title: "Music Website",
    description:
      "My personal website where I display my music and blog. Built using Jekyll and hosted on Github Pages.",
    url: "https://github.com/audioanton/site",
    imageUrl: "/blog.png",
    imageWidth: 500,
    imageHeight: 220,
    imageAlt: "a code snippet from my website project",
  };

  return (
    <>
      <h2>Projects</h2>
      <ProjectCard data={project} />
      <FormContainer useModal={true} />
    </>
  );
}
