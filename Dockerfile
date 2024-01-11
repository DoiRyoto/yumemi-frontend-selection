# deps
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# builder
FROM node:18 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# runner
FROM node:18 AS runner
WORKDIR /app

COPY --from=builder /app/package.json  package.json
COPY --from=builder /app/public        public
COPY --from=builder /app/.next         .next
COPY --from=builder /app/node_modules  node_modules

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1
ENV RESAS_API_KEY {$RESAS_API_KEY}
ENV PORT 3000

CMD ["npm", "run", "start"]