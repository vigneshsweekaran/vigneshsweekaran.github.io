# Parallel stage in Jenkinsfile

### Reference: https://github.com/vigneshsweekaran/hello-world

### Defining parallel stage in Jenkinsfile without the agent block in stage's. If the stages are not defined with agent block and if it is in parallel block, all the stages will be executed paralley in the same agent where the job is running
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
        stage ('Check maven version') {
            steps {
                sh 'mvn --version'
                println(TAG)
            }
        }
        stage ('Generating Package') {
            parallel {
                stage ('Generate package for app1') {
                    steps {
                        dir ('app1') {
                            sh 'sleep 120' 
                            sh 'mvn clean package'
                        }
                    }
                }
                stage ('Generate package for app2') {
                    steps {
                        dir ('app2') {
                            sh 'sleep 120'
                            sh 'mvn clean package'
                        }
                    }
                }
                stage ('Generate package for app3') {
                    steps {
                        dir ('app3') {
                            sh 'sleep 120'
                            sh 'mvn clean package'
                        }
                    }
                }
            }
        }
    }
}
```

###  Defining parallel stage in Jenkinsfile with the agent block per stage. Each stage will executed paralley in a separate agent.
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
        stage ('Check maven version') {
            steps {
                sh 'mvn --version'
                println(TAG)
            }
        }
        stage ('Generating Package') {
            parallel {
                stage ('Generate package for app1') {
                    agent {
                        label "ubuntu1"
                    }
                    steps {
                        dir ('app1') {
                            sh 'mvn clean package'
                        }
                    }
                }
                stage ('Generate package for app2') {
                    agent {
                        label "ubuntu1"
                    }
                    steps {
                        dir ('app2') {
                            sh 'mvn clean package'
                        }
                    }
                }
                stage ('Generate package for app3') {
                    agent {
                        label "ubuntu1"
                    }
                    steps {
                        dir ('app3') {
                            sh 'mvn clean package'
                        }
                    }
                }
            }
        }
    }
}
```
