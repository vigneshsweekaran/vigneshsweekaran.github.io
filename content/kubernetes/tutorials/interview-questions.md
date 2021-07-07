# Kubernetes Interview Questions

`Main components`
* What are the main components of Kubernetes architecture?
  
  **Master Node :** kube-apiserver, etcd, kube-scheduler and kube-controller-manager 
  
  **Worker Node :** kubelet, kube-proxy and container runtime
  
  **Official :** [Kubernetes main components](https://kubernetes.io/docs/concepts/overview/components/)

`Pod`
* what is 2/2 under READY, when we run kubctl get pods ?

  2/2 means the pod has two containers and both the containers are in reday state to accept the request.

* Can we have multiple containers running inside the pod? If yes, any one container fails how would you troubleshot?
  
  Yes, we can have more than one container inside a pod.
  
  Describe the pod and check the events 
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
  
  Kube-scheduler not working, scheduler not present.
  Your worker nodes are not ready yet.
  
  Pending : The Pod has been accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a Pod spends waiting to be scheduled as well as the time spent downloading container images over the network.

  Running : The Pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting.
 
  Succeeded : All containers in the Pod have terminated in success, and will not be restarted.
  
  Failed : All containers in the Pod have terminated, and at least one container has terminated in failure. That is, the container either exited with non-zero status or was terminated by the system.
  
  Unknown : For some reason the state of the Pod could not be obtained. This phase typically occurs due to an error in communicating with the node where the Pod should be running.

  CrashLoopBackoff: The container fails to start and is tried again and again.
  
  ImagePullBackOFF : Not able to pull the image, the image is not present in the registry
  
  CreateContainerConfigError : Configmap is not created before creating the deployment. Pod will not restart. With this error, create the configmap, pod will start automatically.


`Deployment`
* What concepts you will adopt to keep your application highly available?
  
  Create Deployment with more than 2 replicas or Create Deployment and Horizontal Pod Autoscaler with minReplicas=2

* You want to update the application running in kubernetes without downtime, how you can do it ?
  
  Using "Rolling Update" deployment startegy we can upgrade without downtime, first it will create one pod in new replicaset and delete one pod in old replicaset and goes on. By default **Rolling Update** is the default strategy while creating the Deployment.

`Service`
* Why do we need service in Kubernetes ?
  A Kubernetes service is a logical abstraction for a deployed group of pods in a cluster (which all perform the same function). 
  
  Since pods are ephemeral, a service enables a group of pods, which provide specific functions to be assigned a name and unique IP address (clusterIP).

  And service can also do load balancing.

* Types of services ? or When you will use ClusterIp, NodePort and LoadBalancer service ?
  ClusterIp --> For internal communication, within the kubernetes cluster.
  
  NodePort --> Used to access the pods from outside world, Forward the port fron any node to service. 
  
  LoadBalancer --> Creates a LoadBalnacer with External Ipaddress.

* What is the use of service **service/kubernetes** in default namespace ?
  This service is used to talk to the kube-apiserver from inside the pod. Communication happens only within the kubernetes cluster from any namespace. 

* How you can access the service **myapp** from default namespace which was created on dev namespace ?
  By referring the FQDN, **dev.myapp.svc.cluster.local**  

`Configmap`
* In what ways you can map the confimap to the Deployment ?
  We can map the configmap as environment variable and volume mounts to the Deployments.

* How the changes updated in the configmap are updated to pod, which component is doing this?
  kubelet watches for the changes in configmap, if the configmap is updated, it will update the changes to pod only if we map the configmap as volume mounts. 

`Secret`
* How you can securely connect to any server from your pod ?
  Store the ssh private key in secret as type **kubernetes.io/ssh-auth** and map it as volume mount.

  Now we can access the private key securely inside the pod. 

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
