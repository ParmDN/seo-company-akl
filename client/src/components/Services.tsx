import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, FileText, TrendingUp, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      id: 'keyword',
      title: 'Keyword Research',
      icon: Search,
      description: 'Identify high-value keywords that drive targeted traffic to your Auckland business website.',
      offerings: [
        'Local Keyword Analysis',
        'Competitor Keyword Research',
        'Search Volume & Difficulty Assessment',
        'Long-tail Keyword Discovery'
      ],
      stats: '85%'
    },
    {
      id: 'copywriting',
      title: 'SEO Copywriting',
      icon: FileText,
      description: 'Craft compelling, SEO-optimized copy that resonates with your audience and drives conversions.',
      offerings: [
        'Content Strategy & Planning',
        'Blog & Article Writing',
        'Website Content Creation',
        'SEO Content Optimization'
      ],
      stats: '92%'
    },
    {
      id: 'content',
      title: 'Content Marketing',
      icon: TrendingUp,
      description: 'Create valuable, engaging content that attracts, informs, and converts your target audience to drive long-term SEO success.',
      offerings: [
        'Content Strategy & Planning',
        'Blog & Article Writing',
        'Website Content Creation',
        'SEO Content Optimization'
      ],
      stats: '78%'
    },
    {
      id: 'analytics',
      title: 'SEO Analytics',
      icon: BarChart3,
      description: 'Track and analyze your SEO performance with detailed insights and actionable recommendations.',
      offerings: [
        'Performance Tracking',
        'Competitor Analysis',
        'Custom Reports',
        'ROI Measurement'
      ],
      stats: '95%'
    },
    {
      id: 'technical',
      title: 'Technical SEO Audits',
      icon: Settings,
      description: 'Comprehensive technical audits to identify and fix issues that may be holding back your rankings.',
      offerings: [
        'Site Speed Optimization',
        'Mobile Responsiveness',
        'Schema Markup',
        'Crawlability Analysis'
      ],
      stats: '88%'
    }
  ];

  const [activeTab, setActiveTab] = useState('content');

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-primary text-lg font-semibold mb-2" data-testid="heading-services-label">Our Services</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-services-main">
            Auckland businesses grow faster with our proven <span className="text-primary">SEO services</span>
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-transparent gap-2 h-auto" data-testid="tabs-services">
            {services.map((service) => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid={`tab-${service.id}`}
              >
                <service.icon size={18} />
                <span className="hidden sm:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Service Details Card */}
                <div className="bg-card p-8 rounded-lg border border-card-border" data-testid={`card-service-${service.id}`}>
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`heading-service-${service.id}`}>{service.title}</h3>
                  <p className="text-muted-foreground mb-6" data-testid={`text-service-desc-${service.id}`}>{service.description}</p>
                  <Button variant="outline" data-testid={`button-view-details-${service.id}`}>View Details</Button>
                </div>

                {/* What We Offer Card */}
                <div className="bg-card p-8 rounded-lg border border-card-border" data-testid={`card-offerings-${service.id}`}>
                  <h3 className="text-xl font-semibold mb-3" data-testid="heading-what-we-offer">What We Offer</h3>
                  <p className="text-muted-foreground mb-4">Comprehensive SEO solutions tailored for Auckland businesses</p>
                  <ul className="space-y-2">
                    {service.offerings.map((offering, index) => (
                      <li key={index} className="flex items-start gap-2" data-testid={`offering-${service.id}-${index}`}>
                        <span className="text-primary mt-1">•</span>
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats Card */}
                <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-lg text-primary-foreground flex flex-col justify-center items-center text-center" data-testid={`card-stats-${service.id}`}>
                  <h2 className="text-4xl font-bold mb-2" data-testid={`text-stats-${service.id}`}>{service.stats}</h2>
                  <p className="text-primary-foreground/90">Marketing Myths Debunked</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground" data-testid="text-free-quote">
            <span className="font-semibold text-primary">Free</span> Let's make something great work together. <button className="text-primary hover:underline font-semibold" data-testid="button-get-quote">Get Free Quote</button>
          </p>
        </div>
      </div>
    </section>
  );
}
