'use client';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, Zap, MemoryStick, HardDrive, ArrowRight, CheckCircle } from 'lucide-react';
const gpuProducts = [
  {
    id: 'l40s',
    name: 'NVIDIA L40S',
    kicker: 'Ada Lovelace Architecture',
    description: 'Versatile GPU for AI inference, visual computing, and enterprise workloads with exceptional performance per watt.',
    image: '/images/gpus/l40s-new.jpg',
    architecture: 'Ada Lovelace',
    vram: '48 GB GDDR6 ECC',
    cudaCores: '18,176',
    bandwidth: '864 GB/s',
    fp32: '91.6 TFLOPS',
    tensorFp16Fp8: '733 / 1,466 TFLOPS',
    rtCores: '142 (3rd Gen)',
    tensorCores: '568 (4th Gen)',
    power: '350 W',
    profiles: [
      { name: 'Small', vgpuVram: '8 GB', vcpu: '4 Core', ram: '8 GB', disk: '200 GB' },
      { name: 'Medium', vgpuVram: '16 GB', vcpu: '8 Core', ram: '16 GB', disk: '300 GB' },
      { name: 'Large', vgpuVram: '48 GB', vcpu: '16 Core', ram: '64 GB', disk: '500 GB' },
    ],
  },
  {
    id: 'blackwell',
    name: 'NVIDIA RTX PRO 6000 Blackwell',
    kicker: 'Blackwell Server Edition',
    description: 'Next-generation GPU with breakthrough performance for large-scale AI training and inference workloads.',
    image: '/images/gpus/blackwell.jpg',
    architecture: 'Blackwell',
    vram: '96 GB GDDR7',
    cudaCores: '24,064',
    bandwidth: '1,597 GB/s',
    fp32: '120 TFLOPS',
    tensorFp4: '4,000 TFLOPS',
    rtCores: '188 (4th Gen)',
    tensorCores: '752 (5th Gen)',
    power: 'TBD',
    profiles: [
      { name: 'Medium', vgpuVram: '24 GB', vcpu: '8 Core', ram: '32 GB', disk: '300 GB' },
      { name: 'Large', vgpuVram: '48 GB', vcpu: '16 Core', ram: '64 GB', disk: '500 GB' },
      { name: 'X-Large', vgpuVram: '96 GB', vcpu: '32 Core', ram: '128 GB', disk: '1024 GB' },
    ],
  },
];
export default function GPUCloudPage() {
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
              GPU Products
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 glow-text">
              Choose Your GPU
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Select from the latest NVIDIA data center GPUs with flexible vGPU profiles 
              or dedicated GPU passthrough for maximum performance.
            </p>
          </div>
        </Container>
      </section>
      {/* GPU Products */}
      {gpuProducts.map((gpu, gpuIndex) => (
        <section key={gpu.id} id={gpu.id} className="py-16 lg:py-24">
          <Container>
            <div
              
              
              
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              {/* GPU Image & Info */}
              <div>
                <Badge variant="secondary" className="mb-3">
                  {gpu.kicker}
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                  {gpu.name}
                </h2>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {gpu.description}
                </p>
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden bg-surface-elevated mb-8">
                  <Image
                    src={gpu.image}
                    alt={gpu.name}
                    fill
                    className="object-cover object-center"
                    priority={gpuIndex === 0}
                    quality={90}
                  />
                </div>
                {/* Technical Specifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <MemoryStick className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-text-primary">{gpu.vram}</div>
                        <div className="text-xs text-text-muted">VRAM</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Cpu className="w-5 h-5 text-brand-violet mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-text-primary">{gpu.cudaCores}</div>
                        <div className="text-xs text-text-muted">CUDA Cores</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-text-primary">{gpu.bandwidth}</div>
                        <div className="text-xs text-text-muted">Bandwidth</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <HardDrive className="w-5 h-5 text-brand-pink mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-text-primary">{gpu.fp32}</div>
                        <div className="text-xs text-text-muted">Single Precision (FP32)</div>
                      </div>
                    </div>
                    {gpu.tensorFp16Fp8 && (
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-status-success mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-text-primary">{gpu.tensorFp16Fp8}</div>
                          <div className="text-xs text-text-muted">Tensor FP16/FP8</div>
                        </div>
                      </div>
                    )}
                    {gpu.tensorFp4 && (
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-status-success mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-text-primary">{gpu.tensorFp4}</div>
                          <div className="text-xs text-text-muted">Tensor FP4</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Button variant="default" size="lg" asChild className="h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-0.5 group">
                  <Link href="/pricing" className="flex items-center gap-2">
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              {/* vGPU Profiles */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Flexible vGPU Profiles
                </h3>
                <div className="space-y-4">
                  {gpu.profiles.map((profile, profileIndex) => (
                    <div
                      key={profile.name}
                      
                      
                    >
                      <Card className="border-border-default bg-surface-default hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                                gpu.id === 'blackwell'
                                  ? profile.vgpuVram.includes('96') 
                                    ? 'bg-gradient-to-br from-red-500/20 to-red-500/10 border-red-500/40'
                                    : profile.vgpuVram.includes('48')
                                    ? 'bg-gradient-to-br from-amber-500/20 to-amber-500/10 border-amber-500/40'
                                    : 'bg-gradient-to-br from-green-500/20 to-green-500/10 border-green-500/40'
                                  : profile.vgpuVram.includes('48') 
                                    ? 'bg-gradient-to-br from-red-500/20 to-red-500/10 border-red-500/40'
                                    : profile.vgpuVram.includes('16')
                                    ? 'bg-gradient-to-br from-amber-500/20 to-amber-500/10 border-amber-500/40'
                                    : 'bg-gradient-to-br from-green-500/20 to-green-500/10 border-green-500/40'
                              }`}>
                                <Cpu className={`w-6 h-6 ${
                                  gpu.id === 'blackwell'
                                    ? profile.vgpuVram.includes('96') 
                                      ? 'text-red-500'
                                      : profile.vgpuVram.includes('48')
                                      ? 'text-amber-500'
                                      : 'text-green-500'
                                    : profile.vgpuVram.includes('48') 
                                      ? 'text-red-500'
                                      : profile.vgpuVram.includes('16')
                                      ? 'text-amber-500'
                                      : 'text-green-500'
                                }`} />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-text-primary">
                                  {profile.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-sm text-text-muted font-medium">
                                    vGPU Profile
                                  </span>
                                  <Badge variant="outline" className={`${
                                    gpu.id === 'blackwell'
                                      ? profile.vgpuVram.includes('96')
                                        ? 'bg-gradient-to-r from-red-500/20 to-red-500/10 text-red-500 border-red-500/50'
                                        : profile.vgpuVram.includes('48')
                                        ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/10 text-amber-500 border-amber-500/50'
                                        : 'bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-500 border-green-500/50'
                                      : profile.vgpuVram.includes('48')
                                        ? 'bg-gradient-to-r from-red-500/20 to-red-500/10 text-red-500 border-red-500/50'
                                        : profile.vgpuVram.includes('16')
                                        ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/10 text-amber-500 border-amber-500/50'
                                        : 'bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-500 border-green-500/50'
                                  } text-sm px-3 py-1 font-bold`}>
                                    {profile.vgpuVram}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-default">
                            <div className="text-center">
                              <div className="text-xs text-text-muted mb-1 flex items-center justify-center gap-1">
                                <Cpu className="w-3.5 h-3.5" />
                                vCPU
                              </div>
                              <div className="text-base font-bold text-text-primary">{profile.vcpu}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-text-muted mb-1 flex items-center justify-center gap-1">
                                <MemoryStick className="w-3.5 h-3.5" />
                                RAM
                              </div>
                              <div className="text-base font-bold text-text-primary">{profile.ram}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-text-muted mb-1 flex items-center justify-center gap-1">
                                <HardDrive className="w-3.5 h-3.5" />
                                Storage
                              </div>
                              <div className="text-base font-bold text-text-primary">{profile.disk}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
                {/* GPU Passthrough Callout */}
                <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-brand-violet/10 to-brand-blue/10 border border-brand-blue/30">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    Need Maximum Performance?
                  </h4>
                  <p className="text-sm text-text-secondary mb-4">
                    GPU Passthrough gives you dedicated access to the entire physical GPU with no virtualization overhead.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">
                      Contact Sales
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
