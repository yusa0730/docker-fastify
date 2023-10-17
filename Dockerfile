FROM node:18.16.1 as base

WORKDIR /opt/app

COPY package.json .
COPY yarn.lock .

FROM base as deps

RUN yarn install --frozen-lockfile

FROM deps as build

COPY . .

RUN yarn build

FROM base as final

COPY --from=build /opt/app/package.json ./package.json
COPY --from=build /opt/app/dist ./dist

RUN yarn install --frozen-lockfile --production

CMD node dist/bootstrap.js

EXPOSE 8000