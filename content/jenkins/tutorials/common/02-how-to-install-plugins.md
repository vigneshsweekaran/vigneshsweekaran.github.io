# How to install plugins in Jenkins

From Jenkins dashboard, click on **Manage Jenkins**

![Jenkins](/content/jenkins/tutorials/common/images/plugins/jenkins-manage-jenkins.png)

Click on **ManagePlugins**

![Jenkins](/content/jenkins/tutorials/common/images/plugins/jenkins-manage-plugins.png)

Click on **Availabe** tab and type the plugin name in search box, select the plugin and click on **Install without restart**

![Jenkins](/content/jenkins/tutorials/common/images/plugins/jenkins-plugin-installation.png)

![Jenkins](/content/jenkins/tutorials/common/images/plugins/jenkins-plugin-install-success.png)

### Commonly used plugins and their uses

* **Artifactory** - To interact with Jfrog Artifactory
* **Kubernetes** - To interact with kubernetes cluster and also to create jenkins agents in kubernetes cluster
* **Deploy to container** - To deploy war file to tomcat
* **Docker** - To build, run and  push docker images in freestyle job
* **Docker Pipeline** - To build, run and  push docker images in Pipeline job
* **NodeJs** - To install multiple versions of nodejs from Global tool configuration
* **Slack Notification** - To post message to slack channel, generally we will post build status to slack channel
* **SonarQube Scanner** - To connect to the sonarqube server and install the sonarqube scanner from global tool configuration
* **Anchore Container Image Scanner** - To connect to Anchore engine for docker image scanning
