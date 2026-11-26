'use client';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  Server,
  Network
} from 'lucide-react';

const benchmarks = [
  {
    category: 'AI Inference',
    gpu: 'NVIDIA L40S',
    metric: 'Tokens/sec',
    value: '1,250',
    comparison: '2.3x faster than A10',
    icon: Zap,
    color: 'text-brand-blue',
  },
  {
    category: 'LLM Training',
    gpu: 'RTX PRO 6000 Blackwell',
    metric: 'TFLOPS FP4',
    value: '4,000',
    comparison: 'Next-gen performance',
    icon: Cpu,
    color: 'text-brand-violet',
  },
  {
    category: 'Memory Bandwidth',
    gpu: 'RTX PRO 6000 Blackwell',
    metric: 'GB/s',
    value: '1,597',
    comparison: '85% faster than L40S',
    icon: MemoryStick,
    color: 'text-brand-cyan',
  },
  {
    category: 'Storage I/O',
    gpu: 'All GPUs',
    metric: 'IOPS',
    value: '2M+',
    comparison: 'NVMe SSD storage',
    icon: HardDrive,
    color: 'text-brand-pink',
  },
];

const performanceMetrics = [
  {
    label: 'Network Latency',
    value: '<1ms',
    description: 'Intra-datacenter',
    icon: Clock,
    color: 'text-status-success',
  },
  {
    label: 'Network Speed',
    value: '100Gbps',
    description: 'RDMA fabric',
    icon: Network,
    color: 'text-brand-blue',
  },
  {
    label: 'GPU Availability',
    value: '99.9%',
    description: 'Uptime SLA',
    icon: CheckCircle,
    color: 'text-status-success',
  },
  {
    label: 'Deployment Time',
    value: '<5min',
    description: 'Instant provisioning',
    icon: Server,
    color: 'text-brand-violet',
  },
];

export default function BenchmarkPage() {
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
              Performance Benchmarks
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 glow-text">
              Industry-Leading Performance
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real-world benchmarks from our GPU cloud platform. 
              See how our infrastructure performs on AI, ML, and high-performance computing workloads.
            </p>
          </div>
        </Container>
      </section>

      {/* Benchmark Cards */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benchmarks.map((benchmark, index) => (
              <div
                key={benchmark.category}
                className="animate-slideUp hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-border-default bg-surface-default hover:border-brand-blue/30 transition-all gradient-border-animated">
                  <CardContent className="p-6">
                    <benchmark.icon className={`w-10 h-10 ${benchmark.color} mb-4`} />
                    <div className="text-sm text-text-muted mb-2">
                      {benchmark.category}
                    </div>
                    <div className="text-3xl font-bold text-text-primary mb-1 glow-text">
                      {benchmark.value}
                    </div>
                    <div className="text-xs text-text-muted mb-3">
                      {benchmark.metric}
                    </div>
                    <div className="text-xs text-status-success font-medium">
                      {benchmark.comparison}
                    </div>
                    <div className="text-xs text-text-muted mt-2">
                      {benchmark.gpu}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-surface-elevated rounded-2xl p-8 lg:p-12 border border-border-default gradient-border-animated animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 glow-text-violet">
                Platform Performance
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Infrastructure metrics that matter for production workloads
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="text-center p-6 rounded-xl bg-surface-default/50 border border-border-subtle backdrop-blur-sm hover-lift animate-fadeIn"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3 animate-pulse-slow`} />
                  <div className={`text-3xl font-bold ${metric.color} mb-1 glow-text`}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-text-muted">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-24 bg-background-subtle">
        <Container>
          <div className="text-center mb-12 animate-fadeIn">
            <Badge variant="secondary" className="mb-4 sparkle">
              Competitive Advantage
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 glow-text">
              Why Choose Cross Engine
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Compare our platform with traditional cloud providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Cost Efficiency',
                value: '60%',
                description: 'Lower cost than major clouds',
                trend: 'vs AWS/Azure/GCP',
                color: 'text-status-success',
              },
              {
                title: 'Performance',
                value: '2-3x',
                description: 'Faster inference speeds',
                trend: 'vs standard instances',
                color: 'text-brand-blue',
              },
              {
                title: 'Deployment',
                value: '10x',
                description: 'Faster provisioning',
                trend: 'minutes vs hours',
                color: 'text-brand-violet',
              },
            ].map((stat, index) => (
              <div
                key={stat.title}
                className="text-center p-8 rounded-xl bg-surface-default border border-border-default hover-lift gradient-border-animated animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`text-5xl font-bold ${stat.color} mb-3 glow-text`}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-2">
                  {stat.title}
                </div>
                <div className="text-sm text-text-secondary mb-1">
                  {stat.description}
                </div>
                <div className="text-xs text-text-muted">
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
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
              Ready to Test Performance?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Deploy your workload on our high-performance GPU infrastructure and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Badge variant="outline" className="bg-status-success/10 text-status-success border-status-success/30 animate-pulse-slow">
                  <Award className="w-4 h-4 mr-2" />
                  Verified Benchmarks
                </Badge>
                <Badge variant="outline" className="bg-brand-blue/10 text-brand-blue border-brand-blue/30 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Real-time Monitoring
                </Badge>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
