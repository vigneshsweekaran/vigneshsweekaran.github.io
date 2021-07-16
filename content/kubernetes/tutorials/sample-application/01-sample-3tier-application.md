## How to deploy 3 tier application in Kubernetes

I have a sample 3 tier application called easyclaim. Which consists of 3 docker images frontend, backend and mysql database.

The frontend is developed using AngularJS 8 and backend is developed using Java springboot(Java 8).

### References:
* [Easyclaim frontend github repository](https://github.com/vigneshsweekaran/easyclaim-frontend) 
* [Easyclaim backend github repository](https://github.com/vigneshsweekaran/easyclaim-backend)

### Architecture
![kubernetes](/content/kubernetes/tutorials/images/sample-application/3-tier/easyclaim-nodeport-mysql-deploy.png)

### Easyclaim application details

|Application|Kind|Service type|Port|
|-----|-----|-----|-----|
|Easyclaim frontend|Deployment|NodePort|32011|
|Easyclaim backend|Deployment|NodePort|32012|
|mysql|Deployment|ClusterIp|3306|