# Networking

### How the pod talks to service by using the service name
Whenever we create a pod in kubernetes, in /etc/resolv.conf the nameserver details will be added like below

For pods in default namespace
```
nameserver 10.96.0.10
search default.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
```
If we created one pod with service named backend, and from inside another pod we want to talk to backend service. we can simply call the backend service by using the service name `curl backend` and this backend will be automatically expanded as backend.default.svc.cluster.local from the /etc/resolv.conf and able to reach the backend service

For pods in diffrent namespace (eg. namespace name - test)
```
nameserver 10.96.0.10
search test.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
```

Similary for another namespace we have created service named postgres, we can refer the service in that namespace by simply calling the service name `curl postgres` this will be automatically expanded to postgres.test.svc.cluster.local. This is because in each namespace the namespace name will be added in /etc/resolv.conf and using this we can call any service in that namespace by simply calling the service name.

Similarly if we want to access service in another namespace we have to use the fully qualified domain name. Now from test namespace we want to access some service from default namespace we have use like this `curl backend.default.svc.cluster.local` 
