import Navbar from "@/components/Navbar";
import FooterMarketplace from "@/components/MarketplaceFooter";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen w-full flex">
          <div className="p-8 w-full">
            {children}
            <Toaster />
          </div>
          <FooterMarketplace />
        </div>
      </body>
    </html>
  );
}
