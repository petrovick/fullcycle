#Step 1
FROM golang:1.18-alpine as BUILDER

WORKDIR /usr/src/app

COPY . .

RUN go build cmd/grpcServer/main.go

# Step 2
FROM scratch as final

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/main ./main

CMD ["./main"]