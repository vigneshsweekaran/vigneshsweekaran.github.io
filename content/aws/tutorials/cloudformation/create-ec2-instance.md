# Cloudformation template for creating the ec2 nstance

**Cloudformation template:** [Github](https://github.com/vigneshsweekaran/aws/tree/master/cloudformation/01-ec2-instance)

**Cloudformation template creates the following**
* Ec2 instance
* Security Group
* ElasticIP

** Template
* Resource - Ec2 instance, Security group, ElasticIp
* Parameters - Choose EC2 Instance type, Enable/disable ElasticIP
* Mappings - To get the AMI Id dynamically based on region