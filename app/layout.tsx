import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Enjoy exploring my portfolio",
  icons: [
    {
      url: '/waves.svg',
      href: '/waves.svg'
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`relative min-h-screen flex flex-col text-white" ${inter.className}`}>
          <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-[-1]">
            <source src="/videos/1531418-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          {children}
        </body>
      </html>
    </>
  );
}
