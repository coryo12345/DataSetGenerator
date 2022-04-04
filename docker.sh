#!/bin/sh
docker run -d -v $(pwd):/root/app --name datasetgenerator --restart always node:16 /root/app/start.sh
