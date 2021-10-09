## how to install Gitlab runner in kubernetes using Helm chart

##### Create a namespace
```
kubectl create ns gitlab-runner
```

##### Add gitlab helm repo
```
helm repo add gitlab https://charts.gitlab.io
helm repo update
```

##### Install gitlab runner chart
```
helm install --namespace gitlab-runner --set gitlabUrl=https://gitlab.com/ --set rbac.create=true --set runnerRegistrationToken=<gitlab-runner-token> gitlab-runner gitlab/gitlab-runner
```