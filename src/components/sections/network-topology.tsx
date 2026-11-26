'use client';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  ShieldCheck, 
  Database, 
  TrendingUp, 
  Building2, 
  Server,
  Cpu,
  Cloud,
  Network,
  ArrowRight
} from 'lucide-react';

export function NetworkTopology() {
  return (
    <section className="py-16 lg:py-24 bg-background-subtle">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Network Topology
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Scalable, redundant, and resilient infrastructure for enterprise AI workloads.
          </p>
        </div>

        {/* 4 Key Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: Globe,
              color: 'text-[#8b5cf6]',
              title: 'High Performance',
              desc: 'Low-latency network fabric',
            },
            {
              icon: ShieldCheck,
              color: 'text-[#3b82f6]',
              title: 'High Availability',
              desc: 'Redundant across layers',
            },
            {
              icon: Database,
              color: 'text-[#06b6d4]',
              title: 'Data Protection',
              desc: 'Onsite + Offsite backup',
            },
            {
              icon: TrendingUp,
              color: 'text-[#10b981]',
              title: 'Future Ready',
              desc: 'Scale seamlessly as you grow',
            },
          ].map((feature) => (
            <Card key={feature.title} className="bg-[#0f2040] border border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-4 text-center">
                <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3`} />
                <h3 className="text-sm font-semibold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Internet & Connectivity */}
        <div className="border-2 border-[#8b5cf6] rounded-xl p-6 mb-12 relative">
          <h3 className="text-center text-[#8b5cf6] uppercase font-semibold text-sm tracking-wider mb-6">
            Internet & Connectivity (Redundant)
          </h3>
          
          <div className="relative">
            {/* Connection Lines Layer */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-[14%] w-0.5 h-6 bg-[#06b6d4]"></div>
              <div className="absolute top-10 left-[33%] w-0.5 h-6 bg-[#06b6d4]"></div>
              <div className="absolute top-14 left-[38%] right-[8%] h-0.5 bg-[#3b82f6]"></div>
            </div>
            
            {/* Content Layer */}
            <div className="flex gap-6 relative z-10 items-stretch">
              <Card className="flex-[2] border-2 border-[#06b6d4] bg-[#0f2040] h-full">
                <CardContent className="p-8">
                  <div className="text-center text-[#06b6d4] text-xs font-semibold mb-8 uppercase tracking-wider">
                    Redundant IDCs
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((idc) => (
                      <div key={idc} className="text-center">
                        <Building2 className="w-8 h-8 text-[#8b5cf6] mx-auto mb-2" />
                        <div className="text-white font-medium text-sm">IDC #{idc}</div>
                        <div className="text-xs text-gray-400">Network Entry Point</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-1 border-2 border-[#3b82f6] bg-[#0f2040] h-full min-w-[160px]">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <Network className="w-10 h-10 text-[#3b82f6] mb-3" />
                  <div className="text-center text-[#3b82f6] text-[9px] font-semibold uppercase tracking-wider leading-none mb-2">
                    Management<br />Network
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[10px] text-gray-400">
                    <div className="flex items-center gap-1"><Cloud className="w-3 h-3" />VDSM</div>
                    <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" />FW</div>
                    <div className="flex items-center gap-1"><Server className="w-3 h-3" />LB1</div>
                    <div className="flex items-center gap-1"><Server className="w-3 h-3" />LB2</div>
                    <div className="flex items-center gap-1"><Database className="w-3 h-3" />DB</div>
                    <div className="flex items-center gap-1"><Cloud className="w-3 h-3" />VMP</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* GPU Service Environments */}
        <div className="relative mb-12">
          <div className="absolute -top-12 left-[25%] w-0.5 h-12 bg-[#10b981] hidden lg:block"></div>
          <div className="absolute -top-12 right-1/4 w-0.5 h-12 bg-[#8b5cf6] hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border-2 border-[#10b981] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[#10b981] font-bold text-lg">
                  L40S GPU Service Environment
                </h3>
                <Badge className="bg-[#10b981]/20 text-[#10b981] border-0">
                  2 Clusters
                </Badge>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[1, 2].map((cluster) => (
                  <Card key={cluster} className="bg-[#0f2040] border border-[#10b981]">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-5 h-5 text-[#10b981]" />
                        <span className="text-white font-semibold text-sm">L40S Cluster {cluster}</span>
                      </div>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div className="flex items-center gap-1">
                          <Server className="w-3 h-3" />
                          <span>8× NVIDIA L40S 48GB</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Database className="w-3 h-3" />
                          <span>NVMe SSD Storage</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Network className="w-3 h-3" />
                          <span>100Gbps RDMA</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="relative h-6 mb-2">
                <div className="absolute top-0 left-1/4 w-0.5 h-4 bg-[#10b981]"></div>
                <div className="absolute top-0 right-1/4 w-0.5 h-4 bg-[#10b981]"></div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((node) => (
                  <div key={node} className="bg-[#0f2040] border border-[#10b981] rounded-lg p-2 text-center">
                    <Server className="w-4 h-4 text-[#10b981] mx-auto mb-1" />
                    <div className="text-[10px] text-white">L40S</div>
                    <div className="text-[8px] text-gray-400">{node}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-[#8b5cf6] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[#8b5cf6] font-bold text-lg">
                  RTX PRO 6000 GPU Service Environment
                </h3>
                <Badge className="bg-[#8b5cf6]/20 text-[#8b5cf6] border-0">
                  2 Clusters
                </Badge>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[1, 2].map((cluster) => (
                  <Card key={cluster} className="bg-[#0f2040] border border-[#8b5cf6]">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-5 h-5 text-[#8b5cf6]" />
                        <span className="text-white font-semibold text-sm">RTX Cluster {cluster}</span>
                      </div>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div className="flex items-center gap-1">
                          <Server className="w-3 h-3" />
                          <span>8× RTX PRO 6000</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Database className="w-3 h-3" />
                          <span>NVMe SSD Storage</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Network className="w-3 h-3" />
                          <span>100Gbps RDMA</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="relative h-6 mb-2">
                <div className="absolute top-0 left-1/4 w-0.5 h-4 bg-[#8b5cf6]"></div>
                <div className="absolute top-0 right-1/4 w-0.5 h-4 bg-[#8b5cf6]"></div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((node) => (
                  <div key={node} className="bg-[#0f2040] border border-[#8b5cf6] rounded-lg p-2 text-center">
                    <Server className="w-4 h-4 text-[#8b5cf6] mx-auto mb-1" />
                    <div className="text-[10px] text-white">RTX</div>
                    <div className="text-[8px] text-gray-400">{node}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Backup Architecture */}
        <div className="border-2 border-[#3b82f6] rounded-xl p-6 mb-12 relative">
          <div className="absolute -top-12 left-[25%] w-0.5 h-12 bg-[#10b981] hidden lg:block"></div>
          <div className="absolute -top-12 right-[25%] w-0.5 h-12 bg-[#8b5cf6] hidden lg:block"></div>
          
          <h3 className="text-center text-[#3b82f6] uppercase font-semibold text-sm tracking-wider mb-6">
            BACKUP ARCHITECTURE
          </h3>
          
          <div className="flex flex-wrap justify-between items-center gap-4 relative z-10">
            <Card className="bg-[#0f2040] border border-[#3b82f6] flex-1 min-w-[200px] relative z-10">
              <CardContent className="p-4 text-center">
                <Database className="w-8 h-8 text-[#3b82f6] mx-auto mb-2" />
                <div className="text-white font-semibold text-sm mb-1">Onsite Backup</div>
                <div className="text-xs text-gray-400">Daily 7+7</div>
              </CardContent>
            </Card>

            <div className="flex items-center text-[#3b82f6]">
              <ArrowRight className="w-6 h-6" />
            </div>

            <Card className="bg-[#0f2040] border border-[#3b82f6] flex-1 min-w-[200px] relative z-10">
              <CardContent className="p-4 text-center">
                <ShieldCheck className="w-8 h-8 text-[#3b82f6] mx-auto mb-2" />
                <div className="text-white font-semibold text-sm mb-1">Encrypted Replication</div>
                <div className="text-xs text-gray-400">Monthly 1 offsite</div>
              </CardContent>
            </Card>

            <div className="flex items-center text-[#3b82f6]">
              <ArrowRight className="w-6 h-6" />
            </div>

            <Card className="bg-[#0f2040] border border-[#3b82f6] flex-1 min-w-[200px] relative z-10">
              <CardContent className="p-4 text-center">
                <Globe className="w-8 h-8 text-[#3b82f6] mx-auto mb-2" />
                <div className="text-white font-semibold text-sm mb-1">Disaster Recovery (Offsite)</div>
                <div className="text-xs text-gray-400">Geo-redundant</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-[#0f2040] rounded-lg p-4">
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[#8b5cf6]"></div>
              <span>Internet / External Connectivity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[#3b82f6]"></div>
              <span>Management Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[#06b6d4]"></div>
              <span>IDC Interconnect</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[#10b981]"></div>
              <span>L40S Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[#8b5cf6]"></div>
              <span>RTX PRO 6000 Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 border-t-2 border-dashed border-[#3b82f6]"></div>
              <span>Backup Replication</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
