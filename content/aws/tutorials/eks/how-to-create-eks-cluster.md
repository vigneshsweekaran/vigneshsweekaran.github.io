## How to create EKS cluster

### Install Cli Tools
* aws cli
* eksctl
* kubectl

### Create IAM roles
* `eks-cluster-role`

Policy:
  * AmazonEKSClusterPolicy

* `eks-node-role`

Policy:
  * AmazonEKSWorkerNodePolicy
  * AmazonEC2ContainerRegistryReadOnly
  * AmazonEKS_CNI_Policy
