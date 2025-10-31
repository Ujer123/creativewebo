'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuPhone } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, hasDropdown }) => (
  <Link
    href={href}
  >
    {children}
    {hasDropdown && <span>▾</span>}
  </Link>
);

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="md:fixed w-full z-50 bg-black backdrop-blur-sm">
      <div className="w-full md:mx-auto md:px-10 md:pt-10 pt-3">
        <div className="flex items-center justify-between border-t-[#f15e314d] border-s-[#f15e314d] md:border">
          {/* Logo */}
          <Link href="/" className="flex items-center ps-7">
            <Image
              src="https://www.creativewebo.com/assets/images/SVG/logo.svg"
              width={230}
              height={150}
              alt="Creative Webo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 text-white nav-items">
            <div className="gap-3 flex">
                <LuPhone/>
            <a href="tel:+971561182686" className="hover:text-orange-500 transition-colors">
              +971 56 118 2686
            </a>
            <span>/</span>
            <a href="tel:+919004480375" className="hover:text-orange-500 transition-colors">
              +91-9004480375
            </a>
            </div>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services" hasDropdown>Services</NavLink>
            <NavLink href="/hire" hasDropdown>Hire</NavLink>
            <NavLink href="/case-studies">Case Studies</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
            <RiMenu3Fill color='white' size={50} className='border-[#f15e314d] border p-3 font-mono'/>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <RiMenu3Fill color='white' size={30}/>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services" hasDropdown>Services</NavLink>
            <NavLink href="/hire" hasDropdown>Hire</NavLink>
            <NavLink href="/case-studies">Case Studies</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
            
          </div>
        )}
      </div>
    </nav>
  );
};
