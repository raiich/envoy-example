FROM node:alpine

COPY package.json package.json
RUN yarn install --production

COPY . .
CMD ["node", "app.js"]
