# Secret

### Why we need secret

### Types of secret
|Builtin Type|Usage|
|----|-----|
|Opaque| 	arbitrary user-defined data|
|kubernetes.io/service-account-token| 	service account token|
|kubernetes.io/dockercfg| 	serialized ~/.dockercfg file|
|kubernetes.io/dockerconfigjson| 	serialized ~/.docker/config.json file|
|kubernetes.io/basic-auth| 	credentials for basic authentication|
|kubernetes.io/ssh-auth| 	credentials for SSH authentication|
|kubernetes.io/tls| 	data for a TLS client or server|
|bootstrap.kubernetes.io/token| bootstrap token data|
### How to create secret using cli

### How to create secret using yaml file

### How the updated value in sceret is updated to pod
https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically

https://kubernetes.io/docs/concepts/configuration/secret/#environment-variables-are-not-updated-after-a-secret-update

Updating the secret will updated the data in pod only if secret is mounted as volume. If secret is exposed as Environment variable, the environment variable wont get updated even if the secret was updated.

A container using a Secret as a subPath volume mount will not receive Secret updates.

**Kublet** is component which will update the changes in the secret to the Pod. 

The total delay from the moment when the Secret is updated to the moment when new keys are projected to the Pod can be as long as the kubelet sync period + cache propagation delay, where the cache propagation delay depends on the chosen cache type (it equals to watch propagation delay, ttl of cache, or zero correspondingly).
