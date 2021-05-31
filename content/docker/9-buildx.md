# Docker buildx
Docker buildx is a cli plugin to build the multi architeture docker images

### Reference
Buildx github repo: https://github.com/docker/buildx

### Notes
* Multi platform/architecure build feature is not supported with docker driver. we have to create a new driver that will run in side the docker container, and the buildx will use that driver to build muti architecure docker images

### To list the drivers available
docker buildx ls

### To Create new build driver for buildx
docker buildx create --use

### To build a multi architecture images with buildx
docker buildx build --platform=linux/amd64,linux/arm64,linux/arm/v7 .

