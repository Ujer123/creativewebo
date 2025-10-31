// components/sections/ServicesSection.tsx
'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

interface ServicesSectionProps {
  sectionTitle?: string;
  sectionDescription?: string;
  services: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  sectionTitle = 'Transforming Ideas into Seamless Digital Solutions',
  sectionDescription = "Empowering Mumbai's brands with immersive digital experiences—crafted through innovative design, precision-driven code, and seamless functionality. Let's build something extraordinary together.",
  services,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="flex items-center mt-10 lg:mt-0">
        <div className="border-s-[#f15e314d] border-r-[#f15e314d] md:border lg:mx-10 w-full min-h-screen flex items-center justify-center">
      <div className="lg:max-w-7xl mx-auto px-6 max-w-full">
        {/* Header Section */}
        <div className="md:flex items-center lg:gap-8 mb-16">
          <div className="flex items-start gap-3">
            <span className="text-orange-500 text-3xl font-bold">/</span>
            <h2 className='w-sm'>
              {sectionTitle}
            </h2>
          </div>
          <div className="flex items-center">
            <p className='paragraph lg:w-lg'>
              {sectionDescription}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="pt-4 flex justify-center">
                      <Button href={ctaLink} variant="primary" className="mt-5">
                        {ctaText}
                      </Button>
                    </div>
      </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard: React.FC<Service> = ({ icon, title, description, image }) => {
  return (
    <div className="group relative md:py-8 md:px-5 rounded-lg overflow-hidden cursor-pointer transition-all duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className='mb-2'>
          {title}
        </h3>

        {/* Description */}
        <p className="subtitle">
          {description}
        </p>
      </div>
    </div>
  );
};
