# Kubectl commands

### To create, get, delete service account in default namespace
```
kubectl create serviceaccount service_account_name
kubectl get sa
kubectl delete sa/service_account_name
```
### To create, get, delete service account in specific namespace 
```
kubectl create sa service_account_name -n namespace_name
kubectl get sa -n namespace_name
kubectl delete sa/service_account_name -n namespace_name
```
### To get service account in all namespaces
```
kubectl get sa --all-namespaces
```
### To know the taints applied to the node
```
kubectl describe node node1 | grep -i taints -A5
```
### To delete a particular taint
To remove a taint with key (eg. key = dedicated)
```
kubectl taint nodes foo dedicated-
```
### To get information about the node
```
kubectl describe node node_name
```
### To see the init container logs
```
kubectl logs <pod-name> -c <init-container-2> (To see the init container name, kubectl describe pod/pod_name)
```
