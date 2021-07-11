## How to create GKE(Google Kubernetes Engine) cluster

### Create a standard cluster using gcloud utility
```
gcloud container clusters create cluster-test \
  --machine-type n2-standard-8 \
  --num-nodes 1 \
  --zone us-central1-a \
  --enable-autoscaling --min-nodes 1 --max-nodes 3
```
n2-standard-2 --> 2vCPU,8GB RAM
n2-standard-4 --> 4vCPU,16GB RAM
n2-standard-8 --> 8vCPU,32GB RAM

### Delete a standard cluster using gcloud utility
```
gcloud container clusters delete cluster-test
```

### Configure your kubectl to connect to GKE cluster
```
gcloud container clusters get-credentials cluster-test --zone us-central1-a --project PROJECT_NAME
```