'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const membershipCards = [
  {
    title: 'Become an Investor',
    description: 'This feature is not available to everyone, but you can access it by requesting us.',
    price: null,
  },
  {
    title: 'Become a Club Member',
    description: 'Product Blackrose Club Shopowner costs 15.000€ net and includes',
    price: '15.000€',
    benefits: [
      '10 seminars on mindset, crypto, metaverse and NFT',
      '1 workshop on job opportunities in the Metaverse',
      'Permission to enter the virtual Blackrose Club World to shop products and visit events'
    ]
  },
  {
    title: 'Become a Shop Owner',
    description: 'Product Blackrose Club Shopowner costs 15.000€ net and includes',
    price: '15.000€',
    benefits: [
      'All benefits of the Blackrose Club Member package',
      'Run your own virtual shop in the Blackrose Club World',
      'Get 20% of the profits you generate in your virtual shop',
      'Eligible for profit distribution from the advertising and member pool'
    ]
  }
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-[#000C06]">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(46,246,46,0.05)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#000C06] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Seize Early<br />
            Opportunities In The{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              Metaverses
            </span>{' '}
            For<br />
            Business & Leisure
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            You Can Shop Your Favorite Products, Join And Organize Cultural And Sports Events, Sell Your Products
            In Your Own Metaverse, And Gain Yield In An Innovative Growth Market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#2EF62E] hover:bg-[#29DD29] text-black rounded-full px-8">
              Explore Services
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              Contact us
            </Button>
          </div>
        </div>

        {/* Membership Cards with Staggered Layout */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {membershipCards.map((card, index) => (
              <div
                key={index}
                className={`bg-black/40 backdrop-blur-sm border border-green-500/20 p-6 rounded-xl
                          hover:border-green-500/40 transition-all duration-300
                          ${index === 1 ? '-translate-y-8' : 'translate-y-4'}`}
              >
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                {card.benefits && (
                  <ul className="space-y-2 mb-6">
                    {card.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-[#2EF62E] mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
                <Button 
                  variant="link" 
                  className="text-[#2EF62E] hover:text-[#29DD29] p-0 flex items-center gap-2"
                >
                  See Explained
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Decorative Wave Lines */}
          <div className="absolute -bottom-16 left-0 right-0">
            <svg className="w-full" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,100 C300,20 600,180 1200,100"
                stroke="rgba(46,246,46,0.1)"
                fill="none"
                strokeWidth="2"
              />
              <path
                d="M0,150 C300,70 600,230 1200,150"
                stroke="rgba(46,246,46,0.05)"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}