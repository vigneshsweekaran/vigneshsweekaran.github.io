# Docker

### To know the configuration of docker daemon/sercre
docker info

### To exec inside the container with diffrent user
docker exec -ti --user user_name CONTAINER_ID bash

### To know the pid of the container
docker top container_name/id

### To know information about the container
docker inspect container_name/id

### To know the statistics like ram and cpu consumed by each container
docker stats

### To change the docker registry details for login from the host
Update the ~./docker/config.json

cat ~./docker/config.json
```
{
        "auths": {
                "https://index.docker.io/v1/": {}
        },
        "HttpHeaders": {
                "User-Agent": "Docker-Client/19.03.13 (windows)"
        },
        "credsStore": "desktop",
        "stackOrchestrator": "swarm"
}
```
cat ~./docker/daemon.json  (for reference, this location is for windowns, for linux it will be in /etc/docker/daemon.json)
```
{
  "registry-mirrors": [],
  "insecure-registries": [],
  "debug": false,
  "experimental": false,
  "features": {
    "buildkit": true
  }
}
```

