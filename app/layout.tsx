import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messengify",
  description: "Real time messenger application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext/>
        {children}
        </body>
    </html>
  );
}
