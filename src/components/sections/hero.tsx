'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Rocket, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background-subtle">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-violet/5 to-brand-cyan/5 animate-gradient opacity-30" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <Container>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Kicker */}
          <div
            className="mb-6 animate-fadeIn"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold 
                           bg-brand-blue/10 text-brand-blue border border-brand-blue/20 
                           backdrop-blur-sm sparkle">
              Cross Engine GPU Cloud
            </span>
          </div>
          
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold 
                       text-text-primary tracking-tight mb-6 glow-text animate-fadeIn"
            style={{ animationDelay: '100ms' }}
          >
            Enterprise AI Compute.{' '}
            <span className="gradient-text">Built for What's Next.</span>
          </h1>
          
          {/* Lead */}
          <p
            className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 
                       leading-relaxed animate-fadeIn"
            style={{ animationDelay: '200ms' }}
          >
            High-performance GPU infrastructure for AI inference, LLM workloads, 
            visual computing, and enterprise applications. Deploy in minutes with 
            flexible vGPU or dedicated passthrough.
          </p>
          
          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeIn"
            style={{ animationDelay: '300ms' }}
          >
            {/* Primary Button */}
            <Button 
              variant="default" 
              size="lg" 
              asChild 
              className="min-w-[200px] h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet 
                         hover:from-brand-blue/90 hover:to-brand-violet/90 
                         border-0 shadow-lg shadow-brand-blue/25 
                         transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/40 
                         hover:-translate-y-0.5 group animate-neon hover:scale-105"
            >
              <Link href="/pricing" className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span>Deploy GPU</span>
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
                         transition-all duration-300 hover:-translate-y-0.5 group gradient-border-animated hover-glow"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Contact Sales</span>
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-fadeIn"
            style={{ animationDelay: '400ms' }}
          >
            <div className="text-center p-4 rounded-xl bg-surface-default/50 border border-border-subtle backdrop-blur-sm hover-lift gradient-border-animated">
              <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-1 glow-text">
                96 GB
              </div>
              <div className="text-sm text-text-muted">
                Max VRAM (Blackwell)
              </div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-surface-default/50 border border-border-subtle backdrop-blur-sm hover-lift gradient-border-animated">
              <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-1 glow-text">
                48 GB
              </div>
              <div className="text-sm text-text-muted">
                L40S VRAM
              </div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-surface-default/50 border border-border-subtle backdrop-blur-sm hover-lift gradient-border-animated">
              <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-1 glow-text">
                vGPU
              </div>
              <div className="text-sm text-text-muted">
                Flexible Profiles
              </div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-surface-default/50 border border-border-subtle backdrop-blur-sm hover-lift gradient-border-animated">
              <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-1 glow-text">
                PCIe
              </div>
              <div className="text-sm text-text-muted">
                Passthrough
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
