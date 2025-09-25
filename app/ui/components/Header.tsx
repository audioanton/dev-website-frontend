import React, { ReactNode } from "react"
import styles from "@/app/ui/header.module.css"
import Link from "next/link";

interface HeaderData {
    title: string;
    subtitle: string;
}

function Header(data: HeaderData){
    return  (
        <div className={styles.headerDiv}>
            <h1 className={styles.headline}>{data.title}</h1>
            <p>{data.subtitle}</p>
            <Link href="https://github.com/audioanton">github</Link>
        </div>
    )
        
}

export default Header;