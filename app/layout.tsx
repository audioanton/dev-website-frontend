import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/components/Header";

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
    <html lang="en">
      <body
        className={'bg-[--secondary-color]'} antialiased`}
      >
        <Header title="Anton" subtitle="Software Developer" />
        {children}
      </body>
    </html>
  );
}
