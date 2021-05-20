# Docker Image
Contains app binaries and dependencies. Not a complete OS. No kernel, kernal mosules(eg, drivers). Small as one file, or big as a ubuntu distro with apt, and apache, php and more installed

### Notes
* Each layer in the docker image will have a unique sha256 value
* A container is just a single read/write layer on top pf image
* Multiple tags can point to the same imageid since the image is same
* If we are not specifing the CMD in the Dockerfile, it will use the CMD defined in the base docker image, this is working since everything will be inherited from the BASE dockerfile

### To know the layers of docker image
docker history nginx **or** docker image history nginx

### To see metadata of the docker image
docker inspect nginx **or** docker image inspect nginx

###  To clean up just "dangling" images
docker image prune

### To clean up everything images, containers and volumes
docker system prune

### To remove all unused Images
docker image prune -a

### To see disk space usage by images, containers, volumes and build caches
docker system df
```
TYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE
Images              25                  12                  6.169GB             4.648GB (75%)
Containers          45                  18                  1.802GB             1.802GB (99%)
Local Volumes       6                   0                   3.568MB             3.568MB (100%)
Build Cache         21                  0                   745.8MB             745.8MB
```

