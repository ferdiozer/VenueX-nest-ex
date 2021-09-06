FROM node:16.4.1
WORKDIR /app
ADD . .

CMD ["node", "dist/main.js"]