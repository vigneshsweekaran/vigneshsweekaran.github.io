# How to write a Jenkinsfile to build a Maven project and deploy to Apache Tomcat webserver

### Prerequisites
* `maven`, `Deploy to container` plugins should be installed in Jenkins. 
* Configure specific version of maven in Jenkins `Global Tool Configuration`

### References
* [How to install plugins in Jenkins](/content/jenkins/tutorials/common/02-how-to-install-plugins)
* [How to configure maven in Global Tool Configuration](/content/jenkins/tutorials/common/03-global-tool-configurations)
* [How to store credentials in Jenkins](https://vigneshsweekaran.github.io/content/jenkins/tutorials/common/04-how-to-store-credentials-in-jenkins)
* [How to create pipeline job in Jenkins](/content/jenkins/tutorials/pipeline/01-how-to-create-pipeline-job)
* [How to install Tomcat](/content/tomcat/tutorials/installation)
* [How to manually deploy the java application to Tomcat](/content/tomcat/tutorials/how-to-manually-deploy-java-application-to-tomcat)
* [How to deploy the java application to Tomcat 9 webserver using maven](https://vigneshsweekaran.github.io/content/tomcat/tutorials/how-to-deploy-java-application-to-tomcat-using-maven)

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
    stage ('Deploy') {
      steps {
        script {
          deploy adapters: [tomcat9(credentialsId: 'tomcat_credential', path: '', url: 'http://dayal-test.letspractice.tk:8081')], contextPath: '/pipeline', onFailure: false, war: 'webapp/target/*.war' 
        }
      }
    }
  }
}

```

In the `tools` block we have used `maven` definition to refer the maven installation **maven-3.6.3** configured in Jenkins Global tool configuration.

In the stages block we have created two stages `Build` and `Deploy`. 

In the `Build` stage we are executing `mvn clean package` command to compile and package the java application.

It will compile the java code and generate the package in **targets** folder.

![jenkins](/content/jenkins/tutorials/pipeline/images/04-maven-tomcat/jenkins-maven-job.png)

In the `Deploy` stage we are using the `Deploy to container` plugin to deploy the hello-world.war file to tomcat webserver.

Parameters passed to `Deploy to container` plugin definition.
* credentialsId: 'tomcat_credential' --> Store the tomcat username and password in Jenkins credentials and pass the tomcat credential id here. I have stored the tomcat credentals in Jenkins and created the id as `tomcat_credential`

  Before storing the credentials in jenkins, create a user in Tomcat with `manager-script` role.

  To create users in Tomcat, open the file **/var/lib/tomcat9/conf/tomcat-users.xml**
  ```
  sudo vi /var/lib/tomcat9/conf/tomcat-users.xml
  ```

  Go to end of the file and paste the following lines inside tomcat-users block and save it.

  ```
    <role rolename="manager-script"/>
    <user username="deployer" password="deployer" roles="manager-script"/>
  ```

  ![jenkins](/content/jenkins/tutorials/pipeline/images/04-maven-tomcat/jenkins-tomcat-users-xml.png)

  Here we have defined one role **manager-script** and created one user **deployer** and assigned the **manager-script** role to the deployer user.

  Then restart the tomcat9
  ```
  sudo systemctl restart tomcat9
  ```

* url: 'http://152.70.71.239:8080/' --> Your tomcat url
* contextPath: '/pipeline' --> Context path to deploy in Tomcat
* onFailure: false --> Flag used to control the deployment, I dont want to deploy If my pipeline JOb fails, thatswhy I am setting `onFailure` flag to `false`
* war: 'target/*.war' --> Your war file name

![tomcat](/content/jenkins/tutorials/pipeline/images/04-maven-tomcat/jenkins-output.png)

##### Previous Topic
[[Part-1] Jenkinsfile to build a maven project](https://vigneshsweekaran.github.io/content/jenkins/tutorials/pipeline/03-jenkinsfile-to-build-maven-project)

##### Next Topic
* [[Part-3] Jenkinsfile to build docker image, push to dockerhub and deploy to same server](https://vigneshsweekaran.github.io/content/jenkins/tutorials/pipeline/05-jenkinsfile-to-build-docker-image-push-deploy-to-same-server)
