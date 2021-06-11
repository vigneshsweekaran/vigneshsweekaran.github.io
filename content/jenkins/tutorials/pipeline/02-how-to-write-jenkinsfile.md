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
* Inside steps block we should have atleast one **step(inbuild function name)**
  eg:
    * **sh** step to execute any shell commands
    * **echo** step to print some data

```
pipeline {
    agent any

    stages {
        stage ('Print') {
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

In the above Jenkinsfile, we have created the **Print** stage which uses the **echo** step to print `Hello DevOps Engineers`

### post block in Jenkinsfile

[Official documentation](https://www.jenkins.io/doc/book/pipeline/syntax/#post)

The `post` block is inside a pipeline block.

```
pipeline {
    agent any

    stages {
        stage ('Print') {
            steps {
                echo "Hello Devops Engineers"
            }
        }
    }
    post {
        always { 
            echo 'I will always say Hello again!'
        }
        success {
            echo 'I will say Hello only if job is success'
        }
        failure {
            echo 'I will say Hello only if job is failure'
        }
    }
}
```

Even if some stages failed, post block will be executed always. In post block we have three important blocks **always**, **success**, **failure**

* always - If we trigger a job, whether the stage is success or failure, this block will be always executed.
* success - This block will be executed only if all the stages are passed.
* failure - This block will be executed if any one of the stage is failed.

### triggers block in Jenkinsfile

[Official documentation](https://www.jenkins.io/doc/book/pipeline/syntax/#triggers)

The `triggers` block is inside a pipeline block.

`triggers` block is used to re-trigger the job based on the defined triggers, it can be **cron**, **pollSCM** and **upstream**.

* **cron** - Accepts a cron-style string to define a regular interval at which the Pipeline should be re-triggered, for example: triggers { cron('H/15 * * * *') } This will trigger the job every fifteen minutes

* **pollSCM** - Accepts a cron-style string to define a regular interval at which Jenkins should check for new source changes. If new changes exist, the Pipeline will be re-triggered. For example: triggers { pollSCM('* * * * *') } This will check for new source changes in git repository every one minute.

* **upstream** - Accepts a comma-separated string of jobs and a threshold. When any job in the string finishes with the minimum threshold, the Pipeline will be re-triggered. For example: triggers { upstream(upstreamProjects: 'job1,job2', threshold: hudson.model.Result.SUCCESS) } This will trigger the job, if job1 or job2 finished with success status.

```
pipeline {
    agent any

    triggers {
        cron('H/15 * * * *')
    }

    stages {
        stage ('Print') {
            steps {
                echo "Hello Devops Engineers"
            }
        }
    }

    post {
        always { 
            echo 'I will always say Hello again!'
        }
        success {
            echo 'I will say Hello only if job is success'
        }
        failure {
            echo 'I will say Hello only if job is failure'
        }
    }
}
```

### parameters block in Jenkinsfile

[Official documentation](https://www.jenkins.io/doc/book/pipeline/syntax/#parameters)

The `parameters` block is inside a pipeline block.

The **parameters** block is used to pass dynamic paramerts/variables to the job. It has the following types

* **string** - A parameter of a string type, for example: parameters { string(name: 'DEPLOY_ENV', defaultValue: 'staging', description: '') }

* **text** - A text parameter, which can contain multiple lines, for example: parameters { text(name: 'DEPLOY_TEXT', defaultValue: 'One\nTwo\nThree\n', description: '') }

* **booleanParam** - A boolean parameter, for example: parameters { booleanParam(name: 'DEBUG_BUILD', defaultValue: true, description: '') }

* **choice** - A choice parameter, for example: parameters { choice(name: 'CHOICES', choices: ['one', 'two', 'three'], description: '') }

* **password** - A password parameter, for example: parameters { password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'A secret password') }

```
pipeline {
    agent any

    triggers {
        cron('H/15 * * * *')
    }

    parameters {
        choice(name: 'environment', choices: ['dev', 'uat', 'prod'], description: 'Select environment to deploy')
    }

    stages {
        stage ('Print') {
            steps {
                echo "Hello Devops Engineers"
            }
        }
    }

    post {
        always { 
            echo 'I will always say Hello again!'
        }
        success {
            echo 'I will say Hello only if job is success'
        }
        failure {
            echo 'I will say Hello only if job is failure'
        }
    }
}
```

### environment block in Jenkinsfile

[Official documentation](https://www.jenkins.io/doc/book/pipeline/syntax/#environment)

The environment block specifies a sequence of key-value pairs which will be defined as environment variables for all steps, or stage-specific steps, depending on where the environment block is located within the Pipeline or within the stage.

The **environment** block can be inside the pipeline block or inside the stage block

```
pipeline {
    agent any

    environment { 
        NAME = 'vignesh'
    }

    triggers {
        cron('H/15 * * * *')
    }

    parameters {
        choice(name: 'environment', choices: ['dev', 'uat', 'prod'], description: 'Select environment to deploy')
    }

    stages {
        stage ('Print') {
            environment { 
                MESSAGE = 'Hello Devops Engineers'
            }
            steps {
                echo "$MESSAGE"
            }
        }
    }

    post {
        always { 
            echo 'I will always say Hello again!'
        }
        success {
            echo 'I will say Hello only if job is success'
        }
        failure {
            echo 'I will say Hello only if job is failure'
        }
    }
}
```
If environment block is defined within the stage block, then those environment variables will be accessible only within that stage. 