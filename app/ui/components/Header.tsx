"use client";

import styles from "@/app/ui/header.module.css";
import Link from "next/link";
import FormContainer from "@/app/ui/components/FormContainer";

interface HeaderData {
  title: string;
  subtitle: string;
}

function Header(data: HeaderData) {
  return (
    <div className={`${styles.headerDiv} text-narrowed`}>
      <h1 className={styles.headline}>{data.title}</h1>
      <p>{data.subtitle}</p>
      <Link href="https://github.com/audioanton">github</Link>
      <FormContainer />
    </div>
  );
}

export default Header;
