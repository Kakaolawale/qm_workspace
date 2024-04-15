import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Navbar from "./ui/home/navbar/navbar";
import Footer from "./ui/home/footer/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickMed Workspace Platform CRM",
  description: "A platform created by Adain Technology to manage QuickMed App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
