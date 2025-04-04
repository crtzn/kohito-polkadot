import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const unbounded = Unbounded({
  variable: "--font-unbounded", // This defines a CSS variable
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"], // Include the weights you need
});

export const metadata: Metadata = {
  title: "Kohito",
  description: "Kohito Studio Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable}  antialiased`}>
        <div></div>
        {children}
        <Toaster />
        <div></div>
      </body>
    </html>
  );
}
