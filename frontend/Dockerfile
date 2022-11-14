
# Build Stage 1. Build React App
FROM node:alpine as builder
WORKDIR '/app'
COPY ./re-verse/frontend/package.json .
RUN npm install
COPY ./re-verse/frontend ./
RUN npm run build

# Build Stage 2. Static Server
FROM node:alpine
COPY --from=builder /app/build build
RUN npm install -g serve
ENTRYPOINT [ "serve", "-s", "build" ]
