import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
      <div className="container mx-auto px-4 lg:px-0">
        <div ref={ref} className={`mx-auto max-w-6xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
              Say hello to future-ready <span className="text-primary-foreground">SEO solutions</span>
            </h2>
            <p className="text-lg text-primary-foreground/90" data-testid="text-cta">
              Stay ahead of the curve with smart, scalable strategies that boost growth.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg lg:col-span-1">
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
                              placeholder="+64 21 212 4483"
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
                              placeholder="your@email.com"
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

            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 shadow-lg lg:col-span-1">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
                Frequently Asked Questions
              </h3>
              <p className="mb-6 text-primary-foreground/80">
                Get quick answers to the questions we hear most often from ambitious brands ready to scale.
              </p>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="faq-1" className="border border-white/10 rounded-xl bg-white/10">
                  <AccordionTrigger className="px-4 text-left text-primary-foreground hover:no-underline">
                    How soon can we expect SEO results?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-sm text-primary-foreground/80">
                    SEO is a long-term strategy. Most clients begin to see measurable improvements within 3-4 months, with compounding growth thereafter.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="border border-white/10 rounded-xl bg-white/10">
                  <AccordionTrigger className="px-4 text-left text-primary-foreground hover:no-underline">
                    Do you provide custom SEO strategies?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-sm text-primary-foreground/80">
                    Yes. We assess your industry, competitors, and current performance to craft tailored campaigns aligned with your goals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="border border-white/10 rounded-xl bg-white/10">
                  <AccordionTrigger className="px-4 text-left text-primary-foreground hover:no-underline">
                    Can you integrate with our marketing team?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-sm text-primary-foreground/80">
                    Absolutely. We collaborate closely with in-house teams to ensure our SEO roadmap aligns with your broader marketing efforts.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
