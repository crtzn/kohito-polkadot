"use client"
import { Button } from "@/components/ui/button"
import MintPage from "@/components/Mint-page"
import HowItWorksPage from "@/components/How-it-works-page"

export default function Home() {
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
        {/* Content Section */}
        <div className="container mx-auto px-5 py-16 flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-[#c0ff00] text-5xl md:text-6xl font-bold leading-tight tracking-wide drop-shadow-lg">
              ORASYON
              <br />
              NFT MARKETPLACE
            </h1>
            <h2 className="text-[#c0ff00] text-2xl md:text-3xl font-semibold">Forge, Collect, and Conquer!</h2>
            <p className="text-white text-lg max-w-lg">
              Gear up with exclusive NFTs—powerful weapons, enchanted armor, rare pets, and more. Buy, sell, and trade
              to build your legend. Own your gear. Master the arcane. Unleash your power.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-[#c0ff00] hover:bg-[#d8ff4a] text-black font-bold text-lg px-8 py-6 rounded-full">
                Explore Marketplace
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-full"
              >
                Play Game
              </Button>
            </div>
          </div>

          {/* Right Content - NFT Cards Placeholder */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative h-[400px] w-[300px]">
              {/* Using a placeholder for the card stack */}
              <div className="absolute right-0 top-0 h-[400px] w-[300px]">
                <div className="relative w-full h-full">
                  {/* This would be replaced with the actual card stack image */}
                  <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-xl border-2 border-[#c0ff00]">
                    <div className="text-center p-4">
                      <div className="text-[#c0ff00] text-6xl mb-4">?</div>
                      <div className="text-white text-xl font-bold">ORASYON</div>
                      <div className="text-[#c0ff00] mt-4">NFT Card Placeholder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MintPage />
      <HowItWorksPage />
    </div>
  )
}

