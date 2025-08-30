FROM ghcr.io/ghostdevv/node:22-alpine AS build

WORKDIR /opt/app

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm build

CMD [ "node", "./dist/server/entry.mjs" ]