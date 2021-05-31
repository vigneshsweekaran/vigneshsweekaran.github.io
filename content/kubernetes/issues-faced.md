# Issues faced in Kubernetes

### Error: failed pre-install: job failed: DeadlineExceeded
Soution: activeDeadlineSeconds: 30 in the Job is reached the limit

### Not able to schedule pods in node in a single node cluster
Solution: Remove the Taint in the master node
  
### Automatically taint (node.kubernetes.io/disk-pressure:NoSchedule) is assigned in the worker nodes
Info: node.kubernetes.io/disk-pressure: The node has disk pressure issues. This corresponds to the node condition DiskPressure=True.

Solution: Increase the storage size or delete some data
  
### If the kubectl commands are not working, check the kube-apiserver is running or not. In kubeadm to analyse the logs of kubapi-server and etcd containers.
docker logs container_id (kubeapiserver, etcd container)

If the etcd datas are corrupted. Delete the member folder folder /var/lib/etcd/member/ and restart the etcd container (But all the kubernetes objects which was created before are lost. 

If we have a backup of member folder we can replace there and restart the container)

Generally etcd database corrupted due to power failure of the hardware/pc

### Pod creation failed with error
```
Warning  Failed     2s (x4 over 36s)  kubelet            Error: container has runAsNonRoot and image has non-numeric user (agent), cannot verify user is non-root
```

This is because the Pod security is not allowing to run the contaier as root user and not able to verify the whether the user is non-root

Add security context as below in pod templtae
```
securityContext:
    runAsUser: 1000
```

### Pod craetion failed with error
```
Error from server (Forbidden): pods "nginx" is forbidden: failed quota: cp0190ns01-rq: must specify limits.cpu,limits.memory,requests.cpu,requests.memory
```
Solution: Define resource request and limits in yaml file
