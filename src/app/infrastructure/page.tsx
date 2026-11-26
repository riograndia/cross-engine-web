'use client';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, 
  Server, 
  Network, 
  Shield, 
  Zap, 
  HardDrive, 
  Cpu, 
  Activity,
  CheckCircle,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Database,
  TrendingUp,
  Clock,
  Lock
} from 'lucide-react';
import { NetworkTopology } from '@/components/sections/network-topology';
const regions = [
  { name: 'Southeast Asia', location: 'Thailand', latency: '<1ms', gpus: '100+' },
  { name: 'East Asia', location: 'Singapore', latency: '<5ms', gpus: '50+' },
  { name: 'North America', location: 'US West', latency: '<10ms', gpus: '200+' },
];
const metrics = [
  { label: 'Uptime SLA', value: '99.9%', icon: Activity, color: 'text-brand-blue' },
  { label: 'Network Latency', value: '<1ms', icon: Clock, color: 'text-brand-violet' },
  { label: 'Network Speed', value: '100Gbps', icon: Zap, color: 'text-brand-cyan' },
  { label: 'Storage Capacity', value: '10PB+', icon: HardDrive, color: 'text-brand-pink' },
];
const securityFeatures = [
  { name: 'ISO 27001', description: 'Information Security', icon: Shield },
  { name: 'SOC 2 Type II', description: 'Security & Availability', icon: Lock },
  { name: 'CSA STAR', description: 'Cloud Security Alliance', icon: CheckCircle },
  { name: 'GDPR Compliant', description: 'Data Protection', icon: Shield },
];
export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background-subtle">
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
              Infrastructure
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 glow-text">
              Enterprise-Grade Infrastructure
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Built on industry-leading technology with enterprise security, 
              reliability, and performance at every layer.
            </p>
          </div>
          {/* Performance Metrics Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="animate-slideUp hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="border-border-default bg-surface-default hover:border-brand-blue/30 transition-all gradient-border-animated">
                  <CardContent className="p-6 text-center">
                    <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3 animate-pulse-slow`} />
                    <div className={`text-3xl font-bold ${metric.color} mb-1 glow-text`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-text-muted">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* Data Center Gallery */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12 animate-fadeIn">
            <Badge variant="secondary" className="mb-4 sparkle">
              Award-Winning Infrastructure
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 glow-text-violet">
              Data Center Facilities
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Operation centers interconnected with high speed and high stability. 
              Awarded the Data Center Service Vendor of the Year 2013 from Frost & Sullivan.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge variant="outline" className="bg-status-success/10 text-status-success border-status-success/30 animate-pulse-slow">
                ISO/IEC 27001:2013
              </Badge>
              <Badge variant="outline" className="bg-status-success/10 text-status-success border-status-success/30 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
                ISO/IEC 20000-1:2018
              </Badge>
              <Badge variant="outline" className="bg-status-success/10 text-status-success border-status-success/30 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                ISO 22301:2019
              </Badge>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                title: 'INET-IDC1',
                location: 'Bangkok Thai Tower, Rang Nam Road',
                description: 'Primary data center in central Bangkok',
                features: ['Tier III+ Certified', 'N+1 Redundancy', '24/7 NOC', 'Multi-Carrier'],
                image: '/images/datacenters/bangkok-dc.jpg',
                alt: 'INET-IDC1 Bangkok',
              },
              {
                title: 'INET-IDC2',
                location: 'Thai Summit Tower, New Petchburi Road',
                description: 'Secondary facility with geo-redundancy',
                features: ['Geo-Redundant', 'N+1 Cooling', 'Biometric Access', 'Diverse Power'],
                image: '/images/datacenters/petchburi-dc.jpg',
                alt: 'INET-IDC2 Petchburi',
              },
              {
                title: 'INET-IDC3',
                location: 'Saraburi Province',
                description: 'Disaster recovery site with full redundancy',
                features: ['Cold Site DR', 'Full Redundancy', '2N UPS', 'High Security'],
                image: '/images/datacenters/saraburi-dc.jpg',
                alt: 'INET-IDC3 Saraburi',
              },
            ].map((dc, index) => (
              <div
                key={dc.title}
                className="animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-full border border-border-default bg-surface-default relative overflow-hidden rounded-xl hover:border-brand-blue/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover-lift gradient-border-animated light-trail">
                  {/* Image */}
                  <div className="relative h-56 lg:h-64 overflow-hidden bg-surface-elevated">
                    <Image
                      src={dc.image}
                      alt={dc.alt}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-text-primary mb-1">
                          {dc.title}
                        </h3>
                        <p className="text-xs text-text-muted mb-2">
                          {dc.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary mb-3">
                      {dc.description}
                    </p>
                    <div className="space-y-1.5">
                      {dc.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-status-success flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Highly Secure',
                description: 'Multi-layered security: firewalls, biometric access, CCTV',
                icon: Shield,
                color: 'text-status-success',
              },
              {
                title: 'State-of-the-art',
                description: 'Redundant AC, UPS, generators, fire suppression',
                icon: Server,
                color: 'text-brand-cyan',
              },
              {
                title: 'Highly Stable',
                description: 'Full Redundancy with automatic load sharing',
                icon: Activity,
                color: 'text-brand-blue',
              },
              {
                title: 'One-stop Service',
                description: 'Trade Hub, Payment Gateway, SSL & more',
                icon: Zap,
                color: 'text-brand-violet',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                
                
                
              >
                <Card className="border-border-default bg-surface-default hover:border-brand-blue/30 transition-colors">
                  <CardContent className="p-6">
                    <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3`} />
                    <h3 className="text-base font-semibold text-text-primary mb-2 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {/* SLA Banner */}
          <div
            
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-brand-blue/30 bg-gradient-to-r from-brand-blue/5 to-brand-violet/5">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <CheckCircle className="w-6 h-6 text-status-success" />
                  <h3 className="text-lg font-bold text-text-primary">
                    Premium Quality Assurance
                  </h3>
                </div>
                <p className="text-text-secondary">
                  Service Level Agreement (SLA) - Internet Connectivity Uptime <span className="font-bold text-text-primary">99.90%</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
      {/* Network Topology - New Component */}
      <NetworkTopology />
      {/* Security & Compliance */}
      <section className="py-16 lg:py-24">
        <Container>
          <div
            
            
            
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Security & Compliance
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Enterprise-grade security with industry-leading certifications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.name}
                
              >
                <Card className="border-border-default bg-surface-default hover:border-status-success/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-status-success/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-status-success" />
                      </div>
                      <h3 className="text-base font-semibold text-text-primary">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-background-subtle">
        <Container>
          <div
            
            
            
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Technology Partners
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Built on industry-leading technology from trusted partners.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              className="text-center p-6 rounded-xl bg-surface-default border border-border-default hover:border-brand-blue/50 transition-colors"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/logos/nvidia-logo.svg"
                  alt="NVIDIA"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-bold text-text-primary mb-2">NVIDIA</div>
              <div className="text-sm text-text-muted mb-3">GPU Technology</div>
              <div className="text-xs text-text-secondary">
                L40S • Blackwell • vGPU • CUDA
              </div>
            </div>
            <div
              
              className="text-center p-6 rounded-xl bg-surface-default border border-border-default hover:border-brand-blue/50 transition-colors"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/logos/nutanix-logo.png"
                  alt="Nutanix"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-bold text-text-primary mb-2">Nutanix</div>
              <div className="text-sm text-text-muted mb-3">Virtualization</div>
              <div className="text-xs text-text-secondary">
                AHV Hypervisor • Enterprise Virtualization
              </div>
            </div>
            <div
              
              className="text-center p-6 rounded-xl bg-surface-default border border-border-default hover:border-brand-blue/50 transition-colors"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/logos/cross-engine-full.png"
                  alt="Cross Engine"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-bold text-text-primary mb-2">Cross Engine</div>
              <div className="text-sm text-text-muted mb-3">Platform</div>
              <div className="text-xs text-text-secondary">
                Management • Monitoring • Support
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background-subtle relative overflow-hidden">
        {/* Energy Line Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="energy-line h-1 mb-8"></div>
          <div className="energy-line h-1 mb-8" style={{ animationDelay: '0.5s' }}></div>
          <div className="energy-line h-1" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <Container>
          <div className="text-center max-w-3xl mx-auto animate-fadeIn relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 glow-text">
              Ready to Deploy?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Get started with enterprise-grade GPU infrastructure in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="default" 
                size="lg" 
                asChild 
                className="h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 shadow-lg shadow-brand-blue/25 group animate-neon hover:scale-105 transition-transform"
              >
                <Link href="/pricing" className="flex items-center gap-2">
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="h-12 px-6 gradient-border-animated hover-glow"
              >
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
