import { Hero } from '@/components/sections/hero';
import { PlatformDiagram } from '@/components/sections/platform-diagram';
import { GPUShowcase } from '@/components/sections/gpu-showcase';
import { WhyGrid } from '@/components/sections/why-grid';
import { Certifications } from '@/components/sections/certifications';
import { CTASection } from '@/components/sections/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cross Engine — Enterprise GPU Cloud Platform",
  description: "Deploy high-performance GPU infrastructure in minutes. NVIDIA L40S and RTX PRO 6000 Blackwell for AI, ML, and visual computing workloads.",
  keywords: ["GPU Cloud", "NVIDIA L40S", "RTX Blackwell", "AI Infrastructure", "Machine Learning Cloud", "GPU Rental"],
  openGraph: {
    title: "Cross Engine — Enterprise GPU Cloud Platform",
    description: "Deploy high-performance GPU infrastructure in minutes.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Platform Diagram */}
      <PlatformDiagram />
      
      {/* GPU Showcase */}
      <GPUShowcase />
      
      {/* Why Grid */}
      <WhyGrid />
      
      {/* Certifications */}
      <Certifications />
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
}
