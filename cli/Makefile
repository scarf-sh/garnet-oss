ifndef VERSION
	VERSION := $(shell git describe --tags --always --dirty="")
endif

LDFLAGS := -ldflags='-X "main.Version=$(VERSION)"'

build: garnet

garnet:
	CGO_ENABLED=0 go build -trimpath $(LDFLAGS) -o $@

all: dist/garnet-$(VERSION)-darwin-amd64 dist/garnet-$(VERSION)-darwin-arm64 dist/garnet-$(VERSION)-linux-amd64 dist/garnet-$(VERSION)-windows-amd64.exe

test:
	go test -v ./...

clean:
	rm -rf ./dist

dist/:
	mkdir -p dist

dist/garnet-$(VERSION)-darwin-amd64: | dist/
	GOOS=darwin GOARCH=amd64 CGO_ENABLED=0 go build -trimpath $(LDFLAGS) -o $@

dist/garnet-$(VERSION)-darwin-arm64: | dist/
	GOOS=darwin GOARCH=amd64 CGO_ENABLED=0 go build -trimpath $(LDFLAGS) -o $@

linux: dist/garnet-$(VERSION)-linux-amd64
	cp $^ garnet

dist/garnet-$(VERSION)-linux-amd64: | dist/
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -trimpath $(LDFLAGS) -o $@

dist/garnet-$(VERSION)-windows-amd64.exe: | dist/
	GOOS=windows GOARCH=amd64 CGO_ENABLED=0 go build -trimpath $(LDFLAGS) -o $@

.PHONY: clean all linux
