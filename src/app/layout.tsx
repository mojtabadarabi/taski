import DesktopLayout from "@/ui/layouts/Desktop";
import MobileLayout from "@/ui/layouts/Mobile";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taski",
  description: "Taski app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isMobile = true
  if (isMobile) return <MobileLayout>{children}</MobileLayout>
  return <DesktopLayout>{children}</DesktopLayout>
}
