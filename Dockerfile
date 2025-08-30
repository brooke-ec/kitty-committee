FROM ghcr.io/ghostdevv/node:22-alpine AS build

WORKDIR /opt/app

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm build

FROM ghcr.io/ghostdevv/node:22-alpine

WORKDIR /opt/app

COPY --from=build /opt/app/dist .

CMD [ "node", "./server/entry.mjs" ]