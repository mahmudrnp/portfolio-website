import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, MapPin, Globe, 
  Briefcase, GraduationCap, Award, CheckCircle2, 
  ExternalLink, ArrowRight, MonitorSmartphone, 
  TrendingUp, PenTool, LayoutTemplate, Cpu, Megaphone
} from 'lucide-react';

const translations = {
  en: {
    nav: {
      about: 'About',
      expertise: 'Expertise',
      experience: 'Experience',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    hero: {
      available: 'Available for new opportunities',
      hi: "Hi, I'm Abdullah",
      nameHighlight: "Al Mahmud.",
      subtitle: "E-Commerce Entrepreneur & Digital Marketing Specialist. I build brands, optimize digital operations, and leverage technology to drive online sales.",
      viewWork: "View My Work",
      contactMe: "Contact Me"
    },
    about: {
      title: "Professional Summary",
      p1: "Forward-thinking entrepreneur and certified digital marketing professional with a strong foundation in business studies. Currently launching ",
      p1bold: "Rajokiyo",
      p1end: ", a specialized e-commerce brand focusing on personalized home decor and gifts.",
      p2: "Adept at leveraging modern digital tools, including AI-driven content strategies, Meta/Google Ads, and WordPress development, to build a brand presence from the ground up. Passionate about utilizing technology to drive online sales, optimize digital operations, and deliver exceptional customer experiences in the e-commerce sector.",
      location: "Based in Rangpur, Bangladesh",
      bullet1: "Full-Stack Digital Marketing Certified",
      bullet2: "Specialized in AI Content Strategy",
      bullet3: "WordPress E-Commerce Developer"
    },
    expertise: {
      title: "Core Competencies",
      cards: [
        { title: 'E-Commerce Strategy', desc: 'Planning & operations for online retail.' },
        { title: 'Digital Marketing', desc: 'Full-stack marketing & Meta/Google Ads.' },
        { title: 'AI & Content', desc: 'AI content strategy & generation.' },
        { title: 'Web Management', desc: 'WordPress site setup & management.' },
        { title: 'Brand Building', desc: 'Positioning and brand identity growth.' },
        { title: 'Social Media', desc: 'Community management & engagement.' },
        { title: 'Visual Design', desc: 'Creative asset development via Canva.' },
        { title: 'Ad Optimization', desc: 'Audience targeting & campaign ROI.' }
      ]
    },
    experience: {
      title: "Entrepreneurial Experience",
      role: "Co-Founder & Head of Digital Marketing",
      location: "Rangpur, Bangladesh",
      present: "Present",
      description: "E-commerce startup focused on personalized home decor and custom gifting solutions.",
      bullets: [
        { strong: "Brand Launch: ", text: "Spearheading the foundational setup and strategic launch of the platform." },
        { strong: "Campaigns: ", text: "Developing marketing frameworks and planning Meta/Facebook & Google Ads for acquisition." },
        { strong: "Web Dev: ", text: "Managing frontend design and functionality via WordPress for a seamless user journey." },
        { strong: "AI Integration: ", text: "Leveraging AI tools for market research and product description generation." },
        { strong: "Creative Assets: ", text: "Designing social media graphics and banners using Canva." }
      ]
    },
    portfolio: {
      title: "Key Digital Initiatives",
      subtitle: "Highlighting core projects and digital operations executed during the foundational launch of Rajokiyo.",
      projects: [
        {
          title: "E-Commerce Platform Setup",
          desc: "End-to-end development of the frontend and functionality for rajokiyobd.com using WordPress, ensuring secure transactions and a seamless user experience.",
          tags: ["WordPress", "E-Commerce"]
        },
        {
          title: "Performance Marketing",
          desc: "Comprehensive campaign management utilizing Meta (Facebook) and Google Ads. Focused on precise audience targeting to drive initial brand awareness.",
          tags: ["Meta Ads", "Google Ads"]
        },
        {
          title: "AI Content Integration",
          desc: "Implemented advanced AI tools for dynamic content generation, market research, and writing optimized product descriptions at scale.",
          tags: ["Prompt Engineering", "Copywriting"]
        }
      ]
    },
    education: {
      title: "Education",
      degree: "Diploma in Business Studies",
      school: "Rangpur Commerce College, Rangpur",
      year: "Graduated in 2006",
      certTitle: "Certifications",
      certs: [
        { name: "Full Stack Digital Marketing", org: "SR Dream IT" },
        { name: "AI Expert Certification", org: "Learning Bangladesh" },
        { name: "WordPress Management", org: "Learning Bangladesh" }
      ]
    },
    skills: {
      title: "Technical Skills",
      digitalAdv: "Digital Advertising",
      webContent: "Web & Content",
      langTitle: "Languages",
      native: "Native / Bilingual",
      working: "Professional Working"
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Interested in digital marketing strategies, e-commerce collaboration, or networking? Feel free to reach out.",
      rights: "All rights reserved."
    }
  },
  bn: {
    nav: {
      about: 'সম্পর্কে',
      expertise: 'দক্ষতা',
      experience: 'অভিজ্ঞতা',
      portfolio: 'পোর্টফোলিও',
      contact: 'যোগাযোগ'
    },
    hero: {
      available: 'নতুন কাজের সুযোগের জন্য উন্মুক্ত',
      hi: "হ্যালো, আমি আব্দুল্লাহ",
      nameHighlight: "আল মাহমুদ।",
      subtitle: "ই-কমার্স উদ্যোক্তা এবং ডিজিটাল মার্কেটিং স্পেশালিস্ট। আমি ব্র্যান্ড তৈরি করি, ডিজিটাল অপারেশন অপ্টিমাইজ করি এবং অনলাইনে বিক্রি বাড়াতে প্রযুক্তির ব্যবহার করি।",
      viewWork: "আমার কাজ দেখুন",
      contactMe: "যোগাযোগ করুন"
    },
    about: {
      title: "প্রফেশনাল সামারি",
      p1: "দূরদর্শী উদ্যোক্তা এবং সার্টিফাইড ডিজিটাল মার্কেটিং প্রফেশনাল, যার বিজনেস স্টাডিজে শক্ত ভিত্তি রয়েছে। বর্তমানে ব্যক্তিগতকৃত হোম ডেকোর এবং উপহার সামগ্রী নিয়ে ",
      p1bold: "রাজকীয় (Rajokiyo)",
      p1end: " নামের একটি ই-কমার্স ব্র্যান্ড চালু করছি।",
      p2: "এআই-চালিত কন্টেন্ট স্ট্র্যাটেজি, মেটা/গুগল অ্যাডস এবং ওয়ার্ডপ্রেস ডেভেলপমেন্ট সহ আধুনিক ডিজিটাল টুলের ব্যবহারে পারদর্শী, যা একটি ব্র্যান্ডকে শূন্য থেকে দাঁড় করাতে সাহায্য করে। ই-কমার্স সেক্টরে অনলাইন সেলস বৃদ্ধি, ডিজিটাল অপারেশন অপ্টিমাইজেশন এবং সেরা কাস্টমার অভিজ্ঞতা প্রদানে প্রযুক্তি ব্যবহারে আমি অত্যন্ত আগ্রহী।",
      location: "রংপুর, বাংলাদেশ ভিত্তিক",
      bullet1: "ফুল-স্ট্যাক ডিজিটাল মার্কেটিং সার্টিফাইড",
      bullet2: "এআই কন্টেন্ট স্ট্র্যাটেজিতে বিশেষজ্ঞ",
      bullet3: "ওয়ার্ডপ্রেস ই-কমার্স ডেভেলপার"
    },
    expertise: {
      title: "মূল দক্ষতাসমূহ",
      cards: [
        { title: 'ই-কমার্স স্ট্র্যাটেজি', desc: 'অনলাইন রিটেইলের জন্য পরিকল্পনা ও পরিচালনা।' },
        { title: 'ডিজিটাল মার্কেটিং', desc: 'ফুল-স্ট্যাক মার্কেটিং এবং মেটা/গুগল অ্যাডস।' },
        { title: 'এআই ও কন্টেন্ট', desc: 'এআই কন্টেন্ট স্ট্র্যাটেজি এবং জেনারেশন।' },
        { title: 'ওয়েব ম্যানেজমেন্ট', desc: 'ওয়ার্ডপ্রেস সাইট সেটআপ এবং ম্যানেজমেন্ট।' },
        { title: 'ব্র্যান্ড বিল্ডিং', desc: 'পজিশনিং এবং ব্র্যান্ড আইডেন্টিটি বৃদ্ধি।' },
        { title: 'সোশ্যাল মিডিয়া', desc: 'কমিউনিটি ম্যানেজমেন্ট এবং এনগেজমেন্ট।' },
        { title: 'ভিজ্যুয়াল ডিজাইন', desc: 'ক্যানভার মাধ্যমে ক্রিয়েটিভ অ্যাসেট তৈরি।' },
        { title: 'অ্যাড অপ্টিমাইজেশন', desc: 'অডিয়েন্স টার্গেটিং এবং ক্যাম্পেইন আরওআই (ROI)।' }
      ]
    },
    experience: {
      title: "উদ্যোক্তা হিসেবে অভিজ্ঞতা",
      role: "সহ-প্রতিষ্ঠাতা এবং হেড অফ ডিজিটাল মার্কেটিং",
      location: "রংপুর, বাংলাদেশ",
      present: "বর্তমান",
      description: "ব্যক্তিগতকৃত হোম ডেকোর এবং কাস্টম উপহার সমাধানের উপর নিবদ্ধ ই-কমার্স স্টার্টআপ।",
      bullets: [
        { strong: "ব্র্যান্ড লঞ্চ: ", text: "প্ল্যাটফর্মের প্রাথমিক সেটআপ এবং কৌশলগত লঞ্চের নেতৃত্ব দেওয়া।" },
        { strong: "ক্যাম্পেইন: ", text: "গ্রাহক অর্জনের জন্য মার্কেটিং ফ্রেমওয়ার্ক তৈরি এবং মেটা/ফেসবুক ও গুগল অ্যাডস পরিকল্পনা।" },
        { strong: "ওয়েব ডেভলপমেন্ট: ", text: "সহজ ইউজার অভিজ্ঞতার জন্য ওয়ার্ডপ্রেসের মাধ্যমে ফ্রন্টএন্ড ডিজাইন ও কার্যকারিতা পরিচালনা।" },
        { strong: "এআই ইন্টিগ্রেশন: ", text: "মার্কেট রিসার্চ এবং প্রোডাক্ট ডেসক্রিপশন তৈরিতে এআই টুলের ব্যবহার।" },
        { strong: "ক্রিয়েটিভ অ্যাসেট: ", text: "ক্যানভা ব্যবহার করে সোশ্যাল মিডিয়া গ্রাফিক্স এবং ব্যানার ডিজাইন।" }
      ]
    },
    portfolio: {
      title: "মূল ডিজিটাল উদ্যোগসমূহ",
      subtitle: "'রাজকীয়'-এর সূচনালগ্নে বাস্তবায়িত মূল প্রজেক্ট এবং ডিজিটাল অপারেশনগুলোর হাইলাইট।",
      projects: [
        {
          title: "ই-কমার্স প্ল্যাটফর্ম সেটআপ",
          desc: "ওয়ার্ডপ্রেস ব্যবহার করে rajokiyobd.com এর ফ্রন্টএন্ড এবং কার্যকারিতার সম্পূর্ণ ডেভেলপমেন্ট, সুরক্ষিত লেনদেন এবং নিরবচ্ছিন্ন ব্যবহারকারীর অভিজ্ঞতা নিশ্চিত করা।",
          tags: ["WordPress", "E-Commerce"]
        },
        {
          title: "পারফরম্যান্স মার্কেটিং",
          desc: "মেটা (ফেসবুক) এবং গুগল অ্যাডস ব্যবহার করে বিস্তৃত ক্যাম্পেইন পরিচালনা। প্রাথমিক ব্র্যান্ড পরিচিতি বাড়াতে সঠিক অডিয়েন্স টার্গেটিংয়ের উপর ফোকাস।",
          tags: ["Meta Ads", "Google Ads"]
        },
        {
          title: "এআই কন্টেন্ট ইন্টিগ্রেশন",
          desc: "ডায়নামিক কন্টেন্ট তৈরি, বাজার গবেষণা এবং অপ্টিমাইজড প্রোডাক্ট ডেসক্রিপশন স্কেলে লেখার জন্য উন্নত এআই সরঞ্জাম বাস্তবায়ন।",
          tags: ["Prompt Engineering", "Copywriting"]
        }
      ]
    },
    education: {
      title: "শিক্ষা",
      degree: "ডিপ্লোমা ইন বিজনেস স্টাডিজ",
      school: "রংপুর কমার্স কলেজ, রংপুর",
      year: "২০০৬ সালে স্নাতক",
      certTitle: "সার্টিফিকেশন",
      certs: [
        { name: "ফুল স্ট্যাক ডিজিটাল মার্কেটিং", org: "এসআর ড্রিম আইটি (SR Dream IT)" },
        { name: "এআই এক্সপার্ট সার্টিফিকেশন", org: "লার্নিং বাংলাদেশ" },
        { name: "ওয়ার্ডপ্রেস ম্যানেজমেন্ট", org: "লার্নিং বাংলাদেশ" }
      ]
    },
    skills: {
      title: "কারিগরি দক্ষতাসমূহ",
      digitalAdv: "ডিজিটাল অ্যাডভারটাইজিং",
      webContent: "ওয়েব ও কন্টেন্ট",
      langTitle: "ভাষাসমূহ",
      native: "মাতৃভাষা / দ্বিভাষিক",
      working: "প্রফেশনাল ওয়ার্কিং"
    },
    contact: {
      title: "যোগাযোগ করুন",
      subtitle: "ডিজিটাল মার্কেটিং কৌশল, ই-কমার্স পার্টনারশিপ বা নেটওয়ার্কিংয়ে আগ্রহী? নির্দ্বিধায় যোগাযোগ করুন।",
      rights: "সর্বস্বত্ব সংরক্ষিত।"
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'expertise', label: t.nav.expertise },
    { id: 'experience', label: t.nav.experience },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-[#1A1C23] selection:bg-[#C9A227]/20 selection:text-[#1A1C23]">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm py-3 border-b border-[#C5A059]/10' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-[#C9A227]">
  MAHMUD
</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 text-sm font-medium text-[#1A1C23]/70">
              {navItems.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-[#C9A227] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Language Toggle */}
            <div className="flex items-center bg-white border border-[#C5A059]/30 rounded-full p-1 shadow-sm">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${lang === 'en' ? 'bg-[#C9A227]/10 text-[#C9A227]' : 'text-[#1A1C23]/50 hover:text-[#1A1C23]'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('bn')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${lang === 'bn' ? 'bg-[#C9A227]/10 text-[#C9A227]' : 'text-[#1A1C23]/50 hover:text-[#1A1C23]'}`}
              >
                BN
              </button>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Mobile Language Toggle */}
             <div className="flex items-center bg-white border border-[#C5A059]/30 rounded-full p-0.5 shadow-sm">
              <button 
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-[10px] font-bold rounded-full transition-colors ${lang === 'en' ? 'bg-[#C9A227]/10 text-[#C9A227]' : 'text-[#1A1C23]/50'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('bn')}
                className={`px-2 py-1 text-[10px] font-bold rounded-full transition-colors ${lang === 'bn' ? 'bg-[#C9A227]/10 text-[#C9A227]' : 'text-[#1A1C23]/50'}`}
              >
                BN
              </button>
            </div>
            
            <button 
              className="text-[#1A1C23]/70"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 border-b border-[#C5A059]/20">
             {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="text-left font-medium text-[#1A1C23] hover:text-[#C9A227]"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

    {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] rounded-full text-sm font-medium border border-[#C9A227]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A227]"></span>
              </span>
              <span>{t.hero.available}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1C23] leading-tight">
              {t.hero.hi} <br/><span className="text-[#C9A227]">{t.hero.nameHighlight}</span>
            </h1>
            <p className="text-xl text-[#1A1C23]/70 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollToSection('portfolio')} className="px-6 py-3 bg-[#1A1C23] text-white font-medium rounded-lg hover:bg-[#1A1C23]/80 transition-all flex items-center gap-2 shadow-lg shadow-[#1A1C23]/10">
                {t.hero.viewWork} <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-white text-[#1A1C23] border border-[#C5A059]/30 font-medium rounded-lg hover:border-[#C9A227] hover:bg-[#C9A227]/5 transition-all">
                {t.hero.contactMe}
              </button>
            </div>
          </div>
          
 <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            {/* ছবির ফ্রেমের সাইজ (Aspect Ratio) পারফেক্ট করা হয়েছে */}
            <div className="relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF8F5]">
              <img 
                src="23356.png" 
                alt="Md Abdullah Al Mahmud" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1C23] mb-6">{t.about.title}</h2>
              <div className="w-20 h-1 bg-[#C9A227] rounded-full mb-8"></div>
              <p className="text-lg text-[#1A1C23]/70 leading-relaxed mb-6">
                {t.about.p1}
                <strong className="text-[#1A1C23]">{t.about.p1bold}</strong>
                {t.about.p1end}
              </p>
              <p className="text-lg text-[#1A1C23]/70 leading-relaxed">
                {t.about.p2}
              </p>
            </div>
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#C5A059]/20 shadow-sm">
              <h3 className="font-semibold text-[#1A1C23] mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-[#C9A227]"/> {t.about.location}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#C9A227] shrink-0 mt-0.5"/>
                  <span className="text-[#1A1C23]/80">{t.about.bullet1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#C9A227] shrink-0 mt-0.5"/>
                  <span className="text-[#1A1C23]/80">{t.about.bullet2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#C9A227] shrink-0 mt-0.5"/>
                  <span className="text-[#1A1C23]/80">{t.about.bullet3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A1C23] mb-4">{t.expertise.title}</h2>
            <div className="w-20 h-1 bg-[#C9A227] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp size={24}/>, data: t.expertise.cards[0] },
              { icon: <Megaphone size={24}/>, data: t.expertise.cards[1] },
              { icon: <Cpu size={24}/>, data: t.expertise.cards[2] },
              { icon: <LayoutTemplate size={24}/>, data: t.expertise.cards[3] },
              { icon: <Award size={24}/>, data: t.expertise.cards[4] },
              { icon: <Globe size={24}/>, data: t.expertise.cards[5] },
              { icon: <PenTool size={24}/>, data: t.expertise.cards[6] },
              { icon: <MonitorSmartphone size={24}/>, data: t.expertise.cards[7] }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#C5A059]/20 shadow-sm hover:shadow-md hover:border-[#C9A227]/50 transition-all">
                <div className="w-12 h-12 bg-[#C9A227]/10 text-[#C9A227] rounded-lg flex items-center justify-center mb-4 border border-[#C9A227]/20">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-[#1A1C23] mb-2">{skill.data.title}</h3>
                <p className="text-sm text-[#1A1C23]/60 leading-relaxed">{skill.data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1A1C23] mb-4">{t.experience.title}</h2>
            <div className="w-20 h-1 bg-[#C9A227] rounded-full"></div>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#C5A059]/20"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 w-full">
              {/* Desktop Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#C9A227] items-center justify-center z-10 shadow-md shadow-[#C9A227]/20"></div>
              
              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#C9A227] z-10 border-2 border-white shadow-sm"></div>
              <div className="md:hidden absolute -left-6 top-5 bottom-0 w-0.5 bg-[#C5A059]/20 z-0"></div>

              <div className="w-full md:w-5/12 mb-4 md:mb-0 text-left md:text-right pr-0 md:pr-8">
                <h3 className="text-2xl font-bold text-[#1A1C23]">{t.experience.role}</h3>
                <h4 className="text-lg text-[#C9A227] font-semibold mb-2">Rajokiyo</h4>
                <div className="flex items-center md:justify-end gap-2 text-[#1A1C23]/60 text-sm mb-4">
                  <MapPin size={16} /> {t.experience.location} | <span className="font-semibold text-[#1A1C23]">{t.experience.present}</span>
                </div>
                <p className="text-[#1A1C23]/70 mb-4">{t.experience.description}</p>
                <a href="https://rajokiyobd.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#C9A227] hover:text-[#C5A059] transition-colors">
                  rajokiyobd.com <ExternalLink size={14} />
                </a>
              </div>

              <div className="w-full md:w-5/12 pl-0 md:pl-8">
                <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#C5A059]/20 shadow-sm hover:shadow-md hover:border-[#C9A227]/40 transition-all">
                  <ul className="space-y-3">
                    {t.experience.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 shrink-0"></div>
                        <span className="text-[#1A1C23]/80 text-sm">
                          <strong className="text-[#1A1C23]">{bullet.strong}</strong>
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Key Projects */}
      <section id="portfolio" className="py-20 bg-[#1A1C23] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.portfolio.title}</h2>
            <div className="w-20 h-1 bg-[#C9A227] rounded-full"></div>
            <p className="mt-4 text-white/70 max-w-2xl">{t.portfolio.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <LayoutTemplate className="text-[#C9A227] mb-6" size={32} />, data: t.portfolio.projects[0] },
              { icon: <Megaphone className="text-[#C9A227] mb-6" size={32} />, data: t.portfolio.projects[1] },
              { icon: <Cpu className="text-[#C9A227] mb-6" size={32} />, data: t.portfolio.projects[2] }
            ].map((proj, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#C9A227]/80 hover:bg-white/10 transition-all flex flex-col h-full">
                {proj.icon}
                <h3 className="text-xl font-bold mb-3">{proj.data.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                  {proj.data.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.data.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-[#FAF8F5]/10 rounded text-xs font-medium text-white/90">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1C23] mb-6 flex items-center gap-3">
              <GraduationCap className="text-[#C9A227]" /> {t.education.title}
            </h2>
            <div className="bg-white p-6 rounded-xl border border-[#C5A059]/20 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1A1C23] text-lg">{t.education.degree}</h3>
              <p className="text-[#C9A227] font-semibold mb-2">{t.education.school}</p>
              <p className="text-[#1A1C23]/60 text-sm">{t.education.year}</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1C23] mb-6 flex items-center gap-3">
              <Award className="text-[#C9A227]" /> {t.education.certTitle}
            </h2>
            <div className="space-y-4">
              {t.education.certs.map((cert, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-[#C5A059]/20 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-bold text-[#1A1C23]">{cert.name}</h3>
                    <p className="text-[#1A1C23]/60 text-sm mt-1">{cert.org}</p>
                  </div>
                  <Award size={20} className="text-[#C9A227]/40" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Skills & Languages */}
      <section className="py-20 bg-white border-t border-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-bold text-[#1A1C23] mb-6">{t.skills.title}</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-[#1A1C23]/50 uppercase tracking-wider mb-3">{t.skills.digitalAdv}</h4>
                <div className="flex flex-wrap gap-2">
                  {['Meta Ads Manager', 'Google Ads', 'Campaign Optimization', 'Audience Targeting'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-[#FAF8F5] text-[#1A1C23] border border-[#C5A059]/20 rounded-lg text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#1A1C23]/50 uppercase tracking-wider mb-3">{t.skills.webContent}</h4>
                <div className="flex flex-wrap gap-2">
                  {['WordPress Development', 'E-Commerce Setup', 'Prompt Engineering', 'AI Copywriting', 'Canva Pro'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-[#FAF8F5] text-[#1A1C23] border border-[#C5A059]/20 rounded-lg text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A1C23] mb-6">{t.skills.langTitle}</h2>
            <div className="space-y-4">
              <div className="bg-[#FAF8F5] border border-[#C5A059]/20 p-4 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-[#1A1C23]">Bengali / বাংলা</span>
                <span className="text-sm font-medium text-[#1A1C23] bg-white border border-[#C5A059]/30 px-3 py-1 rounded">{t.skills.native}</span>
              </div>
              <div className="bg-[#FAF8F5] border border-[#C5A059]/20 p-4 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-[#1A1C23]">English / ইংরেজি</span>
                <span className="text-sm font-medium text-[#1A1C23] bg-white border border-[#C5A059]/30 px-3 py-1 rounded">{t.skills.working}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1A1C23] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-white/70 text-lg mb-12">
            {t.contact.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="mailto:rajokiyo.official@gmail.com" className="flex items-center justify-center gap-3 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-[#C9A227]">
              <Mail className="text-[#C9A227]" />
              <span className="font-medium text-white/90">rajokiyo.official@gmail.com</span>
            </a>
            <a href="tel:01728606567" className="flex items-center justify-center gap-3 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-[#C9A227]">
              <Phone className="text-[#C9A227]" />
              <span className="font-medium text-white/90">01728606567</span>
            </a>
            <div className="flex items-center justify-center gap-3 bg-white/5 p-6 rounded-2xl border border-white/10 md:col-span-2">
              <MapPin className="text-[#C9A227]" />
              <span className="font-medium text-white/90">{t.experience.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1C23] text-white/50 py-8 text-center text-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Md Abdullah Al Mahmud. {t.contact.rights}</p>
          <div className="flex gap-4">
             <a href="https://rajokiyobd.com" target="_blank" rel="noreferrer" className="hover:text-[#C9A227] transition-colors">RajokiyoBD.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;