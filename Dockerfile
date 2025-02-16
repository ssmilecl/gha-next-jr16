FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY prisma ./prisma

COPY . .
RUN npm run build

FROM node:18 as runtime

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
USER node
CMD ["npm", "start"]
