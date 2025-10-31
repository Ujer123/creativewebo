
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { FaRegEnvelope } from "react-icons/fa";

interface ContactFormProps {
  title?: string;
  budgetOptions?: string[];
  serviceOptions?: string[];
}

export const ContactFormSection: React.FC<ContactFormProps> = ({
  title = 'Get a Quotes',
  budgetOptions = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'Above $50,000',
  ],
  serviceOptions = [
    'Web Development',
    'Mobile App Development',
    'Custom Software Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'Digital Marketing',
  ],
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    service: '',
    captcha: '',
  });

  const [captchaCode, setCaptchaCode] = useState('');

  useEffect(() => {
    setCaptchaCode(Math.floor(100000 + Math.random() * 900000).toString());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="flex items-center">
        <div className="border-s-[#f15e314d] border-r-[#f15e314d] md:border md:mx-10 w-full lg:min-h-screen flex items-center justify-center">
      <div className='md:w-2xl'>
        <div>
            <FaRegEnvelope/>
        </div>
        <div className="flex items-end justify-center gap-3 mb-12">
          <span className="text-orange-500 text-xl md:text-4xl font-extrabold">/</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold">{title}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-base border-b border-[#ffffff33] text-white placeholder-white pb-1 px-0 focus:outline-none focus:border-orange-500 transition-colors duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#ffffff33] text-white placeholder-white pb-1 px-0 focus:outline-none focus:border-orange-500 transition-colors duration-300 text-base"
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full text-base bg-transparent border-b border-[#ffffff33] text-white placeholder-white pb-1 px-0 focus:outline-none focus:border-orange-500 transition-colors duration-300"
            />
          </div>

          {/* Company Name */}
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full text-base bg-transparent border-b border-[#ffffff33] text-white placeholder-white pb-1 px-0 focus:outline-none focus:border-orange-500 transition-colors duration-300"
            />
          </div>

          {/* Select Budget */}
          <div className="relative">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full text-base bg-transparent border-b border-[#ffffff33] text-gray-500 pb-1 px-0 pr-8 focus:outline-none focus:border-orange-500 transition-colors duration-300 appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select a Budget
              </option>
              {budgetOptions.map((option, index) => (
                <option key={index} value={option} className="bg-gray-900 text-white">
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-500"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Select Services */}
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full text-base bg-transparent border-b border-[#ffffff33] text-gray-500 pb-1 px-0 pr-8 focus:outline-none focus:border-orange-500 transition-colors duration-300 appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select a Services
              </option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option} className="bg-gray-900 text-white">
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-500"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Captcha */}
          <div className="flex items-center justify-between border-b border-[#ffffff33] pb-1">
            <input
              type="text"
              name="captcha"
              placeholder="Captcha"
              value={formData.captcha}
              onChange={handleChange}
              required
              className="bg-transparent text-base text-white placeholder-white flex-1 focus:outline-none"
            />
            <span className="text-white font-mono text-base tracking-wider ml-4">
              {captchaCode}
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};
