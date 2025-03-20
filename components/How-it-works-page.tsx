"use client"

import { Star } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main
        className="flex-1 bg-gradient-to-b from-[#706090] to-[#545674]"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1400')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header Section */}
        <div className="bg-[#252728]/80 backdrop-blur-sm py-6 px-8 rounded-b-3xl mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <Star className="text-[#c0ff00] h-10 w-10" fill="#c0ff00" />
            <h1 className="text-[#c0ff00] text-4xl font-bold">HOW IT WORKS</h1>
          </div>
        </div>

        {/* Steps Section */}
        <div className="container mx-auto px-5 py-16 flex flex-col gap-10">
          {/* Steps 1-2 Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-[#252728]/80 backdrop-blur-sm rounded-2xl overflow-hidden flex">
              <div className="bg-[#333333] w-24 flex items-center justify-center">
                <span className="text-[#c0ff00] text-7xl font-bold">1</span>
              </div>
              <div className="p-5 flex flex-col">
                <h2 className="text-[#c0ff00] text-2xl font-bold">Connect Your Wallet</h2>
                <p className="text-white mt-2">
                  Securely link your crypto wallet to start buying, selling, and trading NFTs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#252728]/80 backdrop-blur-sm rounded-2xl overflow-hidden flex">
              <div className="bg-[#333333] w-24 flex items-center justify-center">
                <span className="text-[#c0ff00] text-7xl font-bold">2</span>
              </div>
              <div className="p-5 flex flex-col">
                <h2 className="text-[#c0ff00] text-2xl font-bold">Explore the Marketplace</h2>
                <p className="text-white mt-2">
                  Browse weapons, armor, pets, and mystical artifacts to enhance your character.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 Row */}
          <div className="max-w-2xl mx-auto w-full">
            {/* Step 3 */}
            <div className="bg-[#252728]/80 backdrop-blur-sm rounded-2xl overflow-hidden flex">
              <div className="bg-[#333333] w-24 flex items-center justify-center">
                <span className="text-[#c0ff00] text-7xl font-bold">3</span>
              </div>
              <div className="p-5 flex flex-col">
                <h2 className="text-[#c0ff00] text-2xl font-bold">Buy & Sell NFTs</h2>
                <p className="text-white mt-2">Purchase gear or list your items for trade in the open marketplace.</p>
              </div>
            </div>
          </div>

          {/* Steps 4-5 Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 4 */}
            <div className="bg-[#252728]/80 backdrop-blur-sm rounded-2xl overflow-hidden flex">
              <div className="bg-[#333333] w-24 flex items-center justify-center">
                <span className="text-[#c0ff00] text-7xl font-bold">4</span>
              </div>
              <div className="p-5 flex flex-col">
                <h2 className="text-[#c0ff00] text-2xl font-bold">Equip & Enhance</h2>
                <p className="text-white mt-2">
                  Use your NFTs in battle—strategize, cast powerful spells, and conquer mythical creatures.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#252728]/80 backdrop-blur-sm rounded-2xl overflow-hidden flex">
              <div className="bg-[#333333] w-24 flex items-center justify-center">
                <span className="text-[#c0ff00] text-7xl font-bold">5</span>
              </div>
              <div className="p-5 flex flex-col">
                <h2 className="text-[#c0ff00] text-2xl font-bold">Own & Trade Freely</h2>
                <p className="text-white mt-2">Your gear is truly yours—mint, trade, or sell at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

