import type { Metadata } from "next";
import "./globals.css";
import { Saira_Condensed } from "next/font/google";

const saira = Saira_Condensed({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saira.className} text-neutral-300 bg-radial-[at_50%_75%] from-sky-500 via-blue-800 to-[#172554] to-75% `}
    >
      <body className={`antialized`}>{children}</body>
    </html>
  );
}
