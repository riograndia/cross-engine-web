'use client';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  Globe, 
  Heart, 
  Rocket,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Empowering AI innovation through accessible, high-performance compute infrastructure.',
    color: 'text-brand-blue',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Staying at the forefront of GPU technology and cloud architecture.',
    color: 'text-brand-violet',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    description: 'Every decision starts with how it benefits our customers success.',
    color: 'text-brand-pink',
  },
  {
    icon: Users,
    title: 'Team Excellence',
    description: 'Building a diverse team of experts passionate about what they do.',
    color: 'text-brand-cyan',
  },
];

const stats = [
  {
    label: 'Founded',
    value: '2024',
    icon: Building2,
  },
  {
    label: 'Team Members',
    value: '50+',
    icon: Users,
  },
  {
    label: 'Data Centers',
    value: '3',
    icon: MapPin,
  },
  {
    label: 'Countries Served',
    value: '15+',
    icon: Globe,
  },
];

const team = [
  {
    name: 'Our Team',
    role: 'Expert Engineers & Researchers',
    description: 'World-class talent from leading tech companies and research institutions.',
    icon: Users,
    color: 'text-brand-blue',
  },
  {
    name: 'Advisors',
    role: 'Industry Veterans',
    description: 'Guidance from pioneers in AI, cloud computing, and enterprise software.',
    icon: Award,
    color: 'text-brand-violet',
  },
  {
    name: 'Investors',
    role: 'Strategic Partners',
    description: 'Backed by investors who understand the future of AI infrastructure.',
    icon: Rocket,
    color: 'text-brand-cyan',
  },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background-default">
      {/* Hero Section */}
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
              About Cross Engine
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 glow-text">
              Building the Future of AI Compute
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We're on a mission to make high-performance GPU infrastructure 
              accessible to every organization driving AI innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 border-b border-border-default">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-surface-default/50 border border-border-subtle backdrop-blur-sm hover-lift gradient-border-animated animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-brand-blue mx-auto mb-3 animate-pulse-slow" />
                <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-1 glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12 animate-fadeIn">
            <Badge variant="secondary" className="mb-4 sparkle">
              Our Values
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 glow-text-violet">
              What Drives Us
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-slideUp hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-border-default bg-surface-default hover:border-brand-blue/30 transition-all gradient-border-animated">
                  <CardContent className="p-6">
                    <value.icon className={`w-10 h-10 ${value.color} mb-4`} />
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background-subtle">
        <Container>
          <div className="text-center mb-12 animate-fadeIn">
            <Badge variant="secondary" className="mb-4 sparkle">
              Our People
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 glow-text">
              Built by Experts
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A team of passionate individuals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center p-8 rounded-xl bg-surface-default border border-border-default hover-lift gradient-border-animated animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <member.icon className={`w-12 h-12 ${member.color} mx-auto mb-4 animate-pulse-slow`} />
                <h3 className="text-xl font-bold text-text-primary mb-2 glow-text">
                  {member.name}
                </h3>
                <div className="text-sm font-semibold text-brand-blue mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-text-secondary">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Energy Line Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="energy-line h-1 mb-8"></div>
          <div className="energy-line h-1 mb-8" style={{ animationDelay: '0.5s' }}></div>
          <div className="energy-line h-1" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <Container>
          <div className="text-center max-w-3xl mx-auto animate-fadeIn relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 glow-text">
              Let's Build Together
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Have questions about our mission or want to join our journey? 
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="default" 
                size="lg" 
                asChild 
                className="h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 shadow-lg shadow-brand-blue/25 group animate-neon hover:scale-105 transition-transform"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="h-12 px-6 gradient-border-animated hover-glow"
              >
                <Link href="/careers">
                  View Careers
                </Link>
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center animate-fadeIn" style={{ animationDelay: '400ms' }}>
                <Mail className="w-5 h-5 text-brand-blue mb-2" />
                <div className="text-sm text-text-muted">Email</div>
                <div className="text-sm text-text-primary">hello@crossengine.com</div>
              </div>
              <div className="flex flex-col items-center animate-fadeIn" style={{ animationDelay: '500ms' }}>
                <Phone className="w-5 h-5 text-brand-violet mb-2" />
                <div className="text-sm text-text-muted">Phone</div>
                <div className="text-sm text-text-primary">+66 65 527 2519 / +66 82 415 6949</div>
              </div>
              <div className="flex flex-col items-center animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <MapPin className="w-5 h-5 text-brand-cyan mb-2" />
                <div className="text-sm text-text-muted">Location</div>
                <div className="text-sm text-text-primary">Bangkok, Thailand</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
