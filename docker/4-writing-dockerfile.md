# Writing Dockerfile

### Abou ENV in dockerfile
https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#env

Environment variables defined in ENV will persist in the resulting docker Image

Environment variables defines using export in RUN will persist only in that layer and will not present in the resulting doker image
