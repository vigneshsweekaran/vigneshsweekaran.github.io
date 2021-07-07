# Kubernetes Interview Questions

`Main components`
* What are the main components of Kubernetes architecture?
  
  **Master Node :** kube-apiserver, etcd, kube-scheduler and kube-controller-manager 
  
  **Worker Node :** kubelet, kube-proxy and container runtime
  
  **Official :** [Kubernetes main components](https://kubernetes.io/docs/concepts/overview/components/)

`Pod`
* Can we have multiple containers running inside the pod? If yes, any one container fails how would you troubleshot?
  
  Yes, we can have more than one container inside a pod.

  First describe the pod and check the events 
  ```
  kubectl describe pod-name
  ```
  
  If we have more than one container, we can check the logs of one container by referring the container name.
  ```
  kubectl logs pod-name -c container-name
  ```

*  How you can copy a file from local to inside a pod ?
   ```
   kubectl cp /tmp/foo_dir <pod-name>:/tmp/data
   ```

* How will you check which pod has been deployed on which node?
  ```
  kubectl describe pod-name
  kubectl get pods -o wide
  ```

* If a pod status is pending what does that mean? What are the other statuses?
  
  Kube-scheduler not working, scheduler not present
  Your worker nodes are not ready

  Containercreating
  Created
  Running
  ERROR --> If your application is crashing, it will show this status
  ImagePullBackOFF
  ConfigERROr-- >


`Deployment`
* What concepts you will adopt to keep your application highly available?
  
  Deployment with more than 2 replicas or using Horizontal Pod Autoscaler

* You want to upgrade the application running in kubernetes without downtime, how you can do it ?
  
  Use "Rolling Update" deployment startegy, by default **Rolling Update** is the default strategy

`Service`
* Why do we need service in Kubernetes ?

* Types of services ? or When you will use ClusterIp, NodePort and LoadBalancer service ?

* What is the use of service **service/kubernetes** in default namespace ?

* How you can access the service **myapp** from default namespace which was created on dev namespace ?
  By referring teh FQDN, **dev.myapp.svc.cluster.local**  

`Configmap`
* How the changes updated in configmap, updated to pod, which component is doing this?

`Secret`
* How you can securely connect to any server from your pod ?

* How you can pull images from private registry to kubernetes cluster ?

`Namespace`
* What are the default namespaces will be created as part of Kubernetes initial setup?

* Do you know how we can attach resource to Namespace?

`Volumes`
* What are the types of volumes available in Kubernetes and which one you have used in your project? 

* Have you used persistence volume and why you need it?

* Difference between Persistence volume and Persistence volume claim ?

* What is storage class ?

`Statefulset`
* Brief difference between Deployment and Statefulset ?

* What is Headless service ?

`HPA`
* How you can scale you pod based on load ?

`Daemonsets`
* Why do we need deamon sets ?
  To run one pod in each node eg: For collectings logs, collecting metrics from each node

`Taints and Tolerations`
* What is Taints and Tolerations ?

* Why by default pods wont schedule on master node?

* How we can schedule pod on Master node ?

`Node selector and Node Affinity`
* How to schedule a pod on particular node ?

* How to manauly move a running pod from one node to another Node ?
  Edit the deployment and update **nodeName** feild
  Use Node selector or Node Affinity

`Application architecture`
* You have to migrate a 3 tier web application to kubernetes which has frontend, backend and database what are all the objects you will create in Kubernetes cluster? How the connectivity happens between each application ?

`RBAC`
* What is RBAC or What is service account, role and role binding concepts are used?

* What is the default service account in kubernetes used by pod ?

`Cordon and uncordon`
* You dont want to schedule pods on particular node, how we can restrict it ?

`Scheduler`
* How scheduler works ?

`Monitoring`
* Did you work on any monitoring solution for kuberenets?

`challenges faced`
