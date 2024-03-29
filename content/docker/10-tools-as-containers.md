# Tools as docker containers
### Jfrog Artifactory
##### With volume
```
mkdir -p artifactory/var
chmod 755 artifactory/var
sudo chown 1030:1030 -R artifactory/var
docker run --name artifactory -d -p 8081:8081 -v $(pwd)/artifactory/var:/var/opt/jfrog/artifactory releases-docker.jfrog.io/jfrog/artifactory-oss:7.5.5
```
##### Without volume
`docker run --name artifactory -d -p 8081:8081 releases-docker.jfrog.io/jfrog/artifactory-oss:7.5.5`

### Jenkins
##### With volume
`docker run --name jenkins -d -p 8080:8080 -p 50000:50000 -v jenkins-volume:/var/jenkins_home jenkins/jenkins:2.263.3`

##### Without volume
`docker run --name jenkins -d -p 8080:8080 -p 50000:50000 jenkins/jenkins:2.263.3`

### Mysql 5.6
##### With volume
`docker run --name mysql -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test -v mysql-volume:/var/lib/mysql mysql:5.6`

##### Without volume
`docker run --name mysql -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test mysql:5.6`

### Docker Registry
##### By default it will create one volume
`docker run -d -p 5000:5000 --restart=always --name registry registry:2`

### Cadvisor
```
docker run \
  --volume=/:/rootfs:ro \
  --volume=/var/run:/var/run:rw \
  --volume=/sys:/sys:ro \
  --volume=/var/lib/docker/:/var/lib/docker:ro \
  --publish=8080:8080 \
  --detach=true \
  --name=cadvisor \
  google/cadvisor:latest
```

### Nexus Repository Manager 3
##### With volume
`docker run -d -p 8081:8081 --name nexus -v nexus-data:/nexus-data sonatype/nexus3`

##### Without volume
`docker run -d -p 8081:8081 --name nexus sonatype/nexus3`

### Sonarqube
##### With volume
`docker run --name sonarqube -d --restart=always -p 9000:9000 -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -v sonarqube-volume:/opt/sonarqube sonarqube:8.9.0-community`

##### Without volume
`docker run --name sonarqube -d --restart=always -p 9000:9000 -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true sonarqube:8.9.0-community`

### Anchore
Anchore is a tool for scanning the Docker Images

##### With volume
```
mkdir anchore-engine && cd anchore-engine
curl https://engine.anchore.io/docs/quickstart/docker-compose.yaml > docker-compose.yaml
docker-compose up -d
```

### Tomcat 9

##### With volume
```
docker run --name tomcat9 -d --restart=always -p 8080:8080 -v tomcat9-volume:/usr tomcat:9.0
```