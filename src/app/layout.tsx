import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/fonts/canela-trial.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AusCycling - Australia's National Cycling Organisation",
  description:
    "AusCycling is Australia's national cycling organisation, supporting all forms of cycling from grassroots to elite level across BMX, mountain bike, track, road, and para-cycling.",
  keywords: [
    "cycling",
    "Australia",
    "BMX",
    "mountain bike",
    "track cycling",
    "road cycling",
    "para-cycling",
  ],
  authors: [{ name: "AusCycling" }],
  openGraph: {
    title: "AusCycling - Australia's National Cycling Organisation",
    description:
      "AusCycling is Australia's national cycling organisation, supporting all forms of cycling from grassroots to elite level.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
