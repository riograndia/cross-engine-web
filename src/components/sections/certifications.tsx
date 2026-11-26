'use client';

import { Container } from '@/components/layout/container';
import Image from 'next/image';

const certifications = [
  { name: 'CSA STAR', image: '/images/certs/csa-star.png', description: 'Cloud Security Alliance' },
  { name: 'ISO/IEC 27001:2022', image: '/images/certs/iso27001.png', description: 'Information Security Management' },
  { name: 'ISO 27017:2015', image: '/images/certs/iso27017.png', description: 'Cloud Security' },
  { name: 'ISO 22301:2012', image: '/images/certs/iso22301.png', description: 'Business Continuity Management' },
  { name: 'ISO/IEC 20000-1:2018', image: '/images/certs/iso20000.png', description: 'IT Service Management' },
  { name: 'SOC 2 Type II', image: '/images/certs/soc2.png', description: 'Security & Availability' },
];

export function Certifications() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div     className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Trusted & Certified</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Enterprise-grade security and compliance certifications you can trust.</p>
        </div>
        
        <div     className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={cert.name}     className="flex flex-col items-center">
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 mb-4 bg-surface-default rounded-xl overflow-hidden border border-border-default hover:border-brand-blue/30 transition-colors">
                <Image src={cert.image} alt={cert.name} fill className="object-cover" />
              </div>
              <div className="text-sm font-medium text-text-primary text-center mb-1">{cert.name}</div>
              <div className="text-xs text-text-muted text-center">{cert.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
