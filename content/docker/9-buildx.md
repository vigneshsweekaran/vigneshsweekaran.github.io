# Docker buildx
Docker buildx is a dockercli plugin to build multi architeture(linux/amd64,linux/arm64,linux/arm/v7,linux/arm/v8) docker images

### Reference
Buildx github repo: https://github.com/docker/buildx

### Install buildx
```
mkdir -p ~/.docker/cli-plugins
cd ~/.docker/cli-plugins
wget https://github.com/docker/buildx/releases/download/v0.5.1/buildx-v0.5.1.linux-amd64
mv buildx-v0.5.1.linux-amd64 docker-buildx
chmod a+x docker-buildx
```

### Notes
* Multi platform/architecure build feature is not supported with docker driver. we have to create a new driver that will run in side the docker container, and the buildx will use that driver to build muti architecure docker images

### To list the drivers available
```
docker buildx ls
```

### To Create new build driver for buildx
```
docker buildx create --use
```

### To build a multi architecture images with buildx
```
docker buildx build --platform=linux/amd64,linux/arm64,linux/arm/v7 .
```

eg: To build and push image to docker registry
```
docker login -u username -p password
docker buildx build --push --platform linux/amd64,linux/arm64 -t vigneshsweekaran/easyclaim-frontend:latest .
```

