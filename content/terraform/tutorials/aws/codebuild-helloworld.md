# Terraform script to craete a AWS Codebuild project

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
