'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuPhone } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from 'react-icons/io5';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: Array<{ label: string; href: string }>;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, hasDropdown, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (hasDropdown && dropdownItems) {
    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          href={href}
          className="text-white hover:text-orange-500 transition-colors duration-300 flex items-center gap-1"
        >
          {children}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-lg transition-all duration-300 ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <ul className="py-2">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block px-6 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-900/50 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="text-white hover:text-orange-500 transition-colors duration-300 flex items-center gap-1"
    >
      {children}
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceItems = [
    { label: 'Software Solutions', href: '/services/software-solutions' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'Website Development services', href: '/services/website-development-services' },
    { label: 'Emerging Technologies', href: '/services/emerging-technologies' },
    { label: 'IT Outsourcing', href: '/services/it-outsourcing' },
    { label: 'Managed Services', href: '/services/managed-services' },
    { label: 'Branding', href: '/services/branding' },
    { label: 'Digital Marketing Services', href: '/services/digital-marketing' },
    { label: 'Android Mobile App Development', href: '/services/android-app-development' },
    { label: 'iOS App Development', href: '/services/ios-app-development' },
    { label: 'Ecommerce Development', href: '/services/ecommerce-development' },
  ];

  const hireItems = [
    { label: 'Frontend Developer', href: '/services/frontend-developer' },
    { label: 'Laravel Developer', href: '/services/laravel-developer' },
    { label: 'Mern Developer', href: '/services/mern-developer' },
    { label: 'QA Tester', href: '/services/qa-tester' },
    { label: 'Reactjs Developer', href: '/services/reactjs-developer' },
    { label: 'UI-UX Designer', href: '/services/ui-ux-designer' },
    { label: 'Wordpress Developer', href: '/services/wordpress-developer' },    
  ];

  return (
    <nav className="md:fixed w-full z-30 bg-black backdrop-blur-sm">
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
            <NavLink href="/services" hasDropdown dropdownItems={serviceItems}>Services</NavLink>
            <NavLink href="/hire" hasDropdown dropdownItems={hireItems}>Hire</NavLink>
            <NavLink href="/case-studies">Case Studies</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:block hidden text-white"
            aria-label="Toggle menu"
          >

            <RiMenu3Fill color='white' size={50} className='border-[#f15e314d] border p-3 font-mono'/>
          </button>
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
         <div
        className={`fixed inset-0 bg-black z-100 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex">
          {/* Left Side - Menu Items */}
          <div className="w-full lg:w-1/2 p-12 flex flex-col h-full justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors"
              aria-label="Close menu"
            >
              <IoClose size={40} />
            </button>

            {/* Menu Items */}
            <nav className="space-y-6">
              <Link 
                href="/" 
                className="flex items-center gap-4 text-white text-4xl lg:text-5xl font-normal hover:text-orange-500 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-1 group-hover:w-16 transition-all duration-300"></span>
                HOME
              </Link>
              
              <Link 
                href="/about" 
                className="flex items-center gap-4 text-white text-4xl lg:text-5xl font-bold hover:text-orange-500 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-1 bg-orange-500 group-hover:w-16 transition-all duration-300"></span>
                ABOUT US
              </Link>
              
              <Link 
                href="/services" 
                className="flex items-center gap-4 text-white text-4xl lg:text-5xl font-bold hover:text-orange-500 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-1 bg-orange-500 group-hover:w-16 transition-all duration-300"></span>
                SERVICES
              </Link>
              
              <Link 
                href="/case-studies" 
                className="flex items-center gap-4 text-white text-4xl lg:text-5xl font-bold hover:text-orange-500 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-1 bg-orange-500 group-hover:w-16 transition-all duration-300"></span>
                CASE STUDIES
              </Link>
              
              <Link 
                href="/career" 
                className="flex items-center gap-4 text-white text-4xl lg:text-5xl font-bold hover:text-orange-500 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-1 bg-orange-500 group-hover:w-16 transition-all duration-300"></span>
                CAREER
              </Link>
              
              <Link 
                href="/blogs" 
                className="flex items-center gap-4 text-white text-4xl lg:text-5xl font-bold hover:text-orange-500 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-1 bg-orange-500 group-hover:w-16 transition-all duration-300"></span>
                BLOGS
              </Link>
              
              <Link 
                href="/contact" 
                className="flex items-center gap-4 text-white text-4xl lg:text-5xl font-bold hover:text-orange-500 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-1 bg-orange-500 group-hover:w-16 transition-all duration-300"></span>
                CONTACT US
              </Link>
            </nav>
          </div>

          {/* Right Side - Contact Info */}
          <div className="hidden lg:flex w-1/2 p-12 flex-col justify-center space-y-12">
            {/* Visit Our Office */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Visit Our Office</h3>
              <p className="text-gray-400 mb-3">
                The Residences, Boulevard Street, Next to Burj Khalifa, Downtown, Dubai, UAE
              </p>
              <p className="text-gray-400">
                1805, Haware Infotech Park, Vashi, Navi Mumbai - 400703
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Contact Us</h3>
              <a href="tel:+971561182686" className="block text-gray-400 hover:text-orange-500 transition-colors mb-2">
                +971 56 118 2686
              </a>
              <a href="tel:+919004480375" className="block text-gray-400 hover:text-orange-500 transition-colors">
                +91-9004480375
              </a>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Add your social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      </div>
    </nav>
  );
};
