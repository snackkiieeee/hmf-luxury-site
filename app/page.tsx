"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  Home as HomeIcon, 
  Briefcase, 
  Building, 
  PenTool,
  Star
} from "lucide-react";

export default function Home() {
  // --- STATES ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  // --- BACKGROUND SLIDESHOW DATA ---
  const backgrounds = [
    "/bg-1.png", 
    "/bg-2.png",
    "/bg-3.png"
  ];

  const services = [
    { title: "Residential Interiors", icon: <HomeIcon size={32} />, desc: "Transforming houses into dream homes with personalized, elegant designs." },
    { title: "Commercial Interiors", icon: <Briefcase size={32} />, desc: "Creating inspiring workspaces that boost productivity and reflect your brand." },
    { title: "Office Interior", icon: <Building size={32} />, desc: "Modern, ergonomic office layouts tailored for corporate excellence." },
    { title: "Turnkey Execution", icon: <PenTool size={32} />, desc: "End-to-end project management from conceptualization to final handover." },
  ];

  // --- EFFECTS ---
  // 1. Auto-scroll timer for background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // 2. Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col font-sans overflow-x-hidden">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="HMF Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className={`font-semibold tracking-wide hover:text-[#a89078] transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>HOME</a>
            <a href="#about" className={`font-semibold tracking-wide hover:text-[#a89078] transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>ABOUT</a>
            <a href="#services" className={`font-semibold tracking-wide hover:text-[#a89078] transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>SERVICES</a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#a89078] text-white px-6 py-2 rounded font-bold hover:bg-[#8e7a65] transition-colors"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-gray-800' : 'text-white'}>
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-semibold border-b pb-2">HOME</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-semibold border-b pb-2">ABOUT</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-semibold border-b pb-2">SERVICES</a>
            <button 
              onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
              className="bg-[#a89078] text-white px-6 py-3 rounded font-bold text-center w-full"
            >
              CONTACT US
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION WITH SLIDER --- */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        {/* Animated Background Images */}
        <div className="absolute inset-0 z-0 w-full h-full bg-black">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentBg ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${bg})` }}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-lg leading-tight">
            LUXURY DEFINED.<br/> <span className="text-[#a89078]">SPACES REFINED.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow leading-relaxed">
            HMF Interior Designer elevates ordinary spaces into extraordinary experiences. Exceptional residential and commercial interiors crafted to perfection.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#a89078] text-white px-10 py-4 rounded-md font-bold tracking-widest text-lg hover:bg-[#8e7a65] transition-all transform hover:scale-105 shadow-xl"
          >
            BOOK A CONSULTATION
          </button>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-[#a89078] font-bold tracking-widest mb-2 uppercase text-sm">About HMF Designs</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">We Build Experiences, Not Just Interiors.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              HMF Interior Designer is a premier interior design firm dedicated to creating sophisticated, functional, and deeply personal spaces. With years of industry expertise, we specialize in translating our clients' visions into stunning realities.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Whether it is a cozy residential haven or a dynamic corporate office, our approach combines innovative design aesthetics with flawless turnkey execution, ensuring a seamless journey from the first sketch to the final reveal.
            </p>
            <div className="flex space-x-8 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-4xl font-bold text-[#a89078]">150+</h3>
                <p className="text-gray-500 font-medium mt-1">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#a89078]">100%</h3>
                <p className="text-gray-500 font-medium mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
            {/* Fallback to one of the backgrounds if you don't have an about image yet */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-1.png')` }}></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#a89078] font-bold tracking-widest mb-2 uppercase text-sm">Our Expertise</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Services We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-[#a89078]/10 text-[#a89078] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#a89078] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 bg-[#222222] text-gray-300 py-16 px-8 md:px-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & About */}
          <div>
            <img 
              src="/logo.png" 
              alt="HMF Logo" 
              className="w-24 h-auto mb-6 bg-white p-1 rounded" 
            />
            <p className="text-sm leading-relaxed text-gray-400">
              HMF Interior Designer, a leading interior design company, is renowned for its exceptional residential and commercial designs. We have successfully completed numerous projects, leaving a trail of satisfied clients.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wider text-sm">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> Home</li>
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> About us</li>
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> Contact Us</li>
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wider text-sm">SERVICES WE OFFER</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> Residential Interiors</li>
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> Commercial Interiors</li>
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> Office Interior</li>
              <li className="flex items-center hover:text-white cursor-pointer transition-colors"><ChevronRight size={16} className="mr-2" /> Turnkey Execution</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wider text-sm">CONTACT US</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-[#a89078] mt-0.5 shrink-0" />
                <span>+91 7088425857</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-[#a89078] mt-0.5 shrink-0" />
                <span>hamsarkhan32@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-[#a89078] mt-0.5 shrink-0" />
                <span className="leading-relaxed">Block C, Devli, Sangam Vihar<br />New Delhi, Delhi 110080</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} HMF Interior Designer. All rights reserved.</p>
        </div>
      </footer>

      {/* --- QUERY MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="relative bg-white w-full max-w-md p-8 rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8 mt-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Talk</h2>
              <p className="text-gray-500 text-sm">Fill in your details and we will get back to you shortly.</p>
            </div>
            
            <form className="space-y-5 flex flex-col">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name*" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a89078] focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number*" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a89078] focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address*" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a89078] focus:border-transparent text-gray-800 placeholder-gray-400 transition-all"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project...*" 
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a89078] focus:border-transparent text-gray-800 placeholder-gray-400 resize-none transition-all"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#a89078] text-white font-bold tracking-widest py-4 rounded-lg hover:bg-[#8e7a65] transition-colors mt-2 shadow-lg hover:shadow-xl"
              >
                SUBMIT QUERY
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}