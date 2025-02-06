import Link from 'next/link';
import { Twitter, Instagram, Youtube, Disc as Discord } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Blackrose Club</h3>
            <p className="text-gray-400 mb-4">
              Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Discord className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Imprint</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Head Quarter</h3>
            <address className="text-gray-400 not-italic">
              BLACKROSE CLUB LTD Victoria House,<br />
              Suite 4288 Surrey Quays Road<br />
              London SE16 7DX, United Kingdom
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blackrose Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}