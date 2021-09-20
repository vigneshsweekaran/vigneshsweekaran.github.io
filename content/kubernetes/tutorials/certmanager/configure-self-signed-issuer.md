## How to configure self-signed Issuer in cert-manager on Kubernetes

### Prerequisites
* Kubernetes cluster up and running
* cert-manager installed in kubernetes cluster

### References
* [How to install/uninstall cert-manager in kubernetes](/content/kubernetes/tutorials/certmanager/01-how-to-install-certmanager)

### What is Issuer in cert-manager ?
Issuer, and ClusterIssuer, are Kubernetes resources that represent certificate authorities (CAs) that are able to generate signed certificates by honoring certificate signing requests. All cert-manager certificates require a referenced issuer that is in a ready condition to attempt to honor the request.

Issuer --> Namespace scope
ClusterIssuer --> Cluster scope

[Official Documentation](https://cert-manager.io/docs/concepts/issuer/)

Yaml file for Self-signed ClusterIssuer

Create a file `cluster-issuer.yaml` and paste the following content

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: selfsigned-cluster-issuer
spec:
  selfSigned: {}
```

Create a Issuer
```bash
kubectl apply -f cluster-issuer.yaml
```

Verify the Issuer
```
kubectl get clusterissuers -o wide selfsigned-cluster-issuer
```

Create a certificate

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: my-selfsigned-ca
  namespace: sandbox
spec:
  isCA: true
  commonName: my-selfsigned-ca
  secretName: root-secret
  privateKey:
    algorithm: ECDSA
    size: 256
  issuerRef:
    name: selfsigned-issuer
    kind: ClusterIssuer
    group: cert-manager.io
```