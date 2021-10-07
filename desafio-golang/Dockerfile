FROM golang:alpine as build
WORKDIR /go/hello
RUN go mod init example/hello
COPY hello.go .
RUN go build

FROM scratch
WORKDIR /go/hello
COPY --from=build /go/hello/hello .
CMD [ "./hello"]