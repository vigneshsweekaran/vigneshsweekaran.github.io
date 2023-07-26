## How to deploy 3 tier application in Kubernetes

I have a sample 3 tier application called easyclaim. Which consists of 3 docker images frontend, backend and mysql database.

The frontend is developed using AngularJS 8 and backend is developed using Java springboot(Java 8).

### References:
* [Easyclaim frontend github repository](https://github.com/vigneshsweekaran/easyclaim-frontend) 
* [Easyclaim backend github repository](https://github.com/vigneshsweekaran/easyclaim-backend)

### Architecture
![kubernetes](/content/kubernetes/tutorials/images/sample-application/3-tier/easyclaim-nodeport-mysql-deploy.png)

### Easyclaim application deployment details

|Application|Kind|Service type|Port|
|-----|-----|-----|-----|
|Easyclaim frontend|Deployment|NodePort|32011|
|Easyclaim backend|Deployment|NodePort|32012|
|mysql|Deployment|ClusterIp|3306|

### STEP1: Deploy mysql database

As per the architecture we are going to deploy the mysql database as `Deployment` with single replica in kubernetes.

To access this mysql database only within the kubernetes we are going to create service of type `ClusterIp`

The baceknd application running the same kubernetes cluster will talk to mysql database using mysql service name.

And we need to create one secret to pass the mysql root password.

Lets clone the easyclaim backend github repository which contains the kubernetes manifest files for deploying the Mysql database.
```
git clone https://github.com/vigneshsweekaran/easyclaim-backend.git
```

For deploying mysql database I kept all kubernetes manifest files in `deployment/mysql` folder.

Lets go to `deployment/mysql` folder
```
cd easyclaim-backend/deployment/mysql
```
