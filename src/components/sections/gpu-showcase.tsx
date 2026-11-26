'use client';

import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, Zap, MemoryStick, HardDrive, ArrowRight, Rocket, CheckCircle } from 'lucide-react';

interface GPUFamily {
  id: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  architecture: string;
  vram: string;
  cudaCores: string;
  bandwidth: string;
  fp32: string;
  tensorFp16Fp8?: string;
  tensorFp4?: string;
  href: string;
}

const gpuFamilies: GPUFamily[] = [
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
    href: '/gpu-cloud#l40s',
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
    href: '/gpu-cloud#blackwell',
  },
];

export function GPUShowcase() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div
          
          
          
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Real GPU Products. Clear Profiles.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose from the latest NVIDIA data center GPUs with flexible 
            vGPU profiles or dedicated passthrough.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {gpuFamilies.map((gpu, index) => (
            <div
              key={gpu.id}
              
              
              
            >
              <div className="h-full border border-border-default bg-surface-default relative overflow-hidden rounded-xl hover:border-brand-blue/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/10 hover:-translate-y-1 group">
                {/* Image */}
                <div className="relative h-56 lg:h-64 overflow-hidden bg-surface-elevated">
                  <Image
                    src={gpu.image}
                    alt={gpu.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={index === 0}
                    quality={90}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                    {gpu.kicker}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {gpu.name}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {gpu.description}
                  </p>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
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
                  
                  {/* CTA Button */}
                  <Button 
                    variant="default" 
                    asChild 
                    className="w-full h-12 bg-gradient-to-r from-brand-blue to-brand-violet 
                               hover:from-brand-blue/90 hover:to-brand-violet/90 
                               border-0 shadow-lg shadow-brand-blue/25 
                               transition-all duration-300 hover:shadow-xl 
                               hover:shadow-brand-blue/40 hover:-translate-y-0.5 group"
                  >
                    <Link href={gpu.href} className="flex items-center justify-center gap-2">
                      <span>View Profiles</span>
                      <Rocket className="w-5 h-5" />
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
