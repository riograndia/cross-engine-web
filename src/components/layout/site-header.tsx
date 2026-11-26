'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/gpu-cloud', label: 'GPU Cloud' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/infrastructure', label: 'Infrastructure' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/benchmark', label: 'Benchmark' },
  { href: '/company', label: 'Company' },
];

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border-default 
                         bg-background-canvas/80 backdrop-blur-lg">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logos/cross-engine-navbar.png"
                alt="Cross Engine"
                width={154}
                height={48}
                className="object-contain max-h-10 w-auto"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary 
                             hover:text-text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="/pricing">Deploy GPU</Link>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileNavOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm 
                         bg-background-canvas border-l border-border-default 
                         z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border-default">
                  <Image
                    src="/images/logos/cross-engine-navbar.png"
                    alt="Cross Engine"
                    width={120}
                    height={38}
                    className="object-contain max-h-9 w-auto"
                  />
                  <button
                    className="p-2 text-text-secondary hover:text-text-primary"
                    onClick={() => setMobileNavOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-base font-medium text-text-secondary 
                                   hover:text-text-primary transition-colors"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>
                
                {/* Actions */}
                <div className="p-4 border-t border-border-default space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact" onClick={() => setMobileNavOpen(false)}>
                      Contact Sales
                    </Link>
                  </Button>
                  <Button variant="default" className="w-full" asChild>
                    <Link href="/pricing" onClick={() => setMobileNavOpen(false)}>
                      Deploy GPU
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
