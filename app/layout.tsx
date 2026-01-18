import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({
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
    <html lang="en" className={`${inter.className}`}>
      <body className={`antialized`}>{children}</body>
    </html>
  );
}
