'use client';

import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Clock, Shield, TrendingUp, Layers, Cog } from 'lucide-react';

const whyItems = [
  { icon: Zap, title: 'Flexible', description: 'vGPU profiles from 8GB to 96GB VRAM. Scale up or down based on your workload requirements.', color: 'text-brand-blue' },
  { icon: Clock, title: 'Fast Deployment', description: 'Launch GPU instances in minutes. Pre-configured templates for popular AI frameworks.', color: 'text-brand-violet' },
  { icon: Shield, title: 'High Performance', description: 'Latest NVIDIA GPUs with dedicated VRAM. No noisy neighbors, guaranteed resources.', color: 'text-brand-cyan' },
  { icon: TrendingUp, title: 'Cost Effective', description: 'Pay only for what you use. No long-term commitments. Transparent pricing.', color: 'text-brand-pink' },
  { icon: Layers, title: 'Enterprise Ready', description: 'ISO 27001, SOC 2 certified. 99.9% uptime SLA. 24/7 monitoring and support.', color: 'text-status-success' },
  { icon: Cog, title: 'Managed Infrastructure', description: 'We handle hardware, networking, and virtualization. You focus on your applications.', color: 'text-status-warning' },
];

export function WhyGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background-subtle">
      <Container>
        <div     className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Enterprise GPU Cloud. Ready for Production.</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Built for AI teams who need reliable, high-performance GPU infrastructure without the operational overhead.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyItems.map((item, index) => (
            <div key={item.title}    >
              <Card className="h-full border-border-default bg-surface-default hover:border-brand-blue/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mb-4">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
