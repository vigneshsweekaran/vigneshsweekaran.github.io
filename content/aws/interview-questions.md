# AWS Interview Questions

# S3
### Can you explain about any 5 aws s3 cli commands ?
```
aws s3 mb (make bucket)
aws s3 ls (list)
aws s3 rm (remove)
aws s3 cp (copy)
aws s3 mv (move)
```
### How do you protect data in s3 at rest ?
### what is lifecycle in S3 ?

# Compute
### Explain when do you use ELB vs ALB vs NLB ?
```
ALB: Layer7, path based routing, Attach WAF
NLB: Layer4, (eg. Video Streaming)
CLB: Legacy, dosent support Target Groups
```
### what is CIDR ?
### What is Internet gateway and Nat gateway ?
### what is lambda in AWS ?

# Storage
### EBS vs EFS vs S3
```
EBS: A bock storage, it is really fast, need an EC2 instance
EFS: managed service, accessed by multiple EC2 instances
S3: An object store, Great for storing logs
```
### How to copy an AMI from one Account to another account
AMI is region scoped. whenever we create a AMI from EC2 instance it will create an AMI+snapshot. From the AMI we have a copy option to copy the AMI to another Region, in the anonther region AMI+snapshot will be created 

### what is ACM

### what is KMS

### what is AWS guardduty
