#!/bin/bash

curl \
	-X PUT \
	-F "content=@testfiles/test2" \
	-F "path=test2" \
	"localhost:3000/upload"
