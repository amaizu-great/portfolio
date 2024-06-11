import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ResponsiveHeader from "./components/header/ResponsiveHeader"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "All About Great and his Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative overflow-x-hidden`}>
        <ResponsiveHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
