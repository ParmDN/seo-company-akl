import { useState, useEffect } from 'react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-primary" data-testid="logo">
            Rankio
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-home">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-about">About Us</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-services">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-testimonials">Testimonials</button>
            <button onClick={() => scrollToSection('blog')} className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-blog">Blog</button>
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
          <div className="lg:hidden bg-background border-t py-4 space-y-2" data-testid="mobile-menu">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-home">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-about">About Us</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-services">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-testimonials">Testimonials</button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left px-4 py-2 hover-elevate rounded-md" data-testid="mobile-link-blog">Blog</button>
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
