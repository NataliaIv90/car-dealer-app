import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "Front-end JS engineer test assessment - the Car Dealer App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-lvh bg-beige-100">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
