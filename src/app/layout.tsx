import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";

import { homePath, ticketsPath } from "@/paths";
export const metadata: Metadata = {
  title: "Learning NEXT JS",
  description: "My Road to learning NEXT.JS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          className="
        supports-backdrop-blur:bg-background/60 
        fixed left-0 right-0 top-0 z-20 
        border-bg bg-background/95 backdrop-blur 
        w-full flex py-2.5 px-5 justify-between"
        >
          <div>
            <Link href={homePath()}></Link>
          </div>
          <div>
            <Link href={ticketsPath()}></Link>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
