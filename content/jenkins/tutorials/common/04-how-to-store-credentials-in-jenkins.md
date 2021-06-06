# How to store credentials in Jenkins

### To store username and passsword of anything like github, dockerhub
From Jenkins dashboard, click on **Manage Jenkins** 
![Jenkins](/content/jenkins/tutorials/common/images/credentials/jenkins-manage-jenkins.png)

Click on **Manage Credentials**

![Jenkins](/content/jenkins/tutorials/common/images/global-tool-configurations/jenkins-manage-credentials.png)

Click on **Jenkins**
![Jenkins](/content/jenkins/tutorials/common/images/global-tool-configurations/jenkins-click-on-jenkins.png)

Click on **Global credentials**
![Jenkins](/content/jenkins/tutorials/common/images/global-tool-configurations/jenkins-click-on-global-credentials.png)

Click on **Add Credentials**
![Jenkins](/content/jenkins/tutorials/common/images/global-tool-configurations/jenkins-add-credentials.png)

Select **kind** as **Username with password**, enter username, password and the enter unique id and click on **OK**
![Jenkins](/content/jenkins/tutorials/common/images/global-tool-configurations/jenkins-username-credential.png)

### To store ssh private key
Click on **Add Credentials** Select **kind** as **SSH Username with private key** enter the username, click on **Enter directly** and then click on Add and paste your private key and click on ok

![Jenkins](/content/jenkins/tutorials/common/images/global-tool-configurations/jenkins-private-key-credential.png)

![Jenkins](/content/jenkins/tutorials/common/images/global-tool-configurations/jenkins-private-key-credential-2.png)

