import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import authorImg1 from '@assets/stock_images/professional_headsho_f2114435.jpg';
import authorImg2 from '@assets/stock_images/professional_headsho_3286651f.jpg';
import authorImg3 from '@assets/stock_images/professional_headsho_221450b4.jpg';
import authorImg4 from '@assets/stock_images/professional_headsho_a00edd3b.jpg';
import testimonialImg from '@assets/stock_images/professional_busines_29ed1803.jpg';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Owner, Auckland Dental',
      image: authorImg1,
      rating: 5,
      text: 'Our Google rankings improved dramatically after working with this team. We now rank #1 for "dentist Auckland CBD" and our new patient inquiries have doubled!'
    },
    {
      name: 'Michael Chen',
      role: 'Director, NZ Property Group',
      image: authorImg2,
      rating: 5,
      text: 'The local SEO expertise here is outstanding. They helped us dominate "property management Auckland" searches and our website leads increased by 250%.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Founder, Auckland Fitness',
      image: authorImg3,
      rating: 5,
      text: 'Professional, knowledgeable, and results-driven. Our gym now appears at the top of Google for "personal training Auckland" and membership has grown significantly.'
    },
    {
      name: 'David Wong',
      role: 'Managing Director, Auckland Plumbing',
      image: authorImg4,
      rating: 5,
      text: 'Finally found an SEO company that understands the Auckland market. Our "emergency plumber Auckland" rankings improved tremendously, leading to more emergency calls.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-primary text-lg font-semibold mb-2" data-testid="heading-testimonials-label">Our Testimonials</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-testimonials-main">
            What our <span className="text-primary">clients say</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2" data-testid={`testimonial-${index}`}>
                    <div className="bg-card p-8 rounded-lg border border-card-border">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-primary text-primary" data-testid={`star-${index}-${i}`} />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic" data-testid={`text-testimonial-${index}`}>"{testimonial.text}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold capitalize" data-testid={`text-name-${index}`}>{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground capitalize" data-testid={`text-role-${index}`}>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                data-testid="button-prev-testimonial"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                data-testid="button-next-testimonial"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                  data-testid={`dot-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <img 
              src={testimonialImg} 
              alt="Testimonials" 
              className="rounded-lg w-full h-auto"
              data-testid="img-testimonials"
            />
            
            {/* Review Rating Box */}
            <div className="absolute bottom-6 left-6 right-6 bg-card p-6 rounded-lg shadow-lg border border-card-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <Avatar key={index} className="border-2 border-background w-10 h-10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm">
                    <span className="font-bold text-primary">4.5</span> Customer review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
