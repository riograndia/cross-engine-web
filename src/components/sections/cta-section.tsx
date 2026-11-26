'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Rocket, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div
          
          
          
          className="relative max-w-4xl mx-auto"
        >
          {/* CTA Panel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r 
                        from-brand-blue/20 to-brand-violet/20 border 
                        border-brand-blue/30 p-8 lg:p-12 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 
                          rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-violet/10 
                          rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary 
                           mb-4">
                Ready to Deploy Your GPU Cloud?
              </h2>
              
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                Get started with enterprise-grade GPU infrastructure in minutes. 
                Flexible vGPU profiles, dedicated passthrough, and 24/7 support.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center 
                            gap-4">
                {/* Primary Button */}
                <Button 
                  variant="default" 
                  size="lg" 
                  asChild 
                  className="min-w-[200px] h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet 
                             hover:from-brand-blue/90 hover:to-brand-violet/90 
                             border-0 shadow-lg shadow-brand-blue/25 
                             transition-all duration-300 hover:shadow-xl 
                             hover:shadow-brand-blue/40 hover:-translate-y-0.5 group"
                >
                  <Link href="/pricing" className="flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    <span>Deploy GPU Now</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                {/* Secondary Button */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="min-w-[200px] h-12 px-6 
                             bg-white/5 backdrop-blur-sm border-border-strong
                             hover:bg-white/10 hover:border-brand-blue/50
                             transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Talk to Sales</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
