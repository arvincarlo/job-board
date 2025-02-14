import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

import { JobsProvider } from "@/app/_context/JobsContext";

const font = League_Spartan({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Boards",
  description: "Generated by Arvin Carlo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-custom-light-cyan`}
      >
        <JobsProvider>
          {children}
        </JobsProvider>
      </body>
    </html>
  );
}
