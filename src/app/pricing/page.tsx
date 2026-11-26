'use client';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPackages = {
  l40s: {
    name: 'NVIDIA L40S',
    kicker: 'Ada Lovelace Architecture',
    image: '/images/gpus/l40s.jpg',
    profiles: [
      {
        name: 'Small',
        vgpuVram: '8 GB',
        vcpu: '4 Core (2.6GHz)',
        ram: '8 GB',
        disk: '200 GB',
        popular: false,
        badge: 'Starter',
        features: [
          'NVIDIA L40S 8GB vGPU',
          '4 vCPU Cores (2.6GHz)',
          '8 GB RAM',
          '200 GB NVMe Storage',
          'Bandwidth Domestic/International 40/1 Gbps',
          '24/7 Support',
          'Include 1 Public IP per VM',
          'EDR Antivirus and Anti-Malware',
        ],
      },
      {
        name: 'Medium',
        vgpuVram: '16 GB',
        vcpu: '8 Core (2.6GHz)',
        ram: '16 GB',
        disk: '300 GB',
        popular: true,
        badge: 'Most Popular',
        features: [
          'NVIDIA L40S 16GB vGPU',
          '8 vCPU Cores (2.6GHz)',
          '16 GB RAM',
          '300 GB NVMe Storage',
          'Bandwidth Domestic/International 40/1 Gbps',
          '24/7 Support',
          'Include 1 Public IP per VM',
          'EDR Antivirus and Anti-Malware',
        ],
      },
      {
        name: 'Large',
        vgpuVram: '48 GB',
        vcpu: '16 Core (2.6GHz)',
        ram: '64 GB',
        disk: '500 GB',
        popular: false,
        badge: 'Best Value',
        features: [
          'NVIDIA L40S 48GB vGPU (Full GPU)',
          '16 vCPU Cores (2.6GHz)',
          '64 GB RAM',
          '500 GB NVMe Storage',
          'Bandwidth Domestic/International 40/1 Gbps',
          '24/7 Support',
          'Include 1 Public IP per VM',
          'EDR Antivirus and Anti-Malware',
        ],
      },
    ],
  },
  blackwell: {
    name: 'NVIDIA RTX PRO 6000 Blackwell',
    kicker: 'Blackwell Server Edition',
    image: '/images/gpus/blackwell.jpg',
    profiles: [
      {
        name: 'Medium',
        vgpuVram: '24 GB',
        vcpu: '8 Core (3.2GHz)',
        ram: '32 GB',
        disk: '300 GB',
        popular: false,
        badge: 'Entry Level',
        features: [
          'Blackwell 24GB vGPU',
          '8 vCPU Cores (3.2GHz)',
          '32 GB RAM',
          '300 GB NVMe Storage',
          'Bandwidth Domestic/International 40/1 Gbps',
          '24/7 Support',
          'Include 1 Public IP per VM',
          'EDR Antivirus and Anti-Malware',
        ],
      },
      {
        name: 'Large',
        vgpuVram: '48 GB',
        vcpu: '16 Core (3.2GHz)',
        ram: '64 GB',
        disk: '500 GB',
        popular: true,
        badge: 'Most Popular',
        features: [
          'Blackwell 48GB vGPU',
          '16 vCPU Cores (3.2GHz)',
          '64 GB RAM',
          '500 GB NVMe Storage',
          'Bandwidth Domestic/International 40/1 Gbps',
          '24/7 Support',
          'Include 1 Public IP per VM',
          'EDR Antivirus and Anti-Malware',
        ],
      },
      {
        name: 'X-Large',
        vgpuVram: '96 GB',
        vcpu: '32 Core (3.2GHz)',
        ram: '128 GB',
        disk: '1024 GB',
        popular: false,
        badge: 'Maximum Performance',
        features: [
          'Blackwell 96GB vGPU (Full GPU)',
          '32 vCPU Cores (3.2GHz)',
          '128 GB RAM',
          '1 TB NVMe Storage',
          'Bandwidth Domestic/International 40/1 Gbps',
          '24/7 Support',
          'Include 1 Public IP per VM',
          'EDR Antivirus and Anti-Malware',
        ],
      },
    ],
  },
};

