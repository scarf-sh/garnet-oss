FROM node:14-alpine

RUN apk add -U curl

RUN curl -LO https://garnet.jfrog.io/artifactory/garnet-release/garnet-v0.1.0-linux-amd64
RUN chmod +x ./garnet-v0.1.0-linux-amd64
RUN mv ./garnet-v0.1.0-linux-amd64 /usr/bin/garnet


EXPOSE 8080
CMD garnet run --service-key=${GARNET_SERVICE_KEY} -- env
