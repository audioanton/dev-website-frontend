import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/components/Header";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact me",
  description: "Fill in form to get in touch with me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-(--secondary-color) text-(--primary-color) ${inter.className} tracking-tight`}
    >
      <body className={`antialized`}>
        <Header title="Anton" subtitle="Software Developer" />
        {children}
      </body>
    </html>
  );
}
