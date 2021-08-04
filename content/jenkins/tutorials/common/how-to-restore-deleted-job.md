## How to restore deleted job in Jenkins

### Prerequisites
* **Job Configuration History** plugin should be installed in Jenkins.

### References
* [How to install plugins in Jenkins](/content/jenkins/tutorials/common/02-how-to-install-plugins)

### Restore deleted Jobs

Lets delete a job first

![Jenkins](/content/jenkins/tutorials/common/images/restore-deleted-job/jenkins-delete-job.png)

Go to Jenkins Homepage/Dashboard --> click on `Job Config History`

![Jenkins](/content/jenkins/tutorials/common/images/restore-deleted-job/jenkins-dashboard.png)

Click on `Show deleted jobs only` and click on restore icon next to the Job name

![Jenkins](/content/jenkins/tutorials/common/images/restore-deleted-job/jenkins-job-config-history.png)

![Jenkins](/content/jenkins/tutorials/common/images/restore-deleted-job/jenkins-restore-project.png)

Now Job is restored but not enabled to run the pipeline

Click on `Enbale` to enable the restored job

![Jenkins](/content/jenkins/tutorials/common/images/restore-deleted-job/jenkins-enable-job.png)

Now pipeline is fully enabled and we can run the pipeline now.

![Jenkins](/content/jenkins/tutorials/common/images/restore-deleted-job/jenkins-job-enabled.png)
