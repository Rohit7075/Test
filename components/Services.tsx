import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Code, Coins, Share2 } from 'lucide-react';

const services = [
  {
    icon: <User className="h-6 w-6" />,
    title: 'Individualisation',
    description: 'Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure, Be Among The Pioneers.',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'User Created Content',
    description: 'Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure, Be Among The Pioneers.',
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: 'Income Opportunities',
    description: 'Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure, Be Among The Pioneers.',
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: 'Social Media',
    description: 'Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure, Be Among The Pioneers.',
  },
];

const marketStats = [
  {
    title: 'Market',
    description: 'Around 58 Million E-Commerce Customers In The DACH Region Spent Over 100billion Euros On Online Purchases In 2021. Most Popular Orders Were Clothes, Shoes, Food And Beauty Products.',
  },
  {
    title: 'Target Group',
    description: 'The Percentage Of Internet Users In The EU Who Order Products Online Asteadably Increasing Over The Years, With The Biggest Development Occurring In The Age Group Of 16-24 Years.',
  },
  {
    title: 'Behavior',
    description: 'The Reasons Why Consumers Prefer Online Over Physical Orders Are Convenience, Variety, Competitive Prices And 24/7 Access',
  },
];

export default function Services() {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Services Intro */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Our Key Services</h2>
            <p className="text-gray-400 text-lg">
              We Provide A Secure And Efficient Key Management Solution, Ensuring Convenient Access And Peace Of
              Mind For Individuals And Businesses. Simplify Your Key Handling With Our Reliable Key Duplication,
              Storage, And Tracking Services.
            </p>
            <Button className="bg-[#2EF62E] hover:bg-[#29DD29] text-black rounded-full px-8">
              Explore Services
            </Button>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-black/40 backdrop-blur-sm border border-green-500/20 p-6 rounded-xl hover:border-green-500/40 transition-colors"
              >
                <div className="text-[#2EF62E] mb-4">{service.icon}</div>
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Market Opportunities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - VR Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80"
                alt="VR Experience"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#2EF62E]/20 rounded-2xl" />
          </div>

          {/* Right Column - Market Stats */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Market Opportunities</h2>
            <p className="text-gray-400 mb-8">
              Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region And Will Later
              Expand To Serve The Global Market.
            </p>
            <div className="space-y-6">
              {marketStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-white font-semibold">• {stat.title}</h3>
                  <p className="text-gray-400 text-sm pl-4">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>
    </section>
  );
}