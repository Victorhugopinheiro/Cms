import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Header } from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cms - oficina certa para você",
  description: "Trabalho excelete focado na satisfação do cliente",
  keywords:["oficina", "troca de oleo", "manutenção de carros", "carros"],
  openGraph:{
    title:"DevMotors- sa oficina especializada",
    images:["http://localhost:3000/logo.jpg"]
  },
  robots:{
    nocache:true,
    index:true,
    follow:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true
      
    }
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <p style={{textAlign:"center", marginBottom:15,  marginTop:50}}>Todos os direitos reservados @{new Date().getFullYear()}</p>
      </body>
    </html>
  );
}
