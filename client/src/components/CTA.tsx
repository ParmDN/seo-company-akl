import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe clicked with email:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
            Say hello to future-ready <span className="text-primary-foreground">SEO solutions</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8" data-testid="text-cta">
            Stay ahead of the curve with smart, scalable strategies that boost growth.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-foreground flex-1"
              required
              data-testid="input-email"
            />
            <Button 
              type="submit" 
              variant="secondary"
              data-testid="button-subscribe"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
