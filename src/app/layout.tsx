import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Noto_Sans_Bengali } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import Marquee from "@/components/shared/Marquee";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={notoSansBengali.variable}>
      <body className="min-h-screen flex flex-col font-sans">
<NavBar></NavBar>
<Marquee></Marquee>

        {children}

        <ToastContainer />
      </body>
    </html>
  );
}