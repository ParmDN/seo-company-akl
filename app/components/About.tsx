import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import aboutImg from '@assets/stock_images/professional_busines_4d849f3d.jpg';
import authorImg1 from '@assets/stock_images/professional_headsho_f2114435.jpg';
import authorImg2 from '@assets/stock_images/professional_headsho_3286651f.jpg';
import authorImg3 from '@assets/stock_images/professional_headsho_221450b4.jpg';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    { name: 'Keyword Optimization', percentage: 87 },
    { name: 'Content Quality', percentage: 92 },
    { name: 'Link Building', percentage: 78 },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img src={aboutImg} alt="About Us" className="rounded-lg w-full h-auto" data-testid="img-about" />
              
              {/* Skill Box Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-card p-6 rounded-lg shadow-lg border border-card-border">
                <h3 className="font-semibold mb-4" data-testid="heading-technical-seo">Technical SEO Insights</h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm" data-testid={`text-skill-${index}`}>{skill.name}</span>
                        <span className="text-sm font-semibold" data-testid={`text-percentage-${index}`}>{skill.percentage}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: inView ? `${skill.percentage}%` : '0%' }}
                          data-testid={`progress-skill-${index}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background w-10 h-10">
                  <AvatarImage src={authorImg1} alt="Team" />
                  <AvatarFallback>T1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background w-10 h-10">
                  <AvatarImage src={authorImg2} alt="Team" />
                  <AvatarFallback>T2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background w-10 h-10">
                  <AvatarImage src={authorImg3} alt="Team" />
                  <AvatarFallback>T3</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-expert-team">Auckland's SEO Experts</p>
            </div>

            <h3 className="text-primary text-lg font-semibold mb-2" data-testid="heading-about-label">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-about-main">
              Auckland's leading SEO agency <span className="text-primary">driving local success</span>
            </h2>
            <p className="text-muted-foreground mb-4" data-testid="text-about-p1">
              Based in the heart of Auckland, we specialize in helping local businesses dominate Google search results and connect with their target audience in New Zealand's largest market.
            </p>
            <p className="text-muted-foreground mb-6" data-testid="text-about-p2">
              Our team combines deep knowledge of the local market with cutting-edge SEO techniques to deliver measurable results for businesses across Auckland and beyond.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-card rounded-lg border border-card-border" data-testid="stat-projects">
                <h3 className="text-3xl font-bold text-primary mb-2">150+</h3>
                <p className="text-muted-foreground">Auckland Businesses Served</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-card-border" data-testid="stat-clients">
                <h3 className="text-3xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
