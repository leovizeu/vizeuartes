// app/layout.tsx

import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja Vizeu Artes",
  description: "Loja Online Vizeu Artes",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
          <Header />
            {children}
        </body>
    </html>
  );
}