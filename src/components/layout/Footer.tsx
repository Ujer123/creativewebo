import Link from 'next/link';
import Image from 'next/image';
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";


export const Footer = () => {
  return (
    <footer className="flex items-center mt-10 lg:mt-0">
      <div className="border-s-[#f15e314d] border-r-[#f15e314d] md:border border-b-[#f15e314d] lg:mx-10 w-full mb-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="lg:flex gap-12 space-y-6">
          {/* Column 1: Company Info */}
          <div className='lg:w-2/6 md:w-full animate-[fadeInUp_0.8s_ease-out_forwards] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]'>
            <Link href="/" className="flex items-center mb-6">
              <Image
                            src="https://www.creativewebo.com/assets/images/SVG/logo.svg"
                            width={180}
                            height={150}
                            alt="Creative Webo"
                          />
            </Link>
            <p className="subtitle">
              CreativeWebo is a Mumbai based digital agency. We are equipped with cutting-edge technologies to empower businesses online. Our solutions ensure a comprehensive digital transformation of your brand. We use multiple channels are proven strategies to provide you with the best in class digital solutions
            </p>
            {/* Social icons here */}
          </div>

          {/* Column 2: Quick Links */}
          <div className='lg:w-1/6 w-full animate-[fadeInUp_0.8s_ease-out_0.15s_forwards] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]'>
            <h3 className="paragraph">Quick Links</h3>
            <ul className="space-y-3 mt-6">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/solutions" className="footer-link">Solutions</Link></li>
              <li><Link href="/career" className="footer-link">Career</Link></li>
              <li><Link href="/case-studies" className="footer-link">Case Studies</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link href="/sitemap" className="footer-link">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div className='lg:w-2/6 w-full animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]'>
            <div>
            <h3 className="paragraph">Dubai</h3>
            <ul className="space-y-3 mt-6">
              <li className='flex'><Link href="tel:+971 56 118 2686" className="footer-link gap-1"><IoCallOutline size={16} />+971 56 118 2686</Link></li>
              <li><Link href="mailto:pavan.tolani@creativewebo.com" className="footer-link gap-1"><FaRegEnvelope size={16}/>pavan.tolani@creativewebo.com</Link></li>
              <li><Link href="/" className="footer-link gap-1"><IoLocationOutline size={20}/>The Residences, Boulevard Street, Next to Burj Khalifa, Downtown, Dubai, UAE</Link></li>
            </ul>
          </div>
            <div className='mt-6'>
            <h3 className="paragraph">Mumbai</h3>
            <ul className="space-y-3 mt-6">
              <li className='flex'><Link href="tel:+919004480375" className="footer-link gap-1"><IoCallOutline size={16} />+919004480375</Link></li>
              <li><Link href="mailto:info@creativewebo.com" className="footer-link gap-1"><FaRegEnvelope size={16}/>info@creativewebo.com</Link></li>
              <li><Link href="/" className="footer-link gap-1"><IoLocationOutline size={20}/>1805, Haware Infotech Park, Vashi, Navi Mumbai - 400703</Link></li>
            </ul>
          </div>
          </div>

          <div className="animate-[fadeInUp_0.8s_ease-out_0.45s_forwards] [animation-timeline:view()] [animation-range:entry_0%_cover_30%]">
            <h3 className="paragraph">Services</h3>
            <ul className="space-y-3 mt-6">
              <li><Link href="#" className="footer-link">Website Design And Development</Link></li>
              <li><Link href="#" className="footer-link">Software Development</Link></li>
              <li><Link href="#" className="footer-link">Mobile app Development</Link></li>
              <li><Link href="#" className="footer-link">Android app Development</Link></li>
              <li><Link href="#" className="footer-link">We Application Development</Link></li>
              <li><Link href="#" className="footer-link">E Commerce Website Development</Link></li>
              <li><Link href="#" className="footer-link">Ui Ux Design Company Dubai</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#f15e314d] pb-2 pt-3">
        <p className="footer-copy text-center">
          © 2023 CreativeWebo Private Limited. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};
