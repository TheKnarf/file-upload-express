#!/bin/bash

curl \
	-F "content=@testfiles/test1" \
	-F "path=test1" \
	"localhost:3000/upload"

