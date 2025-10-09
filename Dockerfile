FROM node:lts-alpine3.21
WORKDIR /frontend
COPY app /frontend/app
COPY public /frontend/public
COPY next.config.ts next-env.d.ts package.json package-lock.json tsconfig.json postcss.config.mjs /frontend/
RUN npm i
CMD ["npm", "run", "dev"]