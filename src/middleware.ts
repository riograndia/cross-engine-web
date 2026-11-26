import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limit store (for single instance)
// For production, use Redis or Cloudflare KV
const requestStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  windowMs: 60 * 1000, // 1 minute window
  maxRequests: 100,     // 100 requests per minute per IP (increased from 30)
  burstLimit: 20,       // Allow burst of 20 requests in 1 second
};

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  const path = request.nextUrl.pathname;
  const now = Date.now();

  // Skip rate limiting for static assets
  if (
    path.startsWith('/_next/static') ||
    path.startsWith('/_next/image') ||
    path.endsWith('.ico') ||
    path.endsWith('.png') ||
    path.endsWith('.jpg') ||
    path.endsWith('.css') ||
    path.endsWith('.js')
  ) {
    return NextResponse.next();
  }

  // Get or create rate limit entry for this IP
  const entry = requestStore.get(ip);
  
  if (!entry || now > entry.resetTime) {
    // New window
    requestStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return NextResponse.next();
  }

  // Check if rate limit exceeded
  if (entry.count >= RATE_LIMIT.maxRequests) {
    // Return 429 Too Many Requests
    return new NextResponse(
      JSON.stringify({
        error: 'Too Many Requests',
        message: 'Rate limit exceeded. Please try again later.',
        retryAfter: Math.ceil((entry.resetTime - now) / 1000),
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': RATE_LIMIT.maxRequests.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': entry.resetTime.toString(),
          'Retry-After': Math.ceil((entry.resetTime - now) / 1000).toString(),
        },
      }
    );
  }

  // Increment counter
  entry.count++;
  requestStore.set(ip, entry);

  // Add rate limit headers to response
  const response = NextResponse.next();
  response.headers.set('X-RateLimit-Limit', RATE_LIMIT.maxRequests.toString());
  response.headers.set('X-RateLimit-Remaining', (RATE_LIMIT.maxRequests - entry.count).toString());
  response.headers.set('X-RateLimit-Reset', entry.resetTime.toString());

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|ico|woff|woff2)).*)',
  ],
};
