// Design Tokens for Cross Engine GPU Cloud
// Based on V9 Cloud Slate / Deep Azure theme

export const colors = {
  // Backgrounds
  background: {
    canvas: '#0b1730',
    subtle: '#10213a',
  },
  
  // Surfaces
  surface: {
    default: '#122640',
    elevated: '#172d49',
  },
  
  // Text
  text: {
    primary: '#f7f9fc',
    secondary: '#b3c0d2',
    muted: '#9aa8bc',
  },
  
  // Brand
  brand: {
    blue: '#3d8dff',
    violet: '#7767ff',
    cyan: '#6cc5ff',
    pink: '#aa5df7',
  },
  
  // Status
  status: {
    success: '#73d9a3',
    warning: '#e1b96e',
    danger: '#ed5d67',
    info: '#3d8dff',
  },
  
  // Borders
  border: {
    subtle: 'rgba(176, 196, 226, 0.15)',
    default: 'rgba(176, 196, 226, 0.20)',
    strong: 'rgba(176, 196, 226, 0.30)',
  },
  
  // Shadows
  shadow: {
    sm: '0 2px 4px rgba(4, 13, 31, 0.10)',
    md: '0 8px 16px rgba(4, 13, 31, 0.12)',
    lg: '0 14px 34px rgba(4, 13, 31, 0.16)',
    xl: '0 22px 58px rgba(47, 66, 150, 0.20)',
  },
  
  // Radius
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  
  fontSize: {
    xs: '12px',
    sm: '13px',
    base: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '38px',
    '5xl': '48px',
    '6xl': '64px',
    '7xl': '80px',
  },
  
  lineHeight: {
    xs: '16px',
    sm: '18px',
    base: '20px',
    lg: '24px',
    xl: '26px',
    '2xl': '30px',
    '3xl': '36px',
    '4xl': '44px',
    '5xl': '52px',
    '6xl': '68px',
    '7xl': '84px',
  },
  
  letterSpacing: {
    tight: '-0.03em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.22em',
  },
} as const;

export const spacing = {
  section: '78px',
  sectionSm: '58px',
  card: '24px',
  
  gap: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
  },
} as const;

export const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait
  lg: '1024px',  // Tablet landscape
  xl: '1280px',  // Desktop
  '2xl': '1536px', // Large desktop
} as const;

export const container = {
  maxWidth: '1240px',
  paddingX: '24px',
} as const;
