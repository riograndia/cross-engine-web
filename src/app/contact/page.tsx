'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch',
      value: 'hello@crossengine.com',
      href: 'mailto:hello@crossengine.com',
      color: 'text-brand-blue',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      value: '+66 65 527 2519 / +66 82 415 6949',
      href: 'tel:+66655272519',
      color: 'text-brand-green',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our office',
      value: 'Bangkok, Thailand',
      href: '#',
      color: 'text-brand-pink',
    },
  ];

  return (
    <div className="min-h-screen bg-background-default">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-background-subtle relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-violet/5 to-brand-cyan/5 animate-gradient opacity-30" />
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 glow-text">
              Get in Touch
            </h1>
            <p className="text-lg text-text-secondary">
              Have questions about our GPU cloud solutions? Our team is here to help you find the perfect fit for your needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                
                
                
                
                className="flex flex-col items-center p-6 bg-surface-default rounded-xl border border-border-default hover:border-brand-blue/30 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mb-4 ${method.color} group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-text-muted text-center mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-text-primary">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              
              
              
              
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-text-secondary mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              
              
              
              
              className="space-y-8"
            >
              <div className="bg-surface-default rounded-xl border border-border-default p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Sales Inquiries
                  </h3>
                </div>
                <p className="text-text-secondary mb-6">
                  Looking for a custom GPU solution? Our sales team can help you design the perfect infrastructure for your specific needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">Custom GPU configurations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">Enterprise pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">Volume discounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">Long-term contracts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-default rounded-xl border border-border-default p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Support
                  </h3>
                </div>
                <p className="text-text-secondary mb-6">
                  Need technical assistance? Our support team is available 24/7 to help you with any issues.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">24/7 technical support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">Expert assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">Quick response times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">Dedicated support portal</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
