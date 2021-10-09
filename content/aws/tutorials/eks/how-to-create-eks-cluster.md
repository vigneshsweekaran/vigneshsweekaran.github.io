## How to create EKS cluster

### Install Cli Tools
* aws cli
* kubectl

### Create IAM roles
* `eks-cluster-role`
  * AmazonEKSClusterPolicy

* `eks-node-role`
  * AmazonEKSWorkerNodePolicy
  * AmazonEC2ContainerRegistryReadOnly
  * AmazonEKS_CNI_Policy


