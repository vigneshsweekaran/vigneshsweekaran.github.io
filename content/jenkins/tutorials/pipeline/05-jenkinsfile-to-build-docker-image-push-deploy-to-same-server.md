# How to write a Jenkinsfile to build a Maven project, build and push docker image and deploy the container to same server

### Prerequisites
* `maven`, `Docker` plugins should be installed in Jenkins. 
* Configure specific version of maven in Jenkins `Global Tool Configuration`

### References
* [How to install plugins in Jenkins](/content/jenkins/tutorials/common/02-how-to-install-plugins)
* [How to configure maven in Global Tool Configuration](/content/jenkins/tutorials/common/03-global-tool-configurations)
* [How to store credentials in Jenkins](https://vigneshsweekaran.github.io/content/jenkins/tutorials/common/04-how-to-store-credentials-in-jenkins)
* [How to create pipeline job in Jenkins](/content/jenkins/tutorials/pipeline/01-how-to-create-pipeline-job)

I have a sample hello-world maven project in github [hello-world](https://github.com/vigneshsweekaran/hello-world)

Maven is a build tool used to compile, test and package the application developed using Java programming language.

Jenkinsfile
```
pipeline {
    agent any
    tools {
        maven 'maven-3.6.3' 
    }
    environment {
        DATE = new Date().format('yy.M')
        TAG = "${DATE}.${BUILD_NUMBER}"
    }
    stages {
        stage ('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    docker.build("vigneshsweekaran/hello-world:${TAG}")
                }
            }
        }
	    stage('Pushing Docker Image to Dockerhub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker_credential') {
                        docker.image("vigneshsweekaran/hello-world:${TAG}").push()
                        docker.image("vigneshsweekaran/hello-world:${TAG}").push("latest")
                    }
                }
            }
        }
        stage('Deploy'){
            steps {
                sh "docker stop hello-world | true"
                sh "docker rm hello-world | true"
                sh "docker run --name hello-world -d -p 9004:8080 vigneshsweekaran/hello-world:${TAG}"
            }
        }
    }
}


```

In the `tools` block we have used `maven` definition to refer the maven installation **maven-3.6.3** configured in Jenkins Global tool configuration.

In the `environment` block we have created two environment variables `DATE` and `TAG` The `TAG` environment varaible is used the tag the generated docker image.

In the stages block we have created four stages `Build`, `Docker Build`, `Pushing Docker Image to Dockerhub` and `Deploy`. 

In the `Build` stage we are executing `mvn clean package` command to compile and package the java application.