FROM node:14.18.3-alpine

WORKDIR /server
EXPOSE 4000

RUN npm i -g @nestjs/cli
RUN npm i -g yarn

COPY . /server
RUN yarn install
RUN yarn run build

CMD ['yarn', 'run', 'start']