'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Nikolaus Schauersberger',
    role: 'Founder / CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
    description: 'We Provides A Secure And Efficient Key Management Solution, Ensuring Convenient Access And Peace Of Mind For Individuals And Businesses. Simplify Your Key Handling With Our Reliable Key Duplication, Storage, And Tracking Services.'
  },
  {
    name: 'Team Member 2',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300',
    description: 'Expert in blockchain technology and metaverse development'
  },
  {
    name: 'Team Member 3',
    role: 'COO',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?fit=crop&w=300&h=300',
    description: 'Operations and strategy specialist'
  },
  {
    name: 'Team Member 4',
    role: 'CMO',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fit=crop&w=300&h=300',
    description: 'Marketing and growth expert'
  },
  {
    name: 'Team Member 5',
    role: 'CIO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300',
    description: 'Innovation and technology leader'
  }
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Calculate positions and connections for team members
  const getTeamMemberPositions = () => {
    const radius = 250;
    return teamMembers.map((_, index) => {
      const angle = (Math.PI / (teamMembers.length - 1)) * index;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        angle
      };
    });
  };

  const positions = getTeamMemberPositions();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black to-green-900/20 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Team Members</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We Provides A Secure And Efficient Key Management Solution, Ensuring Convenient Access And Peace Of Mind For Individuals
            And Businesses. Simplify Your Key Handling With Our Reliable Key Duplication, Storage, And Tracking Services.
          </p>
        </div>

        {/* Team Members Circle */}
        <div className="relative h-[600px]">
          {/* Center Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-80">
            <h3 className="text-[#2EF62E] text-xl font-bold mb-2">{teamMembers[currentIndex].name}</h3>
            <p className="text-white text-sm mb-4">{teamMembers[currentIndex].role}</p>
            <p className="text-gray-400 text-sm">
              {teamMembers[currentIndex].description}
            </p>
          </div>

          {/* Connecting Lines Container */}
          <div className="absolute top-1/2 left-1/2 w-full h-full">
            {positions.map((pos1, i) => (
              positions.map((pos2, j) => {
                // Only draw lines between adjacent members and the first-last connection
                if ((j === i + 1) || (i === 0 && j === positions.length - 1)) {
                  const length = Math.sqrt(
                    Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2)
                  );
                  const angle = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
                  return (
                    <div
                      key={`line-${i}-${j}`}
                      className="absolute border-t-2 border-dashed border-[#2EF62E]/30"
                      style={{
                        width: `${length}px`,
                        left: `${pos1.x}px`,
                        top: `${pos1.y}px`,
                        transform: `rotate(${angle}rad)`,
                        transformOrigin: '0 0',
                      }}
                    />
                  );
                }
                return null;
              })
            ))}
          </div>

          {/* Team Member Images */}
          {positions.map((position, index) => (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                currentIndex === index ? 'scale-125' : 'scale-100'
              }`}
              style={{
                left: `calc(50% + ${position.x}px)`,
                top: `calc(50% - ${position.y}px)`,
                zIndex: currentIndex === index ? 20 : 10,
              }}
            >
              <div className="relative">
                <img
                  src={teamMembers[index].image}
                  alt={teamMembers[index].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#2EF62E]/50 cursor-pointer
                           hover:border-[#2EF62E] transition-all duration-300"
                  onClick={() => setCurrentIndex(index)}
                />
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,246,46,0.1)_0%,transparent_70%)]" />
    </section>
  );
}