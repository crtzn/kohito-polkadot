"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const WalletProvider = dynamic(() => import("@/components/WalletProvider"), {
  ssr: false,
});

function Navbar() {
  return (
    <div >
      <nav className="bg-[#1e1e1e] text-white flex items-center justify-between px-6 py-4 fixed w-full z-50">
        <div className="text-[#e4ff07] font-bold text-xl tracking-wider">KOHITO MARKETPLACE</div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-[#e4ff07] hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#mint" className="text-[#e4ff07] hover:text-white transition-colors">
            Mint
          </Link>
          <Link href="#how-it-works" className="text-[#e4ff07] hover:text-white transition-colors">
            How it works
          </Link>
          <Link href="/marketplace" className="text-[#e4ff07] hover:text-white transition-colors">
            Marketplace
          </Link>
        </div>
        {/* Wallet btn Connection */}
        <WalletProvider />
      </nav>
    </div>
  );
}

export default Navbar;
