# Docker Interview Questions

`Docker Image`
* How you can pull a mysql docker image from dockerhub to your local machine ?
```
docker pull mysql
```

* How you can pull a docker image from private repository in dockerhub. The username is **test**, repository/image name is **myimage** and the tag is 1.0.0

Since its a private repository, first we have to login to the repository.
```
docker login -u test -p ***************
```
Then we can pull the image with the following image name format **username/imagename:tag**
```
docker pull test/myimage:1.0.0
```

* What is the image name format to pull a docker image from Jfrog docker registry or any registry apart from dockerhub ?

registry-url/registry-name/image-name:tag

Example for pulling a docker image from Jfrog Docker Registry.
```
username.jfrog.io/default-docker-local/hello-world:tag
```

`Docker Container`
* Can you write a command to create a nginx docker container
  ```
  docker run -d --name nginx nginx:latest
  ```

* Why ubuntu docker container stops immediately ?
  
  When we create a container, the combination of ENTRYPOINT and CMD from Dockerfile will be executed.

  For ubuntu docker container the CMD in Dockerfile is `bash` command. The bash command is not a background process it just starts and stop immediately, thats why the ubuntu container stops immediately.

  Dockerfile of Ubuntu docker image : https://hub.docker.com/layers/ubuntu/library/ubuntu/latest/images/sha256-3f7c2c6e153e218a10ff78b3868811795fa09cc5d01be28296390ac75ab018b0?context=explore
  

`Docker Volume`

`Docker Network`

`Dockerfile`

`Docker build`

`Docker login and Docker Push`


* Docker command to forward sepcific port
  ```
  docker run -d --name nginx -p 80:80 nginx:latest
  ```
* How do you persist some specific files or folder from docker container
  By creating the volumes

  Example: mysql docker container
  ```
  docker run --name some-mysql -v /my/own/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql
  ```
* How to pass a dockerfile which is in diffrent folder to the docker build command
  ```
  docker build -f dockerfiles/Dockerfile -t sample .
  ```

* How we can create and persist the Environment variable in docker cpntainer
  ```Dockerfile
  FROM ubuntu
  ENV VERSION=1.0.0
  ```

* How we can define environment varibales only for particular layer
  ```Dockerfile
  FROM ubuntu
  RUN export VERSION=1.0.0 && echo $VERSION
  ```

* You have defined one Environment variable APP_COLOR=red in Dockerfile and while creating the container you can passed arguments -e APP_COLOR=blue. Which value will it take inside a container ?

  Environment variable defined during docker run command will be taken.

  Environment variable defined during docker run command has the highest priority, when compared to environment variable defined in Dockerfile.

* How to reuse the Dockerfile or how to templatise the Dockerfile or How to define the commands commonly in one dockerfile
  
  Using **onbuild** in base Dockerfile, which will be executed in the child dockerfile during build time

* How namespace and cgroups helps in creating the docker container

