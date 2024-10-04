import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design OS",
  description: "Designing for Designers & Engineers",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <meta name="description" content="For Designers & Engineers" />
        <meta name="keywords" content="Design, Engineering, Designers, Engineers, UI, UX" />
        <title>Design OS</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Design OS" />
        <meta property="og:description" content="For Designers & Engineers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />


        {/* Additional Meta Tags */}
        <link rel="canonical" href="" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <div>
          <Header/>
          <main className="pt-navigation-height">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
