import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInView } from 'react-intersection-observer';
import authorImg1 from '@assets/stock_images/professional_headsho_f2114435.jpg';
import authorImg2 from '@assets/stock_images/professional_headsho_3286651f.jpg';
import authorImg3 from '@assets/stock_images/professional_headsho_221450b4.jpg';

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div ref={ref} className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Client Images */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-background w-12 h-12" data-testid="avatar-client-1">
                <AvatarImage src={authorImg1} alt="Client" />
                <AvatarFallback>C1</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background w-12 h-12" data-testid="avatar-client-2">
                <AvatarImage src={authorImg2} alt="Client" />
                <AvatarFallback>C2</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background w-12 h-12" data-testid="avatar-client-3">
                <AvatarImage src={authorImg3} alt="Client" />
                <AvatarFallback>C3</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-client-count">50+ Auckland businesses chose our SEO</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="heading-hero">
            Powerful SEO that delivers <span className="text-primary">real results</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Auckland's leading SEO company. We help local businesses dominate Google search results with proven strategies that drive qualified traffic and boost conversions.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('contact')} data-testid="button-talk-expert">
              Get Started
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection('services')} data-testid="button-explore-more">
              Explore More
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-6" data-testid="text-trusted-brands">
              Trusted by <span className="font-semibold text-foreground">7000+</span> Brands That Value Real Results
            </p>
            {/* Company Logos Placeholder */}
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-12 bg-muted rounded flex items-center justify-center text-xs font-semibold" data-testid={`logo-company-${i}`}>
                  BRAND {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
