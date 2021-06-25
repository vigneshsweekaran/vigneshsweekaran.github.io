# How to write a Jenkinsfile to build a Maven project and deploy to Apache Tomcat webserver

### Prerequisites
* **maven** **Deploy to container** plugins should be installed in Jenkins. 
* Configure specific version of maven in Jenkins **Global Tool Configuration**

### References
* [How to install plugins in Jenkins](/content/jenkins/tutorials/common/02-how-to-install-plugins)
* [How to configure maven in Global Tool Configuration](/content/jenkins/tutorials/common/03-global-tool-configurations)
* [How to create pipeline job in Jenkins](/content/jenkins/tutorials/pipeline/01-how-to-create-pipeline-job)
* [How to install Tomcat](/content/tomcat/tutorials/installation)
* [How to manually deploy the java application in Tomcat]()

I have a sample hello-world maven project in github [hello-world](https://github.com/vigneshsweekaran/hello-world)

Maven is a build tool used to compile, test and package the application developed using Java programming language.

Jenkinsfile
```
pipeline {
  agent any
  tools {
    maven 'maven-3.6.3' 
  }
  stages {
    stage ('Build') {
      steps {
        sh 'mvn clean package'
      }
    }
  }
}
```

In the `tools` block we have used `maven` definition to refer the maven installation **maven-3.6.3** configured in Jenkins Global tool configuration.

We have created one stage called **Build**, here we are executing the **mvn clean package** command to compile and package the java application.

It will compile the java code and generate the package in **targets** folder.

![jenkins](/content/jenkins/tutorials/pipeline/images/03-maven-job/jenkins-maven-job.png)