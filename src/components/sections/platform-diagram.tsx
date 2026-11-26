'use client';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Zap, Shield, Layers } from 'lucide-react';

export function PlatformDiagram() {
  return (
    <section className="py-16 lg:py-24 bg-background-subtle">
      <Container>
        <div className="text-center mb-12">
          <h2
            
            
            
            
            className="text-3xl lg:text-4xl font-bold text-text-primary mb-4"
          >
            The Cross Engine Platform
          </h2>
          <p
            
            
            
            
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Enterprise-grade GPU infrastructure with flexible delivery modes 
            and production-ready operations.
          </p>
        </div>
        
        <div
          
          
          
          
          className="max-w-5xl mx-auto"
        >
          <Card className="border-border-default bg-surface-default overflow-hidden">
            <CardContent className="p-0">
              <div className="border-b border-border-default p-6 bg-surface-elevated">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-status-success animate-pulse" />
                    <h3 className="text-lg font-semibold text-text-primary">
                      Cross Engine Platform
                    </h3>
                  </div>
                  <Badge variant="secondary">Production Ready</Badge>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-text-secondary mb-3">
                        GPU Compute Pool
                      </h4>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="relative p-4 rounded-lg bg-surface-elevated border border-border-default">
                        <div className="flex items-center gap-2 mb-2">
                          <Cpu className="w-5 h-5 text-brand-blue" />
                          <span className="text-sm font-medium text-text-primary">L40S</span>
                        </div>
                        <div className="text-xs text-text-muted">48 GB GDDR6</div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-status-success" />
                      </div>
                      
                      <div className="relative p-4 rounded-lg bg-surface-elevated border border-border-default">
                        <div className="flex items-center gap-2 mb-2">
                          <Cpu className="w-5 h-5 text-brand-violet" />
                          <span className="text-sm font-medium text-text-primary">Blackwell</span>
                        </div>
                        <div className="text-xs text-text-muted">96 GB GDDR7</div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-status-success" />
                      </div>
                      
                      <div className="relative p-4 rounded-lg bg-surface-elevated border border-border-default">
                        <div className="flex items-center gap-2 mb-2">
                          <Cpu className="w-5 h-5 text-brand-cyan" />
                          <span className="text-sm font-medium text-text-primary">More...</span>
                        </div>
                        <div className="text-xs text-text-muted">Expandable</div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-status-success" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="px-3 py-1">
                        <Zap className="w-3 h-3 mr-1" />
                        vGPU
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1">
                        <Cpu className="w-3 h-3 mr-1" />
                        GPU Passthrough
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="border-l border-border-default lg:pl-6">
                    <h4 className="text-sm font-semibold text-text-secondary mb-4">
                      Operations
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-status-success" />
                        <span className="text-sm text-text-primary">Enterprise Security</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm text-text-primary">Nutanix AHV</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-brand-violet" />
                        <span className="text-sm text-text-primary">Instant Deploy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-brand-cyan" />
                        <span className="text-sm text-text-primary">24/7 Monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border-default">
                  <p className="text-xs text-text-muted text-center">
                    Powered by <span className="font-semibold">Nutanix AHV</span> virtualization 
                    with NVIDIA GPU passthrough and vGPU technology
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
