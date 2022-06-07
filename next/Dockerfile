FROM node:16.3.0-alpine
WORKDIR /app

COPY package.json package-lock.json  ./
RUN npm i

COPY next.config.js ./next.config.js

COPY . .

CMD ["npm", "run", "dev"]