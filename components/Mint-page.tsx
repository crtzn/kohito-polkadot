"use client"
import { Star, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import MysteryCard from "@/assets/images/mystery_card.png"

export default function MintPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Content */}
      <main className="flex-1 bg-[#141414]/50">
        {/* Header Section */}
        <div className="bg-[#252728]/80 backdrop-blur-sm py-6 px-8 rounded-b-3xl mx-auto max-w-6xl mt-20">
          <div className="flex items-center gap-4">
            <Star className="text-[#c0ff00] h-10 w-10" fill="#c0ff00" />
            <h1 className="text-[#c0ff00] text-4xl font-bold">Forge Your Fate: Mint a Mystery Card!</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-5 py-16 flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Left Side - NFT Card Placeholder */}
          <div className="md:w-1/3">
            <div className="relative top-[-200px] left-[-100px]">
              {/* Card Stack Effect - Simple Placeholder */}
              <div className="absolute -right-6 top-5 h-[350px] w-[250px] bg-black rounded-xl rotate-6 border-2 border-[#c0ff00]"></div>
              <div className="absolute -right-3 top-3 h-[350px] w-[250px] bg-black rounded-xl rotate-3 border-2 border-[#c0ff00]"></div>
              
                <img src={MysteryCard.src} alt="card" className="absolute -right-1 top-1 h-[350px] w-[250px] bg-black rounded-xl rotate-0 border-2 border-[#c0ff00]"/>
              
            </div>
          </div>

          {/* Right Side - Mystery Card Info */}
          <div className="md:w-3/5">
            <div className="bg-[#252728]/80 backdrop-blur-sm rounded-3xl p-6 text-white">
              <h2 className="text-[#c0ff00] text-3xl font-bold mb-6">Mystery Card</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Description */}
                <div className="bg-[#2d2f30]/80 rounded-xl p-4">
                  <h3 className="text-gray-400 mb-2">Description:</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>

                {/* Utility & Supply */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-gray-400">Utility:</h3>
                      <p>Equipment</p>
                    </div>
                    <div className="text-right">
                      <h3 className="text-gray-400">Total Supply:</h3>
                      <p>150 available</p>
                    </div>
                  </div>

                  {/* Total Minted */}
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-gray-400">Total Minted:</h3>
                      <p className="text-right">
                        0% <span className="text-gray-400">(0/150)</span>
                      </p>
                    </div>
                    <div className="w-full bg-[#2d2f30] h-2 rounded-full mt-1">
                      <div className="bg-[#c0ff00] h-2 rounded-full w-0"></div>
                    </div>
                  </div>

                  {/* Price & Quantity */}
                  <div>
                    <h3 className="text-gray-400">Price:</h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xl font-bold">0.00 KHTC</span>
                        <span className="text-gray-400 text-sm ml-2">($0.00)</span>
                      </div>

                      <div className="flex items-center border border-gray-600 rounded-md">
                        <button className="px-3 py-1 text-gray-300 hover:bg-[#2d2f30]">
                          <Minus className="h-4 w-4" />
                        </button>
                        <div className="px-4 py-1 border-x border-gray-600">1</div>
                        <button className="px-3 py-1 text-gray-300 hover:bg-[#2d2f30]">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mint Button */}
                  <Button className="bg-[#c0ff00] hover:bg-[#d8ff4a] text-black font-bold text-lg py-2 mt-2">
                    Mint Now!
                  </Button>
                </div>
              </div>

              {/* Rarity Section */}
              <div className="bg-[#2d2f30]/80 rounded-xl p-4 mt-4">
                <h3 className="text-gray-400 mb-2">Rarity:</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex justify-between">
                    <span>Common:</span>
                    <span>50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7916f3]">Epic:</span>
                    <span className="text-[#7916f3]">7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#07ffff]">Uncommon:</span>
                    <span className="text-[#07ffff]">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#e4ff07]">Legendary:</span>
                    <span className="text-[#e4ff07]">3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#0dff00]">Rare:</span>
                    <span className="text-[#0dff00]">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