export default function PricingPage() {
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
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 glow-text">
              Choose Your Plan
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Flexible vGPU profiles to match your workload. 
              Contact us for custom enterprise pricing.
            </p>
          </div>
        </Container>
      </section>

      {/* L40S Packages */}
      <section id="l40s" className="py-16 lg:py-24">
        <Container>
          <motion.div
            
            
            
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
              {pricingPackages.l40s.name}
            </h2>
            <p className="text-lg text-text-secondary text-center mb-2">
              {pricingPackages.l40s.kicker}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPackages.l40s.profiles.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                
                
                
                
              >
                <div className={`h-full border border-border-default bg-surface-default relative overflow-hidden rounded-xl ${
                  pkg.popular ? 'border-brand-blue/50 shadow-lg shadow-brand-blue/10' : ''
                }`}>
                  {pkg.badge && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className={`${
                        pkg.badge === 'Most Popular' 
                          ? 'bg-gradient-to-r from-brand-blue to-brand-violet border-0 shadow-lg'
                          : pkg.badge === 'Best Value'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-0 shadow-lg'
                          : pkg.badge === 'Maximum Performance'
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 border-0 shadow-lg'
                          : 'bg-gradient-to-r from-brand-cyan to-brand-blue border-0 shadow-lg'
                      } text-white font-semibold`}>
                        {pkg.badge}
                      </Badge>
                    </div>
                  )}
                  {/* GPU Image */}
                  <div className="relative h-48 overflow-hidden bg-surface-elevated">
                    <Image
                      src={pricingPackages.l40s.image}
                      alt={pricingPackages.l40s.name}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          {pkg.name}
                        </h3>
                        <div className="flex items-baseline gap-2 mb-3">
                          <Badge variant="outline" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-base px-4 py-1.5 font-bold">
                            {pkg.vgpuVram}
                          </Badge>
                          <span className="text-sm text-text-muted font-medium">
                            vGPU Profile
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-status-success flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-border-default">
                        <Button 
                          variant={pkg.popular ? 'default' : 'outline'} 
                          className="w-full h-12 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 group"
                          asChild
                        >
                          <Link href="/contact" className="flex items-center justify-center gap-2">
                            <span>Contact Sales</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Blackwell Packages */}
      <section id="blackwell" className="py-16 lg:py-24 bg-background-subtle">
        <Container>
          <motion.div
            
            
            
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
              NVIDIA RTX PRO 6000 Blackwell
            </h2>
            <p className="text-lg text-text-secondary text-center mb-2">
              {pricingPackages.blackwell.kicker}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPackages.blackwell.profiles.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                
                
                
                
              >
                <div className={`h-full border border-border-default bg-surface-default relative overflow-hidden rounded-xl ${
                  pkg.popular ? 'border-brand-blue/50 shadow-lg shadow-brand-blue/10' : ''
                }`}>
                  {pkg.badge && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className={`${
                        pkg.badge === 'Most Popular' 
                          ? 'bg-gradient-to-r from-brand-blue to-brand-violet border-0 shadow-lg'
                          : pkg.badge === 'Best Value'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-0 shadow-lg'
                          : pkg.badge === 'Maximum Performance'
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 border-0 shadow-lg'
                          : 'bg-gradient-to-r from-brand-cyan to-brand-blue border-0 shadow-lg'
                      } text-white font-semibold`}>
                        {pkg.badge}
                      </Badge>
                    </div>
                  )}
                  {/* GPU Image */}
                  <div className="relative h-48 overflow-hidden bg-surface-elevated">
                    <Image
                      src={pricingPackages.blackwell.image}
                      alt={pricingPackages.blackwell.name}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          {pkg.name}
                        </h3>
                        <div className="flex items-baseline gap-2 mb-3">
                          <Badge variant="outline" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-base px-4 py-1.5 font-bold">
                            {pkg.vgpuVram}
                          </Badge>
                          <span className="text-sm text-text-muted font-medium">
                            vGPU Profile
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-status-success flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-border-default">
                        <Button 
                          variant={pkg.popular ? 'default' : 'outline'} 
                          className="w-full h-12 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 group"
                          asChild
                        >
                          <Link href="/contact" className="flex items-center justify-center gap-2">
                            <span>Contact Sales</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Included Services */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            
            
            
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Included in All Plans
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Enterprise-grade features and support included with every deployment.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Daily Backup', description: '7 Copies (Same Site) and 7 Copies (Offsite)' },
              { title: '24/7 Monitoring', description: 'Continuous monitoring and alerting' },
              { 
                title: 'COMPLIANCE CERTIFICATES', 
                description: 'CSA-STAR, ISO/IEC 27001:2022, ISO 27017:2015, ISO 22301:2012, ISO/IEC 20000-1:2018, SOC2 Type II'
              },
              { title: 'Monthly Backup', description: '1 Copy (Offsite)' },
              { title: '24/7 Support', description: 'Expert support available around the clock' },
              { title: '99.5% Uptime SLA', description: 'Guaranteed uptime with Service Level Agreement' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                
                
                
                
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
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
              Need Custom Pricing?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Contact us for enterprise volume discounts, custom configurations, 
              or dedicated GPU passthrough pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" size="lg" asChild className="h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 shadow-lg shadow-brand-blue/25 group">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Contact Sales</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-12 px-6">
                <Link href="/gpu-cloud">
                  View GPU Specs
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
