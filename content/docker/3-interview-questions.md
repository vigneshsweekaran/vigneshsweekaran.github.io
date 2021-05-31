# Docker

### Docker command to create a docker container
```
docker run -d --name ubuntu ubuntu:latest
```
### Docker command to forward sepcific port
```
docker run -d --name nginx -p 80:80 nginx:latest
```
### How do you persist some specific files or folder in a docker container
By creating the volumes

Example: mysql docker container
```
docker run --name some-mysql -v /my/own/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql
```
### How to pass a dockerfile which is in diffrent folder to the docker build command
```
docker build -f dockerfiles/Dockerfile -t sample .
```

### How we can create and persist the Environment variable in docker cpntainer
```
FROM ubuntu

ENV VERSION=1.0.0
```


### How we can define environment varibales only for particular layer
```
FROM ubuntu

RUN export VERSION=1.0.0 && echo $VERSION
```


### How to reuse the Dockerfile or how to templatise the Dockerfile or How to define the commands commonly in one dockerfile
Using **onbuild** in base Dockerfile, which will be executed in the child dockerfile build time

### How namespace and cgroups helps in creating the docker container
