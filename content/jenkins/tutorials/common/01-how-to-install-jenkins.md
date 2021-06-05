# How to install Jenkins

### In Centos7/Redhat/OracleLinux
Go to Jenkins official download page [Jenkins official download page](https://www.jenkins.io/doc/book/installing/)

Click on Linux

![Jenkins website Download page](/content/jenkins/tutorials/common/images/installation/jenkins-website-dowload-page.png)

Click on Red Hat / CentOS

![jenkins website Download Linux page](/content/jenkins/tutorials/common/images/installation/jenkins-website-download-linux-page.png)

![jenkins website Download centos page](/content/jenkins/tutorials/common/images/installation/jenkins-website-download-centos-page.png)

##### Prerequisites:
* Java should be installed, preferably Java 11

##### Run the below commands to install Jenkins stable release and Java 11
```Shell
sudo wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
sudo yum upgrade
sudo yum install jenkins java-11-openjdk-devel
sudo systemctl daemon-reload
```

##### Start and enable the jenkins
```Shell
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

##### Check the Jenkins running status
```
sudo systemctl status jenkins
```
![jenkins running status](/content/jenkins/tutorials/common/images/installation/jenkins-running-status.png)

### Install Jenkins using docker

Now we will install jenkins as a docker container

##### Ports
* 8080:8080 --> To see the Jenkins UI
* 50000:50000 --> This port is used for slave nodes to connnect, if it is configured

##### Volumes
* jenkins-volume:/var/jenkins_home --> This will create a docker volume named **jenkins-volume** and store the jenkins data from **/var/jenkins_home jenkins/** where the jenkins data are stored
* /var/run/docker.sock:/var/run/docker.sock --> To execute docker commnads from jenkins

```
docker run --name jenkins -d -p 8080:8080 -p 50000:50000 -v jenkins-volume:/var/jenkins_home jenkins/jenkins:2.263.3
```

### Common steps for configuring Jenkins
Once Jenkins is installed, by default jenkins starts on port 8080

we can access the jenkins by opening the ip-address:8080 or localhost:8080 (if its insatlled locally) from  the browser

![jenkins ublock password page](/content/jenkins/tutorials/common/images/installation/jenkins-unlock-password.png)

Now get the initialadminpassword from /var/lib/jenkins/secrets/initialAdminPassword file

Change to root user and open the /var/lib/jenkins/secrets/initialAdminPassword file to get the password

![jenkins intila admin password](/content/jenkins/tutorials/common/images/installation/jenkins-initial-admin-password.png)

Click on **continue**

Click on **Install suggested plugins** 

![jenkins website Download centos page](/content/jenkins/tutorials/common/images/installation/jenkins-suggested-plugins.png)

This will automatically install the necessary plugins for Jenkins

![jenkins website Download centos page](/content/jenkins/tutorials/common/images/installation/jenkins-suggested-plugins-installation.png)

Enter the username, password and click on **Save and Continue**

![jenkins set username password](/content/jenkins/tutorials/common/images/installation/jenkins-set-username-password.png)

Click on **Save and Finish**

![jenkins final save and finish](/content/jenkins/tutorials/common/images/installation/jenkins-finish.png)

Click on **Start using Jenkins**

![jenkins start using](/content/jenkins/tutorials/common/images/installation/jenkins-start-using.png)

Jenkins Dashboard

![jenkins start using](/content/jenkins/tutorials/common/images/installation/jenkins-dashboard.png)
