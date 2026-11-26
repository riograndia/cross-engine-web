'use client';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Brain, Monitor, Cloud, Zap, Shield, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  {
    icon: Brain,
    title: 'AI Training',
    description: 'Train large language models and deep learning networks with massive GPU compute power.',
    color: 'text-brand-blue',
    bgColor: 'bg-brand-blue/10',
    useCases: [
      'Large Language Models (LLMs)',
      'Deep Learning Networks',
      'Computer Vision Models',
      'Recommendation Systems',
    ],
  },
  {
    icon: Zap,
    title: 'LLM Inference',
    description: 'Deploy and run inference on trained models with low latency and high throughput.',
    color: 'text-brand-violet',
    bgColor: 'bg-brand-violet/10',
    useCases: [
      'Chatbots & Virtual Assistants',
      'Content Generation',
      'Code Generation',
      'Real-time Translation',
    ],
  },
  {
    icon: Monitor,
    title: 'Cloud Workstation',
    description: 'High-performance virtual workstations for designers, engineers, and developers.',
    color: 'text-brand-cyan',
    bgColor: 'bg-brand-cyan/10',
    useCases: [
      '3D Design & Rendering',
      'Video Editing',
      'CAD/CAM Applications',
      'Software Development',
    ],
  },
  {
    icon: Cloud,
    title: 'GPU Virtualization',
    description: 'Share GPU resources across multiple users and workloads efficiently.',
    color: 'text-brand-pink',
    bgColor: 'bg-brand-pink/10',
    useCases: [
      'Multi-tenant Environments',
      'Educational Institutions',
      'Research Labs',
      'Development Teams',
    ],
  },
  {
    icon: Shield,
    title: 'Enterprise Applications',
    description: 'Run mission-critical enterprise applications with guaranteed performance and security.',
    color: 'text-status-success',
    bgColor: 'bg-status-success/10',
    useCases: [
      'Data Analytics',
      'Business Intelligence',
      'Financial Modeling',
      'Scientific Computing',
    ],
  },
  {
    icon: Rocket,
    title: 'High-Performance Computing',
    description: 'Accelerate computationally intensive workloads with dedicated GPU power.',
    color: 'text-status-warning',
    bgColor: 'bg-status-warning/10',
    useCases: [
      'Simulations',
      'Weather Modeling',
      'Genomic Sequencing',
      'Cryptocurrency Mining',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="py-16 lg:py-20 bg-background-subtle relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-violet/5 to-brand-cyan/5 animate-gradient opacity-30" />
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadeIn">
            <Badge variant="secondary" className="mb-4 sparkle">
              Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 glow-text">
              Solutions for Every Use Case
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From AI training to cloud workstations, our GPU cloud platform 
              powers a wide range of demanding workloads.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                
                
                
                
              >
                <Card className="h-full border-border-default bg-surface-default hover:border-brand-blue/50 transition-colors">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${solution.bgColor} flex items-center justify-center mb-4`}>
                      <solution.icon className={`w-6 h-6 ${solution.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      {solution.useCases.map((useCase, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background-subtle">
        <Container>
          <motion.div
            
            
            
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Deploy your GPU cloud instance in minutes and start accelerating your workloads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" size="lg" asChild className="h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-0.5 group">
                <Link href="/pricing" className="flex items-center gap-2">
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-12 px-6">
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
