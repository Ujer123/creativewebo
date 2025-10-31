// components/sections/AboutSection.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

interface AboutSectionProps {
  tagline?: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  tagline = 'Digital solution partner',
  title,
  subtitle,
  description,
  ctaText = 'Discover More Services',
  ctaLink = '/services',
  imageUrl,
  imageAlt = 'About illustration',
}) => {
  return (
    <section className="relative overflow-hidden justify-center flex items-center lg:mt-0 mt-10">
        <div className="border-s-[#f15e314d] border-r-[#f15e314d] md:border lg:mx-10 w-full lg:min-h-screen flex items-center justify-center">

      <div className="md:max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title with Slash */}
            <div>
              <div className="flex items-end gap-2">
                <span className="text-orange-500 text-3xl md:text-3xl font-extrabold leading-none mt-1">
                  /
                </span>
                <div>
                  <h2>
                    {title}
                  </h2>
                </div>
              </div>
                  {tagline && (
                      <p className="subtitle mt-1">
                      {tagline}
                    </p>
                  )}
            </div>

            {/* Description */}
            <p className="paragraph lg:pe-14">
              {description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button href={ctaLink} variant="primary" className="w-full sm:w-auto">
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {imageUrl ? (
                <div className="relative w-full max-w-md lg:max-w-sm aspect-square">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  />
              </div>
            ) : (
              // Fallback graphic
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-orange-900/20 to-transparent rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-9xl opacity-20">◉</span>
              </div>
            )}
          </div>
        </div>
      </div>
                  </div>
    </section>
  );
};
