// components/sections/FAQSection.tsx
'use client';

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="flex items-center mt-10 lg:mt-0">
        <div className="border-s-[#f15e314d] border-r-[#f15e314d] md:border lg:mx-10 w-full lg:min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="text-orange-500 text-4xl md:text-5xl font-light">/</span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-[#f15d324d] overflow-hidden transition-all duration-300 hover:border-orange-500/30">
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-6 text-left bg-transparent hover:bg-gray-900/30 transition-colors duration-300"
      >
        <h3 className="faq-question">
          {question}
        </h3>
        
        {/* Arrow Icon */}
        <div
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-orange-500"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-5 pb-6 md:pb-8">
          {/* <div className="border-t border-gray-800 pt-6"> */}
            <p className="subtitle">
              {answer}
            </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
