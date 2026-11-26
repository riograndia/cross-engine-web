'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Server, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-default flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Icons */}
        <motion.div
          
          className="flex items-center justify-center gap-8 mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            
          >
            <Server className="w-16 h-16 text-brand-blue/50" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            
          >
            <Zap className="w-20 h-20 text-brand-violet/50" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            
          >
            <Shield className="w-16 h-16 text-brand-blue/50" />
          </motion.div>
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          
          className="text-9xl font-bold text-text-primary mb-4"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          
          
          className="text-3xl font-bold text-text-primary mb-4"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          
          
          className="text-lg text-text-secondary mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          
          
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button
              size="lg"
              className="h-12 px-6 bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue/90 hover:to-brand-violet/90 border-0 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 border-border-default hover:bg-surface-elevated"
            >
              Contact Support
            </Button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          
          
          className="mt-12 pt-8 border-t border-border-default"
        >
          <p className="text-sm text-text-muted mb-4">Popular Pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/gpu-cloud" className="text-sm text-brand-blue hover:underline">
              GPU Cloud
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/pricing" className="text-sm text-brand-blue hover:underline">
              Pricing
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/infrastructure" className="text-sm text-brand-blue hover:underline">
              Infrastructure
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/solutions" className="text-sm text-brand-blue hover:underline">
              Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
