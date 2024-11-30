import "./globals.css";

import type { Metadata } from "next";

import { Header } from "@/components/header";

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
        <Header />
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
