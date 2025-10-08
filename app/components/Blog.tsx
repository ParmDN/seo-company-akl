import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import blogImg1 from '@assets/stock_images/digital_marketing_da_7eaf53cc.jpg';
import blogImg2 from '@assets/stock_images/digital_marketing_da_a2c78500.jpg';
import blogImg3 from '@assets/stock_images/professional_busines_3cde101e.jpg';

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const posts = [
    {
      title: 'Why Your Business Needs Local SEO Now',
      image: blogImg1,
      link: '#'
    },
    {
      title: 'Technical SEO Mistakes You Must Avoid',
      image: blogImg2,
      link: '#'
    },
    {
      title: 'How AI Is Shaping the Future of SEO',
      image: blogImg3,
      link: '#'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-primary text-lg font-semibold mb-2" data-testid="heading-blog-label">Latest blog</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-blog-main">
            Insights & strategies from our <span className="text-primary">latest blogs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer transition-all duration-500 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              data-testid={`post-${index}`}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  data-testid={`img-post-${index}`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors" data-testid={`heading-post-${index}`}>
                {post.title}
              </h3>
              <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all" data-testid={`button-read-${index}`}>
                read more <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
