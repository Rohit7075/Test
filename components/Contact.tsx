'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated With Us</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region And Will Later
            Expand To Serve The Global Market.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter Email Address To Subscribe Our Newsletter"
              className="flex-1 bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
            />
            <Button className="bg-[#2EF62E] hover:bg-[#29DD29] text-black px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>
    </section>
  );
}