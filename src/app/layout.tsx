import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-clip antialiased bg-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
