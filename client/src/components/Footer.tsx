import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-muted/30 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-footer-cta">
            <span className="text-primary">Ready to talk?</span>
          </h2>
          <div className="space-y-2">
            <h3 className="text-xl">
              <a href="mailto:info@seoauckland.co.nz" className="text-primary hover:underline" data-testid="link-email">
                info@seoauckland.co.nz
              </a>
            </h3>
            <h2 className="text-2xl font-semibold">
              <a href="tel:+64212124483" className="hover:text-primary transition-colors" data-testid="link-phone">
                +64 21 212 4483
              </a>
            </h2>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4" data-testid="logo-footer">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xl">S</span>
              </div>
              <span className="text-xl font-semibold">
                SEO<span className="text-primary">Auckland</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6" data-testid="text-footer-about">
              Auckland's premier SEO agency, helping local businesses dominate Google search results and drive sustainable growth.
            </p>
            {/* <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center hover-elevate transition-colors" data-testid="social-pinterest">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center hover-elevate transition-colors" data-testid="social-twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center hover-elevate transition-colors" data-testid="social-facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center hover-elevate transition-colors" data-testid="social-instagram">
                <Instagram size={18} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm" data-testid="heading-quick-links">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('hero')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-home">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">About us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-services">Services</button></li>
              <li><button onClick={() => scrollToSection('why-choose-us')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-why-choose-us">Why Choose Us</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm" data-testid="heading-services-links">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-keyword">Keyword Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-copywriting">SEO Copywriting</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-content">Content Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-analytics">SEO Analytics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm" data-testid="heading-contact-info">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1" />
                <a href="mailto:info@seoauckland.co.nz" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-email">
                  info@seoauckland.co.nz
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-1" />
                <a href="tel:+64212124483" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-phone">
                  +64 21 212 4483
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            © {new Date().getFullYear()} SEO Auckland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
