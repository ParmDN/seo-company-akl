import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { FileSearch, Globe, Zap } from 'lucide-react';
import featuresImg1 from '@assets/stock_images/digital_marketing_da_7eaf53cc.jpg';
import featuresImg2 from '@assets/stock_images/digital_marketing_da_a2c78500.jpg';

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      title: 'Custom SEO reports with',
      highlight: 'keyword and traffic insights',
      description: 'Get clear, actionable insights with our tailored SEO reports. We track keyword rankings, traffic sources, user behavior.',
      icon: FileSearch,
      image: featuresImg1,
      reverse: false
    },
    {
      title: 'Strategic link building for',
      highlight: 'higher domain authority',
      description: 'Build quality backlinks that boost your website authority and improve search rankings with our proven link building strategies.',
      icon: Globe,
      image: featuresImg2,
      reverse: true
    },
    {
      title: 'Fast, responsive sites that',
      highlight: 'rank higher',
      description: 'Optimize your website speed and performance to improve user experience and search engine rankings.',
      icon: Zap,
      image: featuresImg1,
      reverse: false
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-primary text-lg font-semibold mb-2" data-testid="heading-features-label">Our features</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-features-main">
            Comprehensive features for complete <span className="text-primary">SEO success</span>
          </h2>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
              data-testid={`feature-${index}`}
            >
              <div className={`${feature.reverse ? 'lg:order-2' : ''}`}>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid={`heading-feature-${index}`}>
                  {feature.title} <span className="text-primary">{feature.highlight}</span>
                </h2>
                <p className="text-muted-foreground mb-6" data-testid={`text-feature-${index}`}>{feature.description}</p>
                <Button data-testid={`button-feature-${index}`}>Start Optimizing Now</Button>
              </div>
              <div className={`${feature.reverse ? 'lg:order-1' : ''}`}>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="rounded-lg w-full h-auto shadow-lg"
                  data-testid={`img-feature-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
