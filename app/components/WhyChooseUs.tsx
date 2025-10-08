import React from 'react';
import { useInView } from 'react-intersection-observer';
import heroIllustration from '@assets/image.webp';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerAnimation = inView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid items-center gap-12 lg:grid-cols-2 transition-all duration-1000 ${containerAnimation}`}
        >
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Proven Results, And Exceptional SEO Services
            </h2>
            <p className="text-muted-foreground">
              Welcome to Auckland's premier SEO company. We partner with local businesses to dominate Google search results with proven expertise and cutting-edge strategies.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To empower Auckland businesses with top-tier SEO strategies that drive sustainable growth and competitive advantage in the local market.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide  text-primary">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To be Auckland's most trusted SEO partner, helping businesses of all sizes achieve digital success through innovative search strategies.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-8">
                Contact Us
              </Button>
              <div className="flex items-center gap-3 rounded-full border border-muted bg-white px-6 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  {/* <p className="font-medium text-foreground">Mail Us</p> */}
                  <p className="text-muted-foreground">+64 21 212 4483</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border bg-white p-6 shadow-lg">
              <img
                src={heroIllustration}
                alt="SEO experts collaborating"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
