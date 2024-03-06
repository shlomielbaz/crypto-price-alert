FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

# CMD ["npm", "start"]

# FROM node:16-alpine as BUILDER
# WORKDIR /app
# COPY . .
# RUN npm ci
# RUN npm run build
# FROM nginx:1.21.0-alpine as RUNNER
# ENV NODE_ENV production
# COPY --from=BUILDER /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]