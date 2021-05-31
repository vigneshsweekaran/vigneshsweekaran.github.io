# Information

### Default serviceAccount in each namespace having full permissions to kube apiserver in DockerDesktop
Docker desktop creates Clusterrolebinding and binds clusterrole cluster-admin to all service accounts using Group system:serviceaccounts
https://stackoverflow.com/questions/62892972/kubernetes-service-account-default-permissions
