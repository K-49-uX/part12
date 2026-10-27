FROM node:24-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=/api

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
