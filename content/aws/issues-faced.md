# Issues faced in AWS

### Creted Ec2 instance, manually deployed codedeploy agent, creted codedeploy application and codedeploy aplication group, triggered deployment with source as Github. Code deployment was failing with "UNKOWN ERROR"

```
CodeDeploy agent was not able to receive the lifecycle event. Check the CodeDeploy agent logs on your host and make sure the agent is running and can connect to the CodeDeploy server
```
Issue: Codedeploy agent is running, but now properly connected to codedeploy server
Solution: Create a dummy role and attach to EC2 isntance, since EC2 instance needs to talk to aws services