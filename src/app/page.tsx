import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/layout/AboutSection";
import { ServicesSection } from '@/components/layout/ServicesSection';
import {
  SoftwareDevelopmentIcon,
  CustomSoftwareIcon,
  MobileAppIcon,
} from '@/components/icons/ServiceIcons';
import { ContactFormSection } from "@/components/layout/ContactFormSection";
import { FAQSection } from "@/components/layout/FAQSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {

  const faqs = [
    {
      question: 'How Much Does A Website Cost? How Much For A Website?',
      answer:
        "Well, it depends. We follow a transparent pricing model, with rates being decided as per your requirements. We don't offer one-for-all services but business-specific solutions, so the prices can vary. If all you need is a small business functional website, the cost can range anywhere between $500 and $5,000, and more depending upon your requirements. So, get in touch with us to get a price quote now.",
    },
    {
      question: 'Do You Do Graphic Design, And Can You Make Me A Logo?',
      answer:
        'Yes, we offer comprehensive graphic design services including logo design, brand identity, marketing materials, and more. Our design team works closely with you to create visuals that align with your brand vision and business goals.',
    },
    {
      question: 'Can You Help Me With Digital Marketing?',
      answer:
        'Absolutely! We provide end-to-end digital marketing services including SEO, social media marketing, content marketing, PPC campaigns, and email marketing. Our strategies are tailored to increase your online visibility and drive meaningful engagement with your target audience.',
    },
    {
      question: 'Do You Make Custom Applications?',
      answer:
        'Yes, we specialize in developing custom applications tailored to your specific business needs. Whether you need a web application, mobile app, or enterprise software solution, our team has the expertise to build scalable and secure applications that streamline your operations.',
    },
    {
      question: "What Is Blockchain? What's The Main Use Of It In Web Applications?",
      answer:
        'Blockchain is a distributed ledger technology that ensures secure, transparent, and tamper-proof data storage. In web applications, it is primarily used for cryptocurrency transactions, smart contracts, supply chain management, and decentralized applications (dApps) that require high security and transparency.',
    },
    {
      question: 'Why Do Businesses Need An Online Presence?',
      answer:
        'An online presence is crucial in today\'s digital age as it helps businesses reach a wider audience, build credibility, engage with customers 24/7, and stay competitive. It enables you to showcase your products or services, gather customer feedback, and drive sales through multiple digital channels.',
    },
    {
      question: 'How Can You Help With ECommerce?',
      answer:
        'We offer comprehensive e-commerce solutions including store setup, payment gateway integration, inventory management, shopping cart development, and marketplace integration. We work with platforms like Shopify, WooCommerce, and custom solutions to create seamless online shopping experiences that drive conversions.',
    },
  ];

   const services = [
    {
      icon: <SoftwareDevelopmentIcon />,
      title: 'Software Development',
      description:
        'We develop robust, secure, and high-performing web applications to streamline operations.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',
    },
    {
      icon: <CustomSoftwareIcon />,
      title: 'Custom Software Development',
      description:
        'Our custom software solutions are designed to automate processes, improve productivity, and align with your unique business goals.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
    },
    {
      icon: <MobileAppIcon />,
      title: 'Mobile App Development',
      description:
        'Our intuitive and scalable mobile apps are designed to enhance user engagement and keep businesses at the forefront of digital innovation.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
    },
  ];

  return (
    <main>
      <Navbar />
      <HeroSection
        tagline="We blend"
        title="Elevating Digital Landscape with Creative Web Solutions, Design, Code & Innovation"
        ctaText="Get A Quotes"
        ctaLink="/contact"
      />
       <AboutSection
        title="About CreativeWebo"
        tagline="Digital solution partner"
        description="Based in Mumbai, we partner with ambitious startups and established enterprises to craft impactful digital experiences. From idea to execution, we blend creativity, technology, and creative web solutions to enhance engagement, boost conversions, and drive digital success."
        ctaText="Discover More Services"
        ctaLink="/services"
        imageUrl="https://www.creativewebo.com/assets/images/about-us-home.png" // Add your image path
        imageAlt="Creative digital solutions"
      />
       <ServicesSection
        sectionTitle="Transforming Ideas into Seamless Digital Solutions"
        sectionDescription="Empowering Mumbai’s brands with immersive digital experiences—crafted through innovative design, precision-driven code, and seamless functionality. Let’s build something extraordinary together."
        services={services}
        ctaText="Explore"
        ctaLink="/services"
      />
      <ContactFormSection/>
      <FAQSection title="Frequently Asked Questions" faqs={faqs} />
      <Footer/>
    </main>
  );
}
