import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className="container mx-auto">
        <nav className={`flex items-center justify-between h-20 px-6 rounded-full bg-card shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
          <div className="flex items-center gap-2" data-testid="logo">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <span className="text-xl font-semibold">
              SEO<span className="text-primary">Auckland</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-home">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-about">About Us</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-services">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-testimonials">Testimonials</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-why-choose-us">Why Choose Us</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-contact">Contact</button>
            <Button onClick={() => scrollToSection('contact')} data-testid="button-get-started">Get Started Today</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card rounded-b-3xl mt-2 border-t py-4 space-y-2 shadow-lg" data-testid="mobile-menu">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-home">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-about">About Us</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-services">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-testimonials">Testimonials</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-why-choose-us">Why Choose Us</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-contact">Contact</button>
            <div className="px-4 pt-2">
              <Button className="w-full" onClick={() => scrollToSection('contact')} data-testid="mobile-button-get-started">Get Started Today</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
