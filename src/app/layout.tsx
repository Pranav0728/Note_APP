import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/container";


const Poppin = Poppins({ subsets: ["latin"] , weight: ['400']});

export const metadata: Metadata = {
  title: "Post-App",
  description: "Add Posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppin.className} `}>
        <Container>
        <Header/>
        {children}
        <Footer/>
        </Container>
        </body>
    </html>
  );
}
