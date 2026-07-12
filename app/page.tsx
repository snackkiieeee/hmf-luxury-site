"use client";

import React, { useState, useEffect } from "react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  CheckCircle,
  Star,
  User,
  Calendar,
  Home,
  ChevronRight,
  Play,
  X // Added the X icon for the modal
} from "lucide-react";

// --- Custom Icons ---
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const IG_LINKS = [
  "https://www.instagram.com/hmfinteriordesigner/reel/DaX-R5Yh-EN/",
  "https://www.instagram.com/hmfinteriordesigner/reel/DZ3GnqQTPiV/",
  "https://www.instagram.com/hmfinteriordesigner/reel/DZpxBvKBs9m/",
  "https://www.instagram.com/hmfinteriordesigner/reel/DZP1oUkB8te/"
];

const services = [
  "Residential Interiors",
  "Commercial Interiors",
  "Office Interior",
  "Turnkey Execution",
  "Modular Kitchen",
  "False Ceiling"
];

const processSteps = [
  { num: "1", title: "Meet Expert", desc: "Contact us: Let's get acquainted. The further we learn about you, the better we can design your home. Get free discussion and personalised designs." },
  { num: "2", title: "Book HMF", desc: "Pay booking amount to seal the deal. Once you're satisfied with the ongoing project designs, pay the advance to book us and finalize the concept." },
  { num: "3", title: "Execution Begins", desc: "Kick off Launch: Collection of raw materials & manpower to start the procedure. Designing & Site Visits ensure timely completion." },
  { num: "4", title: "Finalize & Move in", desc: "Modular Furniture installation. Final Payment & Move in! Pay 100% amount and get possession of your dream space." },
];

const testimonials = [
  { name: "Rahul Verma", time: "2 months ago", text: "HMF transformed our bare apartment into a luxurious haven. Their attention to detail in the modular kitchen and false ceiling was absolutely impeccable." },
  { name: "Priya Sharma", time: "5 months ago", text: "Professional, punctual, and incredibly talented. They understood our vision for a modern minimalist living room and executed it flawlessly." },
  { name: "Amit Desai", time: "1 year ago", text: "The quality of materials and the craftsmanship is unmatched. Our office interior now perfectly reflects our brand's premium identity." }
];

export default function SimpleInteriorDesign() {
  // --- Form & Modal States ---
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls the popup form

  // --- Background Slider Logic ---
  const backgrounds = [
  "/hero-bg.png",
  "/bg-1.png",
  "/bg-3.png" 
];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000); // Swaps image every 4 seconds
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // --- Form Submit Logic (Untouched) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "41b6096a-a31e-49b4-92e5-5ad5844a93e5",
          subject: "New Lead from HMF Website!",
          from_name: formData.name,
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-800 font-sans relative scroll-smooth">
      
      {/* Sticky Floating Sidebar (Desktop) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 hidden md:flex">
        <button onClick={() => setIsModalOpen(true)} className="bg-[#2A2A2A] border-none text-white p-3 rounded-l-md flex items-center gap-2 cursor-pointer hover:bg-black transition-colors" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <Mail size={16} className="rotate-90" />
          <span className="text-sm tracking-wider py-2">Contact Us</span>
        </button>
        <a href="tel:+917088425857" className="bg-gray-500 text-white p-3 rounded-l-md hover:bg-gray-600 flex justify-center transition-colors">
          <Phone size={20} />
        </a>
        <a href="https://wa.me/917088425857" target="_blank" rel="noreferrer" className="bg-green-600 text-white p-3 rounded-l-md hover:bg-green-500 flex justify-center transition-colors">
          <MessageCircle size={20} />
        </a>
      </div>

      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 text-sm py-2 px-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <a href="tel:+917088425857" className="flex items-center gap-2 hover:text-[#A6937B] transition-colors"><Phone size={14} className="text-[#A6937B]" /> +91 7088425857</a>
          <a href="mailto:hamsarkhan32@gmail.com" className="flex items-center gap-2 hover:text-[#A6937B] transition-colors"><Mail size={14} className="text-[#A6937B]" /> hamsarkhan32@gmail.com</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white sticky top-0 z-40 shadow-sm py-3 px-6 flex justify-between items-center h-20">
        <div className="h-full flex items-center">
          <img src="/logo.png" alt="HMF Interior Designer" className="h-16 object-contain" />
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-700 uppercase text-sm tracking-wide items-center">
          <a href="#" className="hover:text-[#A6937B] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#A6937B] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#A6937B] transition-colors">Services</a>
          <button onClick={() => setIsModalOpen(true)} className="hover:text-[#A6937B] transition-colors uppercase">Contact Us</button>
        </div>
      </nav>

      {/* Hero Section with Slider */}
