FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# CMD ["npm", "start"]

# FROM node:16-alpine AS BUILDER
# WORKDIR /app
# RUN rm -rf ./dist
# COPY package.json ./
# COPY . ./
# RUN npm install
# RUN npm run build
# FROM node:16-alpine AS RUNNER
# WORKDIR /app
# COPY --from=BUILDER /app/dist/* /app/src
# COPY package.json /app/
# RUN npm install --omit=dev
# # EXPOSE 8080
# # CMD [ "node", "src/index.js" ]
