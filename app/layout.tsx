import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Valentin Dudin — UX Designer & Researcher",
  description:
    "Portfolio of Valentin Dudin. UX Designer and Researcher based in Milan, Italy. Specializing in user research, product design, and digital experiences.",
  keywords: [
    "UX Designer",
    "UX Researcher",
    "Product Design",
    "Milan",
    "Valentin Dudin",
    "Portfolio",
  ],
  authors: [{ name: "Valentin Dudin" }],
  openGraph: {
    title: "Valentin Dudin — UX Designer & Researcher",
    description:
      "Portfolio of Valentin Dudin. UX Designer and Researcher based in Milan, Italy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
