## How to create EKS cluster

### Install Cli Tools
* aws cli
* eksctl
* kubectl

### Create IAM roles
* `eks-cluster-role`
  policy:
  * AmazonEKSClusterPolicy
* `eks-node-role`
  policy:
  * AmazonEKSWorkerNodePolicy
  * AmazonEC2ContainerRegistryReadOnly
  * AmazonEKS_CNI_Policy
