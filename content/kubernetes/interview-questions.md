# Kubernetes Interview Questions

* What are the main components of Kubernetes architecture?

* What is Service, types of service or what is ClusterIp, NodePort, LoadBalancer in kubernetes ?

* You have to migrate a 3 tier web application to kubernetes which has frontend, backend and database what are all the objects you will create in Kubernetes cluster?

* You want to upgrade the application running in kubernetes without downtime, how you can do it ?

* What concepts you will adopt to keep your application highly available?

* Can we have multiple containers running inside the pod? If yes, any one container fails how would you troubleshot?

* Why do we need deamon sets ?

* How to schedule a pod on particular node ?

* What is RBAC or What is service account, role and role binding concepts are used?

* What is the default service account in kubernetes used by pod ?

* What is the use of service name kubernetes in default namespace ?

*  How you can copy a file from local to inside a pod ?

* What are the default namespaces will be created as part of Kubernetes initial setup?

* Do you know how we can attach resource to Namespace?

* What are volume types are available in Kubernetes and which one you have used in your project? 

* Have you used persistence volume and why you need it?

* Difference between Persistence volume and Persistence volume claim ?

* What is storage class ?

* Why by default pods wont schedule on master node?

* How we can schedule pod on Master node ?

* How will you check which pod has been deployed on which node?

* If a pod status is pending what does that mean? What are the other statuses?

* Did you work on any monitoring solution for kuberenets?

* How you can scale you pod based on load ?

* What is Taints and Tolerations ?

* You dont want to schedule pods on particular node, how we can restrict it ?

* How to manauly move a running pod from one node to another Node ?
  Edit the deployment and update **nodeName** feild
  Use Node selector or Taints and Tolerations

* How the changes updated in configmap, updated to pod, which component is doing this?

* Brief difference between Deployment and Statefulset ?

* What is Headless service ?

* How scheduler works ?

* How you can access the myapp service from default namespace in dev namespace ?  

* challenges faced ?
