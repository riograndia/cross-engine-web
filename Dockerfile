# syntax=docker/dockerfile:1
# Multi-stage build สำหรับ Next.js 16 (Production)
# stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

# stage 2: run
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3333
# สร้าง user non-root สำหรับความปลอดภัย
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./.next/standalone
COPY --from=builder /app/.next/static ./.next/static
USER nextjs
EXPOSE 3333
CMD ["node", ".next/standalone/server.js"]
