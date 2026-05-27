import { useState, useEffect } from 'react';
import { Menu, X, Landmark, GraduationCap, Award, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
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

  const navLinks = [
    { label: 'Overview', id: 'hero' },
    { label: 'Placements', id: 'placements' },
    { label: 'Programs', id: 'programs' },
    { label: 'Why AMC', id: 'why-amc' },
    { label: 'Student Work', id: 'student-work' },
    { label: 'Campus Life', id: 'campus-life' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/80 py-3' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Brand */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center cursor-pointer group"
            id="nav-logo"
          >
            <img 
              src="https://i.postimg.cc/jSp3qGDG/institute-png-01-1.png" 
              alt="AMC Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3.5 py-2 text-sm font-medium text-[#161D4A]/80 hover:text-[#161D4A] transition-colors duration-200 cursor-pointer rounded-md hover:bg-gray-100/70"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('cta-form')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#FED304] hover:bg-[#FED304]/90 text-[#161D4A] rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FED304]/50 cursor-pointer"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#161D4A] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-md animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-[#161D4A]/80 hover:bg-gray-50 hover:text-[#161D4A] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 pb-2 px-4">
              <button
                onClick={() => scrollToSection('cta-form')}
                className="w-full text-center px-4 py-3 text-sm font-bold uppercase tracking-wider bg-[#FED304] text-[#161D4A] rounded-lg shadow-md hover:bg-[#FED304]/95 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
