import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenApply: () => void;
}

export default function Navbar({ onOpenApply }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Institutions", id: "institutions" },
    { label: "Programs", id: "programs" },
    { label: "Why AMC", id: "why-study" },
    { label: "Placements", id: "placements" },
    { label: "Admissions", id: "admissions" },
    { label: "Reviews", id: "voices" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-100 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-2.5 text-left select-none group"
            >
              <img
                src="https://i.postimg.cc/jSp3qGDG/institute-png-01-1.png"
                alt="AMC Group Bangalore"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5 bg-neutral-50 p-1 rounded-full border border-neutral-200/50">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-semibold px-4 py-2 rounded-full text-neutral-600 hover:text-amc-navy hover:bg-neutral-100 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA action trigger button */}
            <div className="hidden md:flex items-center gap-3">
              <span className="flex items-center gap-1 text-xs font-mono font-bold tracking-tight text-[#161D4A]/70">
                <span className="inline-block w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                Admissions Open 2026-27
              </span>
              <button
                onClick={() => {
                  const input = document.getElementById("hero-name-input");
                  if (input) {
                    input.focus();
                    input.scrollIntoView({ behavior: "smooth", block: "center" });
                  } else {
                    onOpenApply();
                  }
                }}
                id="navbar-cta-btn"
                className="px-5 py-2.5 bg-[#FED304] text-[#161D4A] font-extrabold text-xs tracking-wider uppercase rounded-xl hover:bg-[#161D4A] hover:text-white border border-[#FED304]/30 shadow-md hover:shadow-lg transition-all duration-300 ease-out flex items-center gap-2 transform active:scale-95"
              >
                Apply Online
              </button>
            </div>

            {/* Mobile burger toggle button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl transition-colors text-amc-navy hover:bg-neutral-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Side Drawer */}
      <div
        className={`fixed inset-0 z-30 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-xl flex flex-col justify-between border-l border-neutral-100">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://i.postimg.cc/jSp3qGDG/institute-png-01-1.png"
                  alt="AMC Group"
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-amc-navy hover:bg-neutral-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links Stack */}
            <div className="flex flex-col gap-1.5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left font-bold text-[#161D4A] hover:bg-amc-lightblue/20 px-4 py-3 rounded-lg text-sm transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t">
            <div className="flex items-center gap-2 px-2 text-xs font-mono font-bold text-red-600">
              <span className="inline-block w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              Limited Seats remaining for 2026-27
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const input = document.getElementById("hero-name-input");
                if (input) {
                  input.focus();
                  input.scrollIntoView({ behavior: "smooth", block: "center" });
                } else {
                  onOpenApply();
                }
              }}
              className="w-full py-3.5 bg-[#FED304] text-[#161D4A] font-black text-center tracking-wider uppercase text-xs rounded-xl shadow-md transition-transform"
            >
              Apply Online Now →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
