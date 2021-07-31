## How to install Promethus operator

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

```
kubectl create namespace monitoring
helm install promethus-stack prometheus-community/kube-prometheus-stack -n monitoring
```