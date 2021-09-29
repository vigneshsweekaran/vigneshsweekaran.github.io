## How to create EKS cluster using eksctl

### Install Cli Tools
* aws cli
* eksctl
* kubectl

### Create cluster
Configure aws credentials

Craete a eks-cluster.yaml file with the following content

```
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: my-cluster
  region: us-west-2

nodeGroups:
  - name: nodegroup-1
    instanceType: t2.small
    desiredCapacity: 2
```

Run the following command to create cluster,
```
eksctl create cluster -f eks-cluster.yaml
```

Note:
* By default, it will craete one new vpc with 2 subnets

### Create cluster with ssh access to worker nodes
Create key-pair in aws eg: my-key

Craete a eks-cluster.yaml file with the following content

```
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: my-cluster
  region: us-west-2

nodeGroups:
  - name: nodegroup-1
    instanceType: t2.small
    desiredCapacity: 2
    ssh: # use existing EC2 key
      publicKeyName: eks-course
```

Run the following command to create cluster,
```
eksctl create cluster -f eks-cluster.yaml
```
