#Step 1
FROM golang:1.20-alpine as BUILDER

WORKDIR /usr/src/app

COPY . .

RUN go build cmd/server/server.go

CMD ["ls"]
# # Step 2
# FROM scratch as final

# WORKDIR /usr/src/app

# COPY --from=BUILDER /usr/src/app/server ./server

# CMD ["./server"]