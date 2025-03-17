"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const WalletProvider = dynamic(() => import("@/components/WalletProvider"), {
  ssr: false,
});

function Navbar() {
  return (
    <div className="flex justify-between items-center p-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1>Logo here</h1>
      </div>
      <div>
        {/* Wallet btn Connection */}
        <WalletProvider />
      </div>
    </div>
  );
}

export default Navbar;