<section className="relative h-[600px] md:h-[700px] w-full overflow-hidden flex items-center justify-center bg-black">
  
  {/* Animated Backgrounds */}
  <div className="absolute inset-0 z-0 w-full h-full">
    {backgrounds.map((bg, index) => (
      <img
        key={index}
        src={bg}
        alt="Background"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          index === currentBg ? "opacity-100" : "opacity-0"
        }`}
        onError={(e) => {
          // If an image fails to load, hide it so the next one can show
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    ))}
    {/* Dark overlay to make text readable */}
    <div className="absolute inset-0 bg-black/50 z-10"></div>
  </div>
  
  {/* Hero CTA Content */}
  <div className="container mx-auto px-6 relative z-20 flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
      Design That Speaks <br/> <span className="text-[#A6937B]">Your Style</span>
    </h1>
    <button 
      onClick={() => setIsModalOpen(true)}
      className="bg-[#A6937B] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#8B7A63] transition-colors rounded shadow-xl"
    >
      Get a Free Quote
    </button>
  </div>
</section>

      {/* Feature Highlights (Overlapping Hero) */}
      <div className="container mx-auto px-6 relative z-20 -mt-16 hidden md:block">
        <div className="bg-white shadow-xl rounded-lg flex divide-x divide-gray-100 border border-gray-100 overflow-hidden">
          <div className="flex-1 p-8 flex items-center justify-center gap-5 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <User size={36} className="text-[#A6937B]" strokeWidth={1.5} />
            <span className="font-bold text-[#2A2A2A] tracking-wide">Avail Free<br/>Consultation</span>
          </div>
          <div className="flex-1 p-8 flex items-center justify-center gap-5 hover:bg-gray-50 transition-colors">
            <Calendar size={36} className="text-[#A6937B]" strokeWidth={1.5} />
            <span className="font-bold text-[#2A2A2A] tracking-wide">Exclusive 10 Year<br/>Warranty</span>
          </div>
          <div className="flex-1 p-8 flex items-center justify-center gap-5 hover:bg-gray-50 transition-colors">
            <Home size={36} className="text-[#A6937B]" strokeWidth={1.5} />
            <span className="font-bold text-[#2A2A2A] tracking-wide">1 Year Free<br/>Maintenance</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#A6937B] translate-x-4 translate-y-4 rounded-lg"></div>
              <img src="/hero-bg.png" alt="Interior Design" className="w-full h-auto shadow-lg relative z-10 rounded-lg object-cover aspect-[4/3]" />
            </div>
            <div>
              <h4 className="text-[#A6937B] font-bold text-sm uppercase tracking-widest mb-3">Welcome to HMF Interiors</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mb-6 leading-tight">Best Interior Designer in <br/> Delhi & NCR</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                HMF Interior Designer is a leading interior design company in New Delhi. In terms of efficiency and effectiveness, we are among the best when completing interior and architecture projects for residential and commercial spaces.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We provide a full-service experience, specializing in luxury interior design, modular kitchens, false ceilings, and bespoke home decor. Our expertise ensures a seamless transition from concept to final handover.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="inline-block mt-8 border-2 border-[#2A2A2A] text-[#2A2A2A] px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#2A2A2A] hover:text-white transition-colors rounded">
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-16">Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg group">
                <CheckCircle className="text-[#A6937B] w-14 h-14 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-3">{service}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Professional and customized solutions tailored perfectly to meet your unique lifestyle and requirements.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-16">The <span className="text-[#A6937B]">Process</span> We Follow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl relative overflow-hidden group hover:border-[#A6937B]/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F9F9F9] rounded-bl-full -z-10 group-hover:bg-[#A6937B]/5 transition-colors"></div>
                <div className="text-5xl font-light text-[#A6937B]/30 mb-6 border-b border-gray-100 pb-4 group-hover:text-[#A6937B] transition-colors">{step.num}</div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-24 bg-[#F9F9F9] border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-2">What Our Clients Have To Say</h2>
          <div className="mb-16">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3 mt-8 text-[#2A2A2A]">Excellent</h3>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={28} className="fill-[#FBBC05] text-[#FBBC05]" />)}
            </div>
            <p className="text-sm text-gray-500 mb-4">Based on Google reviews</p>
            <div className="flex justify-center">
              <GoogleIcon />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-left hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2A2A2A]">{review.name}</h4>
                      <span className="text-xs text-gray-500">{review.time}</span>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section (Linked Reels) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-16">We Are On Instagram</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {IG_LINKS.map((link, index) => (
              <a href={link} target="_blank" rel="noreferrer" key={index} className="border border-gray-200 rounded-lg overflow-hidden relative group block hover:shadow-xl transition-all duration-300">
                <div className="bg-[#2A2A2A] h-72 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                  <img src="/hero-bg.png" alt="Instagram Reel" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 blur-[2px]" />
                  
                  <div className="absolute z-20 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-md border border-white/30 mb-3 group-hover:bg-[#A6937B] group-hover:border-[#A6937B] transition-colors duration-300">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide shadow-black drop-shadow-md">Watch Reel</span>
                  </div>
                </div>
                <div className="p-4 bg-white text-left flex items-center justify-between">
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">View on Instagram</span>
                  <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-20 bg-[#F9F9F9] border-t border-gray-200 text-center">
        <h2 className="text-3xl text-[#2A2A2A] font-serif">Get a free quote for your project. <button onClick={() => setIsModalOpen(true)} className="text-[#A6937B] hover:underline font-bold">Click here.</button></h2>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#2A2A2A] text-white pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-sm">
            <div>
              <img src="/logo.png" alt="HMF Interiors" className="h-12 mb-6 brightness-0 invert opacity-90" />
              <p className="leading-relaxed text-gray-400">
                HMF Interior Designer, a leading interior design company, is renowned for its exceptional residential and commercial designs. We have successfully completed numerous projects, leaving a trail of satisfied clients.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs">Quick Links</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="flex items-center gap-2 hover:text-[#A6937B] hover:translate-x-1 transition-all"><ChevronRight size={14}/> Home</a></li>
                <li><a href="#about" className="flex items-center gap-2 hover:text-[#A6937B] hover:translate-x-1 transition-all"><ChevronRight size={14}/> About us</a></li>
                <li><button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 hover:text-[#A6937B] hover:translate-x-1 transition-all"><ChevronRight size={14}/> Contact Us</button></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-[#A6937B] hover:translate-x-1 transition-all"><ChevronRight size={14}/> Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs">Services We Offer</h3>
              <ul className="space-y-4 text-gray-400">
                {services.slice(0,4).map((service, i) => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight size={14}/> {service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs">Contact us</h3>
              <ul className="space-y-5 text-gray-400">
                <li className="flex items-start gap-4">
                  <Phone size={18} className="mt-1 shrink-0 text-[#A6937B]" />
                  <a href="tel:+917088425857" className="hover:text-white transition-colors">+91 7088425857</a>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={18} className="mt-1 shrink-0 text-[#A6937B]" />
                  <a href="mailto:hamsarkhan32@gmail.com" className="hover:text-white transition-colors">hamsarkhan32@gmail.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="mt-1 shrink-0 text-[#A6937B]" />
                  <span className="leading-relaxed">Block C, Devli, Sangam Vihar<br/>New Delhi, Delhi 110080</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} HMF Interiors. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* --- FLOATING MODAL WITH 'X' BUTTON --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border-t-4 border-[#A6937B] animate-in fade-in zoom-in duration-200">
            
            {/* The X Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-bold mb-6 text-[#2A2A2A] border-b border-gray-100 pb-4">Fill In Your Query</h3>
            
            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-800">Query Received!</h4>
                <p className="text-sm text-gray-500 mt-2">Our design experts will contact you shortly.</p>
                <button onClick={() => setSubmitStatus("idle")} className="mt-6 text-[#A6937B] underline text-sm">Send another query</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name*" 
                  required
                  value={formData.name}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#A6937B] focus:ring-1 focus:ring-[#A6937B]"
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="Phone*" 
                  required
                  value={formData.phone}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#A6937B] focus:ring-1 focus:ring-[#A6937B]"
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email*" 
                  required
                  value={formData.email}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#A6937B] focus:ring-1 focus:ring-[#A6937B]"
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <textarea 
                  placeholder="Message*" 
                  required
                  rows={3}
                  value={formData.message}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#A6937B] focus:ring-1 focus:ring-[#A6937B] resize-none"
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#A6937B] text-white font-bold uppercase tracking-wide py-3 rounded hover:bg-[#8B7A63] transition-colors disabled:opacity-70 flex justify-center items-center h-12"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Submit"
                  )}
                </button>
                {submitStatus === "error" && (
                  <p className="text-red-500 text-xs text-center mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}