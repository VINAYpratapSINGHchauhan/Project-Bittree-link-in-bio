import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitTree - your favourite Bit tree creating  site",
  description: "BitTree lets you create a personalized link-in-bio page to showcase all your important links in one place. Perfect for creators, influencers, and brands. Build and share your BitTree in seconds!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
