import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
              Say hello to future-ready <span className="text-primary-foreground">SEO solutions</span>
            </h2>
            <p className="text-lg text-primary-foreground/90" data-testid="text-cta">
              Stay ahead of the curve with smart, scalable strategies that boost growth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-white text-foreground"
                            data-testid="input-fullname"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-primary-foreground/80" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Phone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 234 567 8900" 
                            className="bg-white text-foreground"
                            data-testid="input-phone"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-primary-foreground/80" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@example.com" 
                            className="bg-white text-foreground"
                            data-testid="input-email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-primary-foreground/80" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="SEO Consultation" 
                            className="bg-white text-foreground"
                            data-testid="input-subject"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-primary-foreground/80" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          className="bg-white text-foreground min-h-32"
                          data-testid="input-message"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-primary-foreground/80" />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button 
                    type="submit" 
                    variant="secondary"
                    size="lg"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
