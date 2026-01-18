import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/project-card.module.css";

export interface ProjectData {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

interface ProjectCardProps {
  data: ProjectData;
}

function ProjectCard({ data }: ProjectCardProps) {
  return (
    <div className={styles.project}>
      <Link href="">
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        <Image
          className={styles.image}
          src={data.imageUrl}
          width={data.imageWidth}
          height={data.imageHeight}
          alt={data.imageAlt}
        />
      </Link>
    </div>
  );
}

export default ProjectCard;
