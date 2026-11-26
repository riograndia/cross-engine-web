'use client';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Monitor, 
  Settings, 
  Layers, 
  Cpu, 
  Server, 
  Shield, 
  Zap, 
  Network, 
  HardDrive, 
  Activity,
  Gauge,
  Lock,
  Users
} from 'lucide-react';

interface Layer {
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  components: { name: string; icon: any }[];
}

const layers: Layer[] = [
  {
    title: 'Management Layer',
    subtitle: 'User Interface & Control',
    icon: Monitor,
    color: 'text-brand-blue',
    bgColor: 'bg-brand-blue/5',
    borderColor: 'border-brand-blue/30',
    components: [
      { name: 'Dashboard', icon: Gauge },
      { name: 'API', icon: Network },
      { name: 'CLI', icon: Server },
      { name: 'Monitoring', icon: Activity },
    ],
  },
  {
    title: 'Orchestration Layer',
    subtitle: 'Automation & Scheduling',
    icon: Settings,
    color: 'text-brand-violet',
    bgColor: 'bg-brand-violet/5',
    borderColor: 'border-brand-violet/30',
    components: [
      { name: 'Provisioning', icon: Settings },
      { name: 'Auto-scaling', icon: Zap },
      { name: 'Load Balancing', icon: Network },
      { name: 'Scheduling', icon: Gauge },
    ],
  },
  {
    title: 'Virtualization Layer',
    subtitle: 'GPU Abstraction & Management',
    icon: Layers,
    color: 'text-brand-cyan',
    bgColor: 'bg-brand-cyan/5',
    borderColor: 'border-brand-cyan/30',
    components: [
      { name: 'vGPU Manager', icon: Layers },
      { name: 'GPU Passthrough', icon: Cpu },
      { name: 'Nutanix AHV', icon: Server },
      { name: 'Resource Pooling', icon: Gauge },
    ],
  },
  {
    title: 'GPU Compute Layer',
    subtitle: 'High-Performance Computing',
    icon: Cpu,
    color: 'text-brand-pink',
    bgColor: 'bg-brand-pink/5',
    borderColor: 'border-brand-pink/30',
    components: [
      { name: 'L40S Pool', icon: Cpu },
      { name: 'Blackwell Pool', icon: Cpu },
      { name: 'Mixed GPU', icon: Server },
      { name: 'GPU Direct', icon: Zap },
    ],
  },
  {
    title: 'Infrastructure Layer',
    subtitle: 'Physical Foundation',
    icon: Server,
    color: 'text-status-success',
    bgColor: 'bg-status-success/5',
    borderColor: 'border-status-success/30',
    components: [
      { name: 'High-speed Network', icon: Network },
      { name: 'NVMe Storage', icon: HardDrive },
      { name: 'Power & Cooling', icon: Zap },
      { name: 'Physical Security', icon: Lock },
    ],
  },
  {
    title: 'Security & Compliance',
    subtitle: 'Protection Across All Layers',
    icon: Shield,
    color: 'text-status-warning',
    bgColor: 'bg-status-warning/5',
    borderColor: 'border-status-warning/30',
    components: [
      { name: 'Firewall', icon: Shield },
      { name: 'IAM', icon: Users },
      { name: 'Encryption', icon: Lock },
      { name: 'Compliance', icon: Shield },
    ],
  },
];

export function PlatformArchitecture() {
  return (
    <section className="py-16 lg:py-24 bg-background-subtle">
      <Container>
        {/* Section Header */}
        <div
          
          
          
          className="text-center mb-12 lg:mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Platform Architecture
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            The Cross Engine Platform
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Enterprise-grade GPU cloud infrastructure built on industry-leading technology 
            with comprehensive management, security, and automation.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-6xl mx-auto space-y-4">
          {layers.map((layer, layerIndex) => (
            <div
              key={layer.title}
              
              
              
              
            >
              <Card className={`overflow-hidden border ${layer.borderColor} ${layer.bgColor} hover:shadow-lg transition-all duration-300`}>
                <div className="p-6">
                  {/* Layer Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${layer.bgColor} flex items-center justify-center border ${layer.borderColor}`}>
                      <layer.icon className={`w-6 h-6 ${layer.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${layer.color} mb-1`}>
                        {layer.title}
                      </h3>
                      <p className="text-sm text-text-muted">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Components Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {layer.components.map((component, compIndex) => (
                      <div
                        key={component.name}
                        
                        
                        
                        
                        className="flex items-center gap-2 p-3 rounded-lg bg-surface-default/50 border border-border-subtle hover:border-brand-blue/30 transition-colors"
                      >
                        <component.icon className={`w-4 h-4 ${layer.color} flex-shrink-0`} />
                        <span className="text-sm text-text-secondary">
                          {component.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Connection Lines (Visual Enhancement) */}
        <div className="max-w-6xl mx-auto mt-8">
          <div
            
            
            
            
            className="flex items-center justify-center gap-2 text-text-muted text-sm"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
            <span>Secure • Scalable • High-Performance</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
