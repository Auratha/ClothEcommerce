import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUpToGetBonus from "@/components/SignUpToGetBonus";

export const metadata: Metadata = {
  title: "Product Store",
  description: "Sell products online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SignUpToGetBonus />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
