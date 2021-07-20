FROM golang:1.16.6 as builder

WORKDIR /go/src/github.com/saphoooo/my-app/
COPY main.go .
COPY go.mod .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o my-app .

FROM scratch

COPY --from=builder /go/src/github.com/saphoooo/my-app/my-app .

EXPOSE 8080

ENTRYPOINT [ "./my-app" ]
