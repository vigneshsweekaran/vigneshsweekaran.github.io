# How to create pipeline job in Jenkins

### Approach 1: Jenkins pipeline script(Declarative pipeline) in Jenkins editor itself

This approach is good when we want to test some feature quickly. Now we will create a Job to print "Hello World" This approach is not recommended for realtime project.

From Jenkins dashboard, click on **New Item** 
![Jenkins](/content/jenkins/tutorials/pipeline/images/01-first-pipeline-job/jenkins-job-new-item.png)

Enter the job name, select **Pipeline** and click on **OK**
![Jenkins](/content/jenkins/tutorials/pipeline/images/01-first-pipeline-job/jenkins-first-job-create.png)

Scroll down and got to **Pipeline** section, in **definition** select **Pipeline script**, from **try sample Pipeline...** select **Hello World** sample pipeline script is added. click on **Save**

In this we have **Hello** stage, which will execute a echo command to print "Hello World"

![Jenkins](/content/jenkins/tutorials/pipeline/images/01-first-pipeline-job/jenkins-first-job-configuration.png)

Click on **Build Now**
![Jenkins](/content/jenkins/tutorials/pipeline/images/01-first-pipeline-job/jenkins-click-build-now.png)

Click on build no **#1**
![Jenkins](/content/jenkins/tutorials/pipeline/images/01-first-pipeline-job/jenkins-click-on-build-number.png)

Click on **Console Output** Now we can see the **Hello World** is printed on the screen
![Jenkins](/content/jenkins/tutorials/pipeline/images/01-first-pipeline-job/jenkins-click-on-console-output.png)

### Approach 2: Jenkins pipeline script(Declarative pipeline) in Jenkinsfile

In this approach, the pipeline script is written to a file called **Jenkinsfile** then this file is added to root folder of source code repository eg: Github, Gitlab

While creating the pipeline job we will clone the repository first, read the **Jenkinsfile** and execute all the stages defined in the Jenkinsfile.
