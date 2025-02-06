'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section with Green Background */}
        <div className="bg-[#2EF62E] py-4 px-8 rounded-br-[2.5rem]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-black transform rotate-45" />
            <span className="text-xl font-bold text-black">Blackrose Club</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center pr-6">
          <div className="flex items-center gap-12 mr-8">
            <Link href="/" className="text-white hover:text-[#2EF62E] text-sm font-medium tracking-wide">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-[#2EF62E] text-sm font-medium tracking-wide">
              ABOUT
            </Link>
            <Link href="/roadmap" className="text-white hover:text-[#2EF62E] text-sm font-medium tracking-wide">
              ROADMAP
            </Link>
            <Link href="/services" className="text-white hover:text-[#2EF62E] text-sm font-medium tracking-wide">
              SERVICES
            </Link>
            <Link href="/team" className="text-white hover:text-[#2EF62E] text-sm font-medium tracking-wide">
              TEAM
            </Link>
          </div>
          <Button 
            className="bg-[#2EF62E] hover:bg-[#29DD29] text-black rounded-full px-8 py-2.5 text-sm font-medium"
          >
            BECOME A SHOP OWNER
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden pr-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-white hover:text-[#2EF62E] text-sm font-medium">
              HOME
            </Link>
            <Link href="/about" className="block px-3 py-2 text-white hover:text-[#2EF62E] text-sm font-medium">
              ABOUT
            </Link>
            <Link href="/roadmap" className="block px-3 py-2 text-white hover:text-[#2EF62E] text-sm font-medium">
              ROADMAP
            </Link>
            <Link href="/services" className="block px-3 py-2 text-white hover:text-[#2EF62E] text-sm font-medium">
              SERVICES
            </Link>
            <Link href="/team" className="block px-3 py-2 text-white hover:text-[#2EF62E] text-sm font-medium">
              TEAM
            </Link>
            <Button 
              className="w-full bg-[#2EF62E] hover:bg-[#29DD29] text-black rounded-full px-6 py-2 text-sm font-medium mt-4"
            >
              BECOME A SHOP OWNER
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}