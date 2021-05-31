# Issues faced in Docker

### Not able to change the user and group for the files copied in Dockerfile using COPY command
Info: By default, COPY command will copy the file to user and group as *root*
```
RUN chmod +x start.sh
[91mchmod: changing permissions of 'start.sh': Operation not permitted
[0mThe command '/bin/sh -c chmod +x start.sh' returned a non-zero code: 1
make: *** [build] Error 1
```
Solution: While copying the files using COPY command chnage the user and group using additional parameters
```
COPY --chown=ubuntu:ubuntu ./start.sh .
```
