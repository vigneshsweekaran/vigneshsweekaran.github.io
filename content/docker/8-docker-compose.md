# Docker Compose

### Notes
* Docker compose will craeate one new network and all containers craeter will be part of that network
* Docker compose down will not delete the the docker image which was created from build feild in yaml file
* If we are not passing the Image name for building the docker image in yaml file, docker compose will name the docker image as folder_name-service_name

### To create docker containers from docker compose yaml file
docker-compose up (prints the in sdout)

docker-compose up -d (to run in background)

### To bring down the docker cotainers, volumes and networks defined in the docker compose yaml file
docker-compose down

### Removing docker images in local during docker-compose down which was built from yaml file
docker-compose down --rmi local (But the docker image name should not be given in the yaml file, image: feild should be omitted for this service in yaml file)
