#Step 1
FROM golang:1.20-alpine as BUILDER

WORKDIR /usr/src/app

COPY go.mod hello.go ./

RUN go build

# Step 2
FROM golang:1.20-alpine as final

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/wallet-core ./wallet-core

CMD ["./wallet-core"]