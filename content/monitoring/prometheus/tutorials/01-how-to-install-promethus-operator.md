## How to install Promethus operator

#### Adding promethus-community helm repo
```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

#### Install kube-prometheus-stack chart
```
kubectl create namespace monitoring
helm install promethus-stack prometheus-community/kube-prometheus-stack -n monitoring
```

#### Enable nodeport service for grafana and prometheus
```
helm install promethus-stack prometheus-community/kube-prometheus-stack \
    --set prometheus.service.type=NodePort \
    --set prometheus.service.nodePort=32090 \
    --set grafana.service.type=NodePort \
    --set grafana.service.nodePort=32091 \
    --set grafana.adminPassword=grafana-password \
    -n monitoring
```

#### Update kube-prometheus-stack chart
```
helm upgrade promethus-stack prometheus-community/kube-prometheus-stack --version VERSION_NUMBER -n monitoring
```

