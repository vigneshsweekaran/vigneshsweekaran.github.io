## How to use service account in kubeconfig file for authentication

### Create a new service account in the kube-system namespace
```
kubectl -n kube-system create serviceaccount kubeconfig-sa
```

### Create a new clusterrolebinding with cluster administration permissions and bind it to the service account
```
kubectl create clusterrolebinding add-on-cluster-admin --clusterrole=cluster-admin --serviceaccount=kube-system:kubeconfig-sa
```

### Obtain the name of the service account authentication token and assign its value to an environment variable
```
TOKENNAME=`kubectl -n kube-system get serviceaccount/kubeconfig-sa -o jsonpath='{.secrets[0].name}'`
```

### Obtain the value of the service account authentication token and assign its value (decoded from base64) to an environment variable
```
TOKEN=`kubectl -n kube-system get secret $TOKENNAME -o jsonpath='{.data.token}'| base64 --decode`
```

### Add the service account (and its authentication token) as a new user definition in the kubeconfig file 
```
kubectl config set-credentials kubeconfig-sa --token=$TOKEN
```

### Set the user specified in the kubeconfig file for the current context to be the new service account user
```
kubectl config set-context --current --user=kubeconfig-sa
```