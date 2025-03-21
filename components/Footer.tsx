import Link from "next/link"
import { DiscIcon as Discord, Send, Twitter } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-[#1c1c1c] text-white py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Left Column */}
          <div>
            <h2 className="text-[#c0ff00] font-bold text-2xl mb-4">KOHITO STUDIO</h2>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-[#252728] p-3 rounded-full hover:bg-[#333333] transition-colors">
                <Discord className="w-6 h-6" />
              </Link>
              <Link href="#" className="bg-[#252728] p-3 rounded-full hover:bg-[#333333] transition-colors">
                <Send className="w-6 h-6" />
              </Link>
              <Link href="#" className="bg-[#252728] p-3 rounded-full hover:bg-[#333333] transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h2 className="text-gray-400 font-bold text-xl mb-4">Navigation</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-[#c0ff00]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-white hover:text-[#c0ff00]">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-white hover:text-[#c0ff00]">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[#c0ff00]">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-gray-400 font-bold text-xl mb-4">User Support</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-[#c0ff00]">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[#c0ff00]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[#c0ff00]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-6 flex flex-col md:flex-row justify-center items-center">
          <div className="text-white">Made with</div>
          <div className="ml-2 text-[#ff3b8b] font-bold flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff3b8b" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" fill="#1c1c1c" />
              <circle cx="12" cy="12" r="2" fill="#ff3b8b" />
            </svg>
            <span className="ml-1">Polkadot</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

