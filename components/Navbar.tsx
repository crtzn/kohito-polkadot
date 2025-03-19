"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const WalletProvider = dynamic(() => import("@/components/WalletProvider"), {
  ssr: false,
});

function Navbar() {
  return (
    <div>
        <nav className="bg-[#1c1c1c] text-white flex items-center justify-between px-5 py-4">
        <div className="text-[#c0ff00] font-bold text-lg tracking-wider">KOHITO MARKETPLACE</div>

        <div className="flex items-center space-x-8">
          <Link href="/" className="bg-[#333333] px-6 py-2 text-white">
            Home
          </Link>
          <Link href="/mint" className="text-[#c0ff00] hover:text-[#d8ff4a]">
            Mint
          </Link>
          <Link href="/how-it-works" className="text-[#c0ff00] hover:text-[#d8ff4a]">
            How it works
          </Link>
          <Link href="/marketplace" className="text-[#c0ff00] hover:text-[#d8ff4a]">
            Marketplace
          </Link>
          </div>
        <div>
        {/* Wallet btn Connection */}
        <WalletProvider />
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
