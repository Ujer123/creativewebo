'use client';

import React from 'react';

export const ScrollDown: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer " onClick={handleScroll}>
      <span className="text-white text-[13px] uppercase">Scroll Down</span>
      <div className="w-6 h-8 border border-[#f15e31] flex items-start justify-center p-2 ">
        <div className="w-1 h-3 bg-white rounded-full animate-scroll animate-bounce"></div>
      </div>
    </div>
  );
};
