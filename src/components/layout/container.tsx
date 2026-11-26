import { ReactNode } from 'react';
import { container } from '@/lib/tokens';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div 
      className={`w-full mx-auto px-[var(--container-padding-x)]`}
      style={{ 
        maxWidth: container.maxWidth,
      }}
    >
      <div className={className}>
        {children}
      </div>
    </div>
  );
}
