FROM node:18-alpine as base
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run test:ci
RUN npm run build
CMD npm run start