# How to write a Jenkinsfile

In Jenkins pipeline, we have two way of writing Jenkinsfile,
* Scripted way - Older way, we have to write lot of logics using groovy DSL
* Declarative way - Newer way, comes with lot of inbuild functions

From [Official Documentation:](https://www.jenkins.io/doc/book/pipeline/)

```
A Jenkinsfile can be written using two types of syntax - Declarative and Scripted.

Declarative and Scripted Pipelines are constructed fundamentally differently.

Declarative Pipeline is a more recent feature of Jenkins Pipeline which:

  --> provides richer syntactical features over Scripted Pipeline syntax, and

  --> is designed to make writing and reading Pipeline code easier.
```

We will see only how to write Jenkinsfile using Declarative way

In Declarative pipeline, the Jenkinsfile start with **pipeline** block `(Mandatory)`

```
pipeline {

}
```

* Inside pipeline block we have **agent** block `(Mandatory)` and **stages** block `(Mandatory)`
* Inside satges block we should have atleast one **stage** block
* Inside stage block we should have **steps** block
* Inside steps we should have atleast one **step(inbuild function name)**
  eg:
    * **sh** step to execute any shell commands
    * **echo** step to print some data

```
pipeline {
    agent any

    stages {
        stage () {
            steps {
                echo "Hello Devops Engineers"
            }
        }
    }
}
```

* **agent** block is used to tell Jenkins where to execute this Job. By default it executes in the same Jenkins instance. If we have configures slaves for Jenkins, then we can use this agent block to tell the Jenkins to execute the Job in particular slave.
* **stage** block is used to group the set of tasks
* **steps** block is used to group the step
* **step** is the basic unit which executes the command.
