#!/bin/sh
docker build -t datasetgenerator .
docker run -d --name datasetgenerator --restart always datasetgenerator
