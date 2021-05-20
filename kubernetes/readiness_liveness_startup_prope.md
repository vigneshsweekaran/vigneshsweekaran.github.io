# Readiness and Liveness Prope

### Readiness Prope
Readiness prope is used to declare the Pod state as ready when certain condotion are met

The kubelet uses liveness probes to know when to restart a container. 

### Liveness Prope
Liveness prope is used to periodically check the health of the pod based on the condition to declare the pod is healthy or not

The kubelet uses readiness probes to know when a container is ready to start accepting traffic. A Pod is considered ready when all of its containers are ready. One use of this signal is to control which Pods are used as backends for Services. When a Pod is not ready, it is removed from Service load balancers.

### Startup Prope
The kubelet uses startup probes to know when a container application has started. If such a probe is configured, it disables liveness and readiness checks until it succeeds, making sure those probes don't interfere with the application startup. This can be used to adopt liveness checks on slow starting containers, avoiding them getting killed by the kubelet before they are up and running.


